n.d(t, { t: () => d });
var r = n(255367),
    i = n(755721),
    a = n(481060),
    o = n(502109),
    s = n(388032),
    l = n(646175);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e) {
    let t,
        { onChooseType: n, onStripePaymentMethodReceived: c, onPaymentRequestFailure: d, onValidPaymentRequest: f, paymentRequestRef: _, paymentRequestWallet: p } = e,
        h = {
            paymentLabel: s.intl.string(s.t.ZURqX1),
            paymentRequestRef: _,
            renderConnectorView: !0,
            onStripePaymentMethodReceived: c,
            onPaymentRequestFailure: d,
            onValidPaymentRequest: f,
            onChooseType: n,
            loadingComponent: (0, r.jsx)(i.zx, {
                color: i.zx.Colors.TRANSPARENT,
                submitting: !0,
                look: i.zx.Looks.LINK
            })
        };
    return (
        (t = 'applePay' === p ? (0, r.jsx)(o.Ch, u({}, h)) : (0, r.jsx)(o.Tr, u({}, h))),
        (0, r.jsx)('div', {
            className: l.body,
            children: (0, r.jsx)(a.hjN, {
                title: s.intl.string(s.t.eQ2bLi),
                children: t
            })
        })
    );
}
