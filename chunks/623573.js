n.d(t, { default: () => x });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(512722),
    l = n.n(a),
    o = n(257465),
    c = n(37148),
    d = n(481060),
    u = n(563132),
    m = n(409813),
    p = n(3409),
    g = n(388032),
    h = n(281817),
    f = n(893354);
function b(e) {
    let { transitionState: t, analyticsLocation: n, onClose: r, onAddPaymentSource: a, toastContent: u, initialStep: b = m.h8.PAYMENT_TYPE, overwriteSubscriptionPaymentSource: x = !1 } = e,
        _ = (0, p.fL)(),
        j = (0, p.vP)({
            paymentModalArgs: _,
            initialStep: b,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                r();
            },
            onComplete: (e, t) => {
                (l()(null != t, 'paymentSource missing'), null == a || a(t), r());
            },
            onStepChange: () => {},
            header: (0, i.jsxs)('div', {
                className: s()(h.modalTitle, f.flex, f.justifyBetween, f.alignCenter),
                children: [
                    (0, i.jsx)(d.vwX, {
                        tag: d.RB0.H4,
                        children: g.intl.string(g.t.eQ2bLi)
                    }),
                    (0, i.jsx)(c.o, {})
                ]
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: u,
            overwriteSubscriptionPaymentSource: x
        });
    return (0, i.jsx)(o.I, {
        transitionState: t,
        onClose: r,
        size: 'sm',
        'aria-label': g.intl.string(g.t.eQ2bLi),
        children: (0, i.jsx)('form', {
            className: h.form,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: j
        })
    });
}
function x(e) {
    return (0, i.jsx)(u.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(
            b,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            ((i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i));
                        }));
                }
                return e;
            })({}, e)
        )
    });
}
