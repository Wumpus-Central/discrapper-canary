r.d(t, { f: () => C });
var n = r(582128),
    a = r(136857),
    i = r(739508),
    l = r(158317),
    s = r(71532);
async function c() {
    let e = await (0, s.Cv)();
    if (null == e) throw Error("Stripe is not loaded");
    return e;
}
async function o(e, t) {
    let { error: r, paymentIntent: n } = await e.retrievePaymentIntent(t);
    if (null != r) throw Error(`Could not retrieve the payment intent: ${r.message}`);
    if (null == n) throw Error("Payment intent does not exist");
    return n;
}
async function u(e, t, r) {
    let { error: n } = await e.confirmCardPayment(t, r);
    if (null != n) throw Error(`Card authentication failed: ${n.message}`);
}
async function d(e) {
    let { client_secret: t, payment_method_id: r } = e;
    if (null == t) throw Error("Stripe 3DS context has no client secret");
    let n = await c(),
        a = await o(n, t);
    switch (a.status) {
        case "succeeded":
        case "processing":
            return;
        case "requires_payment_method":
        case "requires_confirmation":
        case "requires_action":
            return u(
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
    if (null != r) return void (await d(r));
    throw Error("Order signing deferral context has no action the client can complete");
}
var _ = r(26279),
    E = r(375708);
function C(e) {
    let { order: t, errorSource: r, onSignFailure: s, onError: c } = e,
        [o, u] = (0, n.useState)(null),
        d = (0, n.useCallback)(
            (e) => {
                (u(e), c?.(e));
            },
            [c],
        ),
        C = (0, n.useCallback)(
            (e, t, n) => {
                let l = e instanceof a.Ay ? e : new a.Ay(e);
                (0, i.gr)(e) || (0, i.pM)(e instanceof Error ? e : l, { tags: { source: r }, extra: t });
                let s = null != n ? new a.Ay(n) : l;
                return (d(s), s);
            },
            [r, d],
        ),
        R = (0, n.useCallback)(
            async function () {
                let {
                    loadId: e,
                    purchaseToken: r,
                    errorExtra: n,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (null == t) return (d(new a.Ay("Order not created yet")), { type: "failed" });
                u(null);
                try {
                    let a = await (0, l.Ub)({ orderId: t.id, loadId: e, purchaseToken: r });
                    if (a.status === _.Re.SIGNED) return { type: "signed", order: a };
                    if (a.status === _.Re.SIGNING_IN_PROGRESS) {
                        let e = a.billing_facet;
                        try {
                            await h(null != e ? e.order_signing_deferral_context : null);
                        } catch (e) {
                            return (C(e, { ...n, orderId: t.id }, E.intl.string(E.t.khEaRI)), { type: "failed" });
                        }
                        return { type: "pending", order: a };
                    }
                    if (null != a.errors && a.errors.length > 0)
                        throw Error(`Order signing failed with errors: ${a.errors.join(", ")}`);
                    throw Error(`Unexpected order status: ${a.status}`);
                } catch (e) {
                    if (e instanceof l.FY) return (s?.(e.order), d(e), { type: "failed" });
                    return (C(e, { ...n, orderId: t.id }), { type: "failed" });
                }
            },
            [t, s, C, d],
        );
    return { error: o, signOrder: R, reportError: C };
}
