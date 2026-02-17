"use strict";
n.d(t, { $: () => h });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(405139),
    o = n(156312),
    l = n(19311),
    u = n(869177),
    c = n(252561),
    d = n(985018);
function _(e) {
    let t = i.useRef(null),
        n = {
            paymentLabel: d.intl.string(d.t.ZURqX0),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, r.jsx)(a.y$y, { style: { marginTop: 16 }, type: a.tVU.PULSING_ELLIPSIS }),
        };
    return e.renderStepBody
        ? (0, r.jsx)(u.V, { ...n, ...e })
        : "applePay" === e.paymentRequestWallet
          ? (0, r.jsx)(s.Mv, { ...n, ...e })
          : (0, r.jsx)(s.dP, { ...n, ...e });
}
function f(e) {
    let { paymentRequestWallet: t } = e,
        n = i.useRef(null),
        [a, s] = i.useState(!1),
        o = () => {
            null != n.current && n.current.show();
        };
    return (0, r.jsx)(c.e_, {
        footer: (0, r.jsx)(l.Ay, {
            primaryCTA: l.Ay.CTAType.CONTINUE,
            primaryText: d.intl.string("applePay" === t ? d.t.WoXvJL : d.t.wnVVr0),
            primaryDisabled: !a,
            onPrimary: () => o(),
            onBack: () => {},
        }),
        children: (0, r.jsx)(_, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: n,
            onValidPaymentRequest: () => s(!0),
        }),
    });
}
let h = {
    name: "Payment Request",
    component: function (e) {
        let { paymentRequestWallet: t } = e;
        return (0, r.jsx)(o.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, r.jsxs)(c.wn, {
                children: [
                    (0, r.jsx)(a.Heading, { variant: "heading-xl/semibold", children: "Payment Request" }),
                    (0, r.jsx)(c.Hq, { label: "Default View", children: (0, r.jsx)(_, { paymentRequestWallet: t }) }),
                    (0, r.jsx)(c.Hq, {
                        label: "Connector View",
                        children: (0, r.jsx)(_, { paymentRequestWallet: t, renderConnectorView: !0 }),
                    }),
                    (0, r.jsx)(c.Hq, {
                        label: "Add Payment Step Body Connector View",
                        children: (0, r.jsx)(f, { paymentRequestWallet: t }),
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
