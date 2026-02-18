l.d(t, { $: () => h });
var a = l(627968),
    n = l(64700),
    r = l(397927),
    i = l(405139),
    s = l(156312),
    o = l(19311),
    u = l(869177),
    c = l(252561),
    d = l(985018);
function p(e) {
    let t = n.useRef(null),
        l = {
            paymentLabel: d.intl.string(d.t.ZURqX0),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, a.jsx)(r.y$y, { style: { marginTop: 16 }, type: r.tVU.PULSING_ELLIPSIS }),
        };
    return e.renderStepBody
        ? (0, a.jsx)(u.V, { ...l, ...e })
        : "applePay" === e.paymentRequestWallet
          ? (0, a.jsx)(i.Mv, { ...l, ...e })
          : (0, a.jsx)(i.dP, { ...l, ...e });
}
function m(e) {
    let { paymentRequestWallet: t } = e,
        l = n.useRef(null),
        [r, i] = n.useState(!1);
    return (0, a.jsx)(c.e_, {
        footer: (0, a.jsx)(o.Ay, {
            primaryCTA: o.Ay.CTAType.CONTINUE,
            primaryText: d.intl.string("applePay" === t ? d.t.WoXvJL : d.t.wnVVr0),
            primaryDisabled: !r,
            onPrimary: () => void (null != l.current && l.current.show()),
            onBack: () => {},
        }),
        children: (0, a.jsx)(p, {
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
            children: (0, a.jsxs)(c.wn, {
                children: [
                    (0, a.jsx)(r.Heading, { variant: "heading-xl/semibold", children: "Payment Request" }),
                    (0, a.jsx)(c.Hq, { label: "Default View", children: (0, a.jsx)(p, { paymentRequestWallet: t }) }),
                    (0, a.jsx)(c.Hq, {
                        label: "Connector View",
                        children: (0, a.jsx)(p, { paymentRequestWallet: t, renderConnectorView: !0 }),
                    }),
                    (0, a.jsx)(c.Hq, {
                        label: "Add Payment Step Body Connector View",
                        children: (0, a.jsx)(m, { paymentRequestWallet: t }),
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
