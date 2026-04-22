l.d(t, { q: () => c });
var a = l(627968);
l(64700);
var n = l(534514),
    r = l(73079),
    i = l(156312),
    o = l(252561),
    s = l(818348),
    d = l(779848);
let c = {
    name: "Choose Payment Source Type",
    id: "choose-payment-source-type",
    component: function (e) {
        let { isEligibleForTrial: t, onlyStripeCardEnabled: l, paymentRequestWalletsEnabled: c } = e,
            u = {
                onChooseType: () => {},
                onStripePaymentMethodReceived: (e) => {
                    console.log("onStripePaymentMethodReceived called: ", e);
                },
                isEligibleForTrial: t,
                paymentRequestWallets: c ? ["googlePay", "applePay"] : [],
                paymentSourceTypeRestrictions: l ? [s.he.CARD.valueOf()] : null,
            };
        return (0, a.jsx)(i.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsxs)(o.wn, {
                children: [
                    (0, a.jsx)(n.D, { variant: "heading-xl/semibold", children: "Choose Payment Source Type" }),
                    (0, a.jsx)(o.e_, {
                        className: d.Bt,
                        children: (0, a.jsx)("div", { className: d.VS, children: (0, a.jsx)(r.A, { ...u }) }),
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
