n.d(t, {
    t: function () {
        return o;
    }
});
var a = n(200651),
    r = n(481060),
    l = n(502109),
    s = n(388032),
    i = n(245590);
function o(e) {
    let t,
        { onChooseType: n, onStripePaymentMethodReceived: o, onPaymentRequestFailure: c, onValidPaymentRequest: u, paymentRequestRef: d, paymentRequestWallet: p } = e,
        m = {
            paymentLabel: s.intl.string(s.t.ZURqX1),
            paymentRequestRef: d,
            renderConnectorView: !0,
            onStripePaymentMethodReceived: o,
            onPaymentRequestFailure: c,
            onValidPaymentRequest: u,
            onChooseType: n,
            loadingComponent: (0, a.jsx)(r.Button, {
                color: r.Button.Colors.TRANSPARENT,
                submitting: !0,
                look: r.Button.Looks.LINK
            })
        };
    return (
        (t = 'applePay' === p ? (0, a.jsx)(l.Ch, { ...m }) : (0, a.jsx)(l.Tr, { ...m })),
        (0, a.jsx)('div', {
            className: i.body,
            children: (0, a.jsx)(r.FormSection, {
                title: s.intl.string(s.t.eQ2bLi),
                children: t
            })
        })
    );
}
