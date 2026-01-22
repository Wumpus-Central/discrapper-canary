n.d(t, { q: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(73079),
    s = n(156312),
    o = n(252561),
    l = n(818348),
    c = n(825057);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = {
    name: "Choose Payment Source Type",
    id: "choose-payment-source-type",
    component: function (e) {
        let { isEligibleForTrial: t, onlyStripeCardEnabled: n, paymentRequestWalletsEnabled: u } = e,
            f = {
                onChooseType: () => {},
                onStripePaymentMethodReceived: (e) => {
                    console.log("onStripePaymentMethodReceived called: ", e);
                },
                isEligibleForTrial: t,
                paymentRequestWallets: u ? ["googlePay", "applePay"] : [],
                paymentSourceTypeRestrictions: n ? [l.he.CARD.valueOf()] : null,
            };
        return (0, r.jsx)(s.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsxs)(o.wn, {
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        children: "Choose Payment Source Type",
                    }),
                    (0, r.jsx)(o.e_, {
                        className: c.Bt,
                        children: (0, r.jsx)("div", {
                            className: c.VS,
                            children: (0, r.jsx)(a.A, d({}, f)),
                        }),
                    }),
                ],
            }),
        });
    },
    controls: {
        isEligibleForTrial: {
            label: "Is Eligible for Trial",
            type: "boolean",
            defaultValue: !1,
        },
        onlyStripeCardEnabled: {
            label: "Only Stripe Card Enabled",
            type: "boolean",
            defaultValue: !1,
        },
        paymentRequestWalletsEnabled: {
            label: "Payment Request Wallets Enabled",
            type: "boolean",
            defaultValue: !0,
        },
    },
};
