var n = r(558740);
r.d(
    t,
    {},
    {
        $: async function (e, t) {
            let { client_secret: r, payment_method_id: a } = e;
            if (null == r) throw Error("Stripe 3DS context has no client secret");
            let l = await (async function (e) {
                    let t = await (0, n.Cv)(e);
                    if (null == t) throw Error("Stripe is not loaded");
                    return t;
                })(t),
                i = await (async function (e, t) {
                    let { error: r, paymentIntent: n } = await e.retrievePaymentIntent(t);
                    if (null != r) throw Error(`Could not retrieve the payment intent: ${r.message}`);
                    if (null == n) throw Error("Payment intent does not exist");
                    return n;
                })(l, r);
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
                        l,
                        r,
                        (function (e, t) {
                            if ("requires_payment_method" === e.status && null != t) return { payment_method: t };
                        })(i, a),
                    );
                default:
                    throw Error(`Unexpected payment intent status: ${i.status}`);
            }
        },
    },
);
