r.d(n, {
    t: function () {
        return u;
    }
});
var i = r(200651),
    a = r(481060),
    o = r(502109),
    s = r(388032),
    l = r(245590);
function u(e) {
    let n,
        { onChooseType: r, onStripePaymentMethodReceived: u, onPaymentRequestFailure: c, onValidPaymentRequest: d, paymentRequestRef: f, paymentRequestWallet: p } = e,
        h = {
            paymentLabel: s.intl.string(s.t.ZURqX1),
            paymentRequestRef: f,
            renderConnectorView: !0,
            onStripePaymentMethodReceived: u,
            onPaymentRequestFailure: c,
            onValidPaymentRequest: d,
            onChooseType: r,
            loadingComponent: (0, i.jsx)(a.Button, {
                color: a.Button.Colors.TRANSPARENT,
                submitting: !0,
                look: a.Button.Looks.LINK
            })
        };
    return (
        (n = 'applePay' === p ? (0, i.jsx)(o.Ch, { ...h }) : (0, i.jsx)(o.Tr, { ...h })),
        (0, i.jsx)('div', {
            className: l.body,
            children: (0, i.jsx)(a.FormSection, {
                title: s.intl.string(s.t.eQ2bLi),
                children: n
            })
        })
    );
}
