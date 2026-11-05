r.d(t, { qn: () => l, DL: () => a, yu: () => i });
var n = r(558740);
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
        return void (await (async function (e, t) {
            let { client_secret: r, payment_method_id: l } = e;
            if (null == r) throw Error("Stripe 3DS context has no client secret");
            let a = await (async function (e) {
                    let t = await (0, n.Cv)(e);
                    if (null == t) throw Error("Stripe is not loaded");
                    return t;
                })(t),
                i = await (async function (e, t) {
                    let { error: r, paymentIntent: n } = await e.retrievePaymentIntent(t);
                    if (null != r) throw Error(`Could not retrieve the payment intent: ${r.message}`);
                    if (null == n) throw Error("Payment intent does not exist");
                    return n;
                })(a, r);
            switch (i.status) {
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
                        a,
                        r,
                        (function (e, t) {
                            if ("requires_payment_method" === e.status && null != t) return { payment_method: t };
                        })(i, l),
                    );
                default:
                    throw Error(`Unexpected payment intent status: ${i.status}`);
            }
        })(r, e.payment_gateway_merchant_account_id));
    throw Error("Order signing deferral context has no action the client can complete");
}
