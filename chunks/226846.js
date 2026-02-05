"use strict";
n.d(t, { q: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(73079),
    s = n(156312),
    o = n(252561),
    l = n(818348),
    u = n(825057);
let c = {
    name: "Choose Payment Source Type",
    id: "choose-payment-source-type",
    component: function (e) {
        let { isEligibleForTrial: t, onlyStripeCardEnabled: n, paymentRequestWalletsEnabled: c } = e,
            d = {
                onChooseType: () => {},
                onStripePaymentMethodReceived: (e) => {
                    console.log("onStripePaymentMethodReceived called: ", e);
                },
                isEligibleForTrial: t,
                paymentRequestWallets: c ? ["googlePay", "applePay"] : [],
                paymentSourceTypeRestrictions: n ? [l.he.CARD.valueOf()] : null,
            };
        return (0, r.jsx)(s.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsxs)(o.wn, {
                children: [
                    (0, r.jsx)(i.Heading, { variant: "heading-xl/semibold", children: "Choose Payment Source Type" }),
                    (0, r.jsx)(o.e_, {
                        className: u.Bt,
                        children: (0, r.jsx)("div", { className: u.VS, children: (0, r.jsx)(a.A, { ...d }) }),
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
