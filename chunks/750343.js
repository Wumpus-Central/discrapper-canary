l.d(t, { $: () => h });
var a = l(627968),
    n = l(64700),
    r = l(534514),
    i = l(289873),
    o = l(405139),
    s = l(156312),
    d = l(19311),
    c = l(869177),
    u = l(252561),
    p = l(985018);
function m(e) {
    let t = n.useRef(null),
        l = {
            paymentLabel: p.intl.string(p.t.ZURqX0),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, a.jsx)(i.y, { style: { marginTop: 16 }, type: i.t.PULSING_ELLIPSIS }),
        };
    return e.renderStepBody
        ? (0, a.jsx)(c.V, { ...l, ...e })
        : "applePay" === e.paymentRequestWallet
          ? (0, a.jsx)(o.Mv, { ...l, ...e })
          : (0, a.jsx)(o.dP, { ...l, ...e });
}
function b(e) {
    let { paymentRequestWallet: t } = e,
        l = n.useRef(null),
        [r, i] = n.useState(!1);
    return (0, a.jsx)(u.e_, {
        footer: (0, a.jsx)(d.Ay, {
            primaryCTA: d.Ay.CTAType.CONTINUE,
            primaryText: p.intl.string("applePay" === t ? p.t.WoXvJL : p.t.wnVVr0),
            primaryDisabled: !r,
            onPrimary: () => void (null != l.current && l.current.show()),
            onBack: () => {},
        }),
        children: (0, a.jsx)(m, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: l,
            onValidPaymentRequest: () => i(!0),
        }),
    });
}
let h = {
    name: "Payment Request",
    component: function (e) {
        let { paymentRequestWallet: t } = e;
        return (0, a.jsx)(s.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsxs)(u.wn, {
                children: [
                    (0, a.jsx)(r.D, { variant: "heading-xl/semibold", children: "Payment Request" }),
                    (0, a.jsx)(u.Hq, { label: "Default View", children: (0, a.jsx)(m, { paymentRequestWallet: t }) }),
                    (0, a.jsx)(u.Hq, {
                        label: "Connector View",
                        children: (0, a.jsx)(m, { paymentRequestWallet: t, renderConnectorView: !0 }),
                    }),
                    (0, a.jsx)(u.Hq, {
                        label: "Add Payment Step Body Connector View",
                        children: (0, a.jsx)(b, { paymentRequestWallet: t }),
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
                { value: "googlePay", label: "Google Pay" },
                { value: "applePay", label: "Apple Pay" },
            ],
            defaultValue: "googlePay",
        },
    },
};
