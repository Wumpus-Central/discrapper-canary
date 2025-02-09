n.d(t, { t: () => l });
var i = n(200651),
    r = n(481060),
    a = n(502109),
    s = n(388032),
    o = n(239615);
function l(e) {
    let t,
        { onChooseType: n, onStripePaymentMethodReceived: l, onPaymentRequestFailure: u, onValidPaymentRequest: c, paymentRequestRef: d, paymentRequestWallet: f } = e,
        _ = {
            paymentLabel: s.intl.string(s.t.ZURqX1),
            paymentRequestRef: d,
            renderConnectorView: !0,
            onStripePaymentMethodReceived: l,
            onPaymentRequestFailure: u,
            onValidPaymentRequest: c,
            onChooseType: n,
            loadingComponent: (0, i.jsx)(r.zxk, {
                color: r.zxk.Colors.TRANSPARENT,
                submitting: !0,
                look: r.zxk.Looks.LINK
            })
        };
    return (
        (t = 'applePay' === f ? (0, i.jsx)(a.Ch, { ..._ }) : (0, i.jsx)(a.Tr, { ..._ })),
        (0, i.jsx)('div', {
            className: o.body,
            children: (0, i.jsx)(r.hjN, {
                title: s.intl.string(s.t.eQ2bLi),
                children: t
            })
        })
    );
}
