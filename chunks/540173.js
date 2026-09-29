r.d(t, { f: () => R });
var n = r(582128),
    a = r(136857),
    l = r(739508),
    i = r(158317),
    d = r(71532);
async function s() {
    let e = await (0, d.Cv)();
    if (null == e) throw Error("Stripe is not loaded");
    return e;
}
async function o(e, t) {
    let { error: r, paymentIntent: n } = await e.retrievePaymentIntent(t);
    if (null != r) throw Error(`Could not retrieve the payment intent: ${r.message}`);
    if (null == n) throw Error("Payment intent does not exist");
    return n;
}
async function c(e, t, r) {
    let { error: n } = await e.confirmCardPayment(t, r);
    if (null != n) throw Error(`Card authentication failed: ${n.message}`);
}
async function u(e) {
    let { client_secret: t, payment_method_id: r } = e;
    if (null == t) throw Error("Stripe 3DS context has no client secret");
    let n = await s(),
        a = await o(n, t);
    switch (a.status) {
        case "succeeded":
        case "processing":
            return;
        case "requires_payment_method":
        case "requires_confirmation":
        case "requires_action":
            return c(
                n,
                t,
                (function (e, t) {
                    if ("requires_payment_method" === e.status && null != t) return { payment_method: t };
                })(a, r),
            );
        default:
            throw Error(`Unexpected payment intent status: ${a.status}`);
    }
}
async function h(e) {
    if (null == e) throw Error("Order signing was deferred without a deferral context");
    let { payment_redirect_context: t, stripe_3ds_context: r } = e;
    if (null != t)
        return void (function (e) {
            let { redirect_url: t } = e;
            if (null == t) throw Error("Payment redirect context has no redirect url");
            window.open(t);
        })(t);
    if (null != r) return void (await u(r));
    throw Error("Order signing deferral context has no action the client can complete");
}
var _ = r(26279),
    E = r(375708);
function R(e) {
    let { order: t, errorSource: r, onSignFailure: d, onError: s } = e,
        [o, c] = (0, n.useState)(null),
        u = (0, n.useCallback)(
            (e) => {
                (c(e), s?.(e));
            },
            [s],
        ),
        R = (0, n.useCallback)(
            (e, t, n) => {
                let i = e instanceof a.Ay ? e : new a.Ay(e);
                (0, l.gr)(e) || (0, l.pM)(e instanceof Error ? e : i, { tags: { source: r }, extra: t });
                let d = null != n ? new a.Ay(n) : i;
                return (u(d), d);
            },
            [r, u],
        ),
        C = (0, n.useCallback)(
            async function () {
                let {
                    loadId: e,
                    purchaseToken: r,
                    errorExtra: n,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (null == t) return (u(new a.Ay("Order not created yet")), { type: "failed" });
                c(null);
                try {
                    let l = await (0, i.Ub)({ orderId: t.id, loadId: e, purchaseToken: r });
                    if (l.status === _.Re.SIGNED) return { type: "signed", order: l };
                    if (l.status === _.Re.SIGNING_IN_PROGRESS) {
                        let e = l.billing_facet;
                        try {
                            await h(null != e ? e.order_signing_deferral_context : null);
                        } catch (e) {
                            return (R(e, { ...n, orderId: t.id }, E.intl.string(E.t.khEaRI)), { type: "failed" });
                        }
                        return { type: "pending", order: l };
                    }
                    if (null != l.errors && l.errors.includes(_.lD.SMITE_TOKEN_AUTHORIZATION_REQUIRED))
                        return (
                            u(
                                new a.Ay(
                                    E.intl.string(E.t.Y3fdOp),
                                    a.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED,
                                ),
                            ),
                            { type: "failed" }
                        );
                    if (null != l.errors && l.errors.length > 0)
                        throw Error(`Order signing failed with errors: ${l.errors.join(", ")}`);
                    throw Error(`Unexpected order status: ${l.status}`);
                } catch (e) {
                    if (e instanceof i.FY) return (d?.(e.order), u(e), { type: "failed" });
                    return (R(e, { ...n, orderId: t.id }), { type: "failed" });
                }
            },
            [t, d, R, u],
        );
    return { error: o, signOrder: C, reportError: R };
}
