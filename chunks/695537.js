r.d(t, { qn: () => l, DL: () => a, yu: () => i });
var n = r(71532);
function l(e) {
    let t = null != e ? e.billing_facet : null,
        r = null != t ? t.order_signing_deferral_context : null;
    return null != r ? r.payment_redirect_context : null;
}
function a(e) {
    let { redirect_url: t } = e;
    if (null == t) throw Error("Payment redirect context has no redirect url");
    window.open(t);
}
async function i(e) {
    if (null == e) throw Error("Order signing was deferred without a deferral context");
    let { payment_redirect_context: t, stripe_3ds_context: r } = e;
    if (null != t) return void a(t);
    if (null != r)
        return void (await (async function (e) {
            let { client_secret: t, payment_method_id: r } = e;
            if (null == t) throw Error("Stripe 3DS context has no client secret");
            let l = await (async function () {
                    let e = await (0, n.Cv)();
                    if (null == e) throw Error("Stripe is not loaded");
                    return e;
                })(),
                a = await (async function (e, t) {
                    let { error: r, paymentIntent: n } = await e.retrievePaymentIntent(t);
                    if (null != r) throw Error(`Could not retrieve the payment intent: ${r.message}`);
                    if (null == n) throw Error("Payment intent does not exist");
                    return n;
                })(l, t);
            switch (a.status) {
                case "succeeded":
                case "processing":
                    return;
                case "requires_payment_method":
                case "requires_confirmation":
                case "requires_action":
                    return (async function (e, t, r) {
                        let { error: n } = await e.confirmCardPayment(t, r);
                        if (null != n) throw Error(`Card authentication failed: ${n.message}`);
                    })(
                        l,
                        t,
                        (function (e, t) {
                            if ("requires_payment_method" === e.status && null != t) return { payment_method: t };
                        })(a, r),
                    );
                default:
                    throw Error(`Unexpected payment intent status: ${a.status}`);
            }
        })(r));
    throw Error("Order signing deferral context has no action the client can complete");
}
