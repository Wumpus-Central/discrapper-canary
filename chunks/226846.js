l.d(t, { q: () => c });
var a = l(627968);
l(64700);
var n = l(397927),
    r = l(73079),
    i = l(156312),
    s = l(252561),
    o = l(818348),
    u = l(825057);
let c = {
    name: "Choose Payment Source Type",
    id: "choose-payment-source-type",
    component: function (e) {
        let { isEligibleForTrial: t, onlyStripeCardEnabled: l, paymentRequestWalletsEnabled: c } = e,
            d = {
                onChooseType: () => {},
                onStripePaymentMethodReceived: (e) => {
                    console.log("onStripePaymentMethodReceived called: ", e);
                },
                isEligibleForTrial: t,
                paymentRequestWallets: c ? ["googlePay", "applePay"] : [],
                paymentSourceTypeRestrictions: l ? [o.he.CARD.valueOf()] : null,
            };
        return (0, a.jsx)(i.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsxs)(s.wn, {
                children: [
                    (0, a.jsx)(n.Heading, { variant: "heading-xl/semibold", children: "Choose Payment Source Type" }),
                    (0, a.jsx)(s.e_, {
                        className: u.Bt,
                        children: (0, a.jsx)("div", { className: u.VS, children: (0, a.jsx)(r.A, { ...d }) }),
                    }),
                ],
            }),
        });
    },
    controls: {
        isEligibleForTrial: { label: "Is Eligible for Trial", type: "boolean", defaultValue: !1 },
        onlyStripeCardEnabled: { label: "Only Stripe Card Enabled", type: "boolean", defaultValue: !1 },
        paymentRequestWalletsEnabled: { label: "Payment Request Wallets Enabled", type: "boolean", defaultValue: !0 },
    },
};
