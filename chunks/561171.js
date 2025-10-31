n.d(t, { J: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(502109),
    s = n(563132),
    l = n(586585),
    c = n(439021),
    u = n(29594),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let t = i.useRef(null),
        n = {
            paymentLabel: d.intl.string(d.t.ZURqX0),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, r.jsx)(a.$jN, {
                style: { marginTop: 16 },
                type: a.RAz.PULSING_ELLIPSIS,
            }),
        };
    return e.renderStepBody
        ? (0, r.jsx)(c.t, _({}, n, e))
        : "applePay" === e.paymentRequestWallet
          ? (0, r.jsx)(o.Ch, _({}, n, e))
          : (0, r.jsx)(o.Tr, _({}, n, e));
}
function h(e) {
    let { paymentRequestWallet: t } = e,
        n = i.useRef(null),
        [a, o] = i.useState(!1),
        s = () => {
            null != n.current && n.current.show();
        };
    return (0, r.jsx)(u.yL, {
        footer: (0, r.jsx)(l.Z, {
            primaryCTA: l.Z.CTAType.CONTINUE,
            primaryText: d.intl.string("applePay" === t ? d.t.WoXvJL : d.t.wnVVr0),
            primaryDisabled: !a,
            onPrimary: () => s(),
            onBack: () => {},
        }),
        children: (0, r.jsx)(p, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => o(!0),
        }),
    });
}
let m = {
    name: "Payment Request",
    component: function (e) {
        let { paymentRequestWallet: t } = e;
        return (0, r.jsx)(s.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsxs)(u.$0, {
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        children: "Payment Request",
                    }),
                    (0, r.jsx)(u.E_, {
                        label: "Default View",
                        children: (0, r.jsx)(p, { paymentRequestWallet: t }),
                    }),
                    (0, r.jsx)(u.E_, {
                        label: "Connector View",
                        children: (0, r.jsx)(p, {
                            paymentRequestWallet: t,
                            renderConnectorView: !0,
                        }),
                    }),
                    (0, r.jsx)(u.E_, {
                        label: "Add Payment Step Body Connector View",
                        children: (0, r.jsx)(h, { paymentRequestWallet: t }),
                    }),
                ],
            }),
        });
    },
    id: "payment-request",
    controls: {
        paymentRequestWallet: {
            label: "Payment Request Wallet",
            type: "select",
            options: [
                {
                    value: "googlePay",
                    label: "Google Pay",
                },
                {
                    value: "applePay",
                    label: "Apple Pay",
                },
            ],
            defaultValue: "googlePay",
        },
    },
};
