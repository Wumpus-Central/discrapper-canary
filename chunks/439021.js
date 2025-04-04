n.d(t, { t: () => u });
var r = n(200651),
    i = n(481060),
    o = n(502109),
    a = n(388032),
    s = n(646175);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e) {
    let t,
        { onChooseType: n, onStripePaymentMethodReceived: l, onPaymentRequestFailure: u, onValidPaymentRequest: d, paymentRequestRef: f, paymentRequestWallet: _ } = e,
        p = {
            paymentLabel: a.NW.string(a.t.ZURqX1),
            paymentRequestRef: f,
            renderConnectorView: !0,
            onStripePaymentMethodReceived: l,
            onPaymentRequestFailure: u,
            onValidPaymentRequest: d,
            onChooseType: n,
            loadingComponent: (0, r.jsx)(i.zxk, {
                color: i.zxk.Colors.TRANSPARENT,
                submitting: !0,
                look: i.zxk.Looks.LINK
            })
        };
    return (
        (t = 'applePay' === _ ? (0, r.jsx)(o.Ch, c({}, p)) : (0, r.jsx)(o.Tr, c({}, p))),
        (0, r.jsx)('div', {
            className: s.body,
            children: (0, r.jsx)(i.hjN, {
                title: a.NW.string(a.t.eQ2bLi),
                children: t
            })
        })
    );
}
