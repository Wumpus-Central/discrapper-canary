r.d(t, { f: () => R });
var n = r(582128),
    a = r(136857),
    l = r(739508),
    i = r(158317),
    d = r(71532);
async function c() {
    let e = await (0, d.Cv)();
    if (null == e) throw Error("Stripe is not loaded");
    return e;
}
async function s(e, t) {
    let { error: r, paymentIntent: n } = await e.retrievePaymentIntent(t);
    if (null != r) throw Error(`Could not retrieve the payment intent: ${r.message}`);
    if (null == n) throw Error("Payment intent does not exist");
    return n;
}
async function o(e, t, r) {
    let { error: n } = await e.confirmCardPayment(t, r);
    if (null != n) throw Error(`Card authentication failed: ${n.message}`);
}
async function _(e) {
    let { client_secret: t, payment_method_id: r } = e;
    if (null == t) throw Error("Stripe 3DS context has no client secret");
    let n = await c(),
        a = await s(n, t);
    switch (a.status) {
        case "succeeded":
        case "processing":
            return;
        case "requires_payment_method":
        case "requires_confirmation":
        case "requires_action":
            return o(
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
async function u(e) {
    if (null == e) throw Error("Order signing was deferred without a deferral context");
    let { payment_redirect_context: t, stripe_3ds_context: r } = e;
    if (null != t)
        return void (function (e) {
            let { redirect_url: t } = e;
            if (null == t) throw Error("Payment redirect context has no redirect url");
            window.open(t);
        })(t);
    if (null != r) return void (await _(r));
    throw Error("Order signing deferral context has no action the client can complete");
}
var E = r(26279),
    h = r(660183);
function R(e) {
    let { order: t, errorSource: r, onSignFailure: d, onError: c } = e,
        [s, o] = (0, n.useState)(null),
        _ = (0, n.useCallback)(
            (e) => {
                (o(e), c?.(e));
            },
            [c],
        ),
        R = (0, n.useCallback)(
            (e, t, n) => {
                let i = e instanceof a.Ay ? e : new a.Ay(e);
                (0, l.gr)(e) || (0, l.pM)(e instanceof Error ? e : i, { tags: { source: r }, extra: t });
                let d = null != n ? new a.Ay(n) : i;
                return (_(d), d);
            },
            [r, _],
        ),
        C = (0, n.useCallback)(
            async function () {
                let {
                    loadId: e,
                    purchaseToken: r,
                    gatewayCheckoutContext: n,
                    errorExtra: l,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (null == t) return (_(new a.Ay("Order not created yet")), { type: "failed" });
                o(null);
                try {
                    let d = await (0, i.Ub)({ orderId: t.id, loadId: e, purchaseToken: r, gatewayCheckoutContext: n });
                    if (d.status === E.Re.SIGNED) return { type: "signed", order: d };
                    if (d.status === E.Re.SIGNING_IN_PROGRESS) {
                        let e = d.billing_facet;
                        try {
                            await u(null != e ? e.order_signing_deferral_context : null);
                        } catch (e) {
                            return (R(e, { ...l, orderId: t.id }, h.intl.string(h.t.khEaRI)), { type: "failed" });
                        }
                        return { type: "pending", order: d };
                    }
                    let c = (function (e) {
                        let { error: t } = e;
                        return null == t || t.code === E.lD.UNKNOWN_ERROR_CODE
                            ? null
                            : new a.Ay(t.message, t.billing_error_code);
                    })(d);
                    if (null != c) return (_(c), { type: "failed" });
                    if (null != d.error) throw Error(`Order signing failed with error: ${d.error.code}`);
                    throw Error(`Unexpected order status: ${d.status}`);
                } catch (e) {
                    if (e instanceof i.FY) return (d?.(e.order), _(e), { type: "failed" });
                    return (R(e, { ...l, orderId: t.id }), { type: "failed" });
                }
            },
            [t, d, R, _],
        );
    return { error: s, signOrder: C, reportError: R };
}
