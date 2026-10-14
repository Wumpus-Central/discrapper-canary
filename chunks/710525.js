r.d(t, { qn: () => c, yu: () => o, DL: () => s });
var n = r(71532);
async function l() {
    let e = await (0, n.Cv)();
    if (null == e) throw Error("Stripe is not loaded");
    return e;
}
async function a(e, t) {
    let { error: r, paymentIntent: n } = await e.retrievePaymentIntent(t);
    if (null != r) throw Error(`Could not retrieve the payment intent: ${r.message}`);
    if (null == n) throw Error("Payment intent does not exist");
    return n;
}
async function i(e, t, r) {
    let { error: n } = await e.confirmCardPayment(t, r);
    if (null != n) throw Error(`Card authentication failed: ${n.message}`);
}
async function d(e) {
    let { client_secret: t, payment_method_id: r } = e;
    if (null == t) throw Error("Stripe 3DS context has no client secret");
    let n = await l(),
        d = await a(n, t);
    switch (d.status) {
        case "succeeded":
        case "processing":
            return;
        case "requires_payment_method":
        case "requires_confirmation":
        case "requires_action":
            return i(
                n,
                t,
                (function (e, t) {
                    if ("requires_payment_method" === e.status && null != t) return { payment_method: t };
                })(d, r),
            );
        default:
            throw Error(`Unexpected payment intent status: ${d.status}`);
    }
}
function c(e) {
    let t = null != e ? e.billing_facet : null,
        r = null != t ? t.order_signing_deferral_context : null;
    return null != r ? r.payment_redirect_context : null;
}
function s(e) {
    let { redirect_url: t } = e;
    if (null == t) throw Error("Payment redirect context has no redirect url");
    window.open(t);
}
async function o(e) {
    if (null == e) throw Error("Order signing was deferred without a deferral context");
    let { payment_redirect_context: t, stripe_3ds_context: r } = e;
    if (null != t) return void s(t);
    if (null != r) return void (await d(r));
    throw Error("Order signing deferral context has no action the client can complete");
}
