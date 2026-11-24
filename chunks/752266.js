var r = n(558740);
async function i(e) {
    let t = await (0, r.Cv)(e);
    if (null == t) throw Error("Stripe is not loaded");
    return t;
}
n.d(
    t,
    {},
    {
        $: async function (e, t) {
            let { client_secret: n, payment_method_id: r } = e;
            if (null == n) throw Error("Stripe 3DS context has no client secret");
            let a = await i(t),
                l = await (async function (e, t) {
                    let { error: n, paymentIntent: r } = await e.retrievePaymentIntent(t);
                    if (null != n) throw Error(`Could not retrieve the payment intent: ${n.message}`);
                    if (null == r) throw Error("Payment intent does not exist");
                    return r;
                })(a, n);
            switch (l.status) {
                case "succeeded":
                case "processing":
                    return;
                case "requires_payment_method":
                case "requires_confirmation":
                case "requires_action":
                    return (async function (e, t, n) {
                        let { error: r } = await e.confirmCardPayment(t, n);
                        if (null != r) throw Error(`Card authentication failed: ${r.message}`);
                    })(
                        a,
                        n,
                        (function (e, t) {
                            if ("requires_payment_method" === e.status && null != t) return { payment_method: t };
                        })(l, r),
                    );
                default:
                    throw Error(`Unexpected payment intent status: ${l.status}`);
            }
        },
        h: i,
    },
);
