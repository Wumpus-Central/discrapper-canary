n.d(t, { default: () => f });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(512722),
    a = n.n(l),
    o = n(481060),
    c = n(563132),
    d = n(409813),
    u = n(3409),
    m = n(388032),
    p = n(281817),
    g = n(893354);
function h(e) {
    let { transitionState: t, analyticsLocation: n, onClose: r, onAddPaymentSource: l, toastContent: c, initialStep: h = d.h8.PAYMENT_TYPE, overwriteSubscriptionPaymentSource: f = !1 } = e,
        b = (0, u.fL)(),
        _ = (0, u.vP)({
            paymentModalArgs: b,
            initialStep: h,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                r();
            },
            onComplete: (e, t) => {
                a()(null != t, 'paymentSource missing'), null == l || l(t), r();
            },
            onStepChange: () => {},
            header: (0, i.jsxs)('div', {
                className: s()(p.modalTitle, g.flex, g.justifyBetween, g.alignCenter),
                children: [
                    (0, i.jsx)(o.vwX, {
                        tag: o.RB0.H4,
                        children: m.intl.string(m.t.eQ2bLi)
                    }),
                    (0, i.jsx)(o.olH, { onClick: r })
                ]
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: c,
            overwriteSubscriptionPaymentSource: f
        });
    return (0, i.jsx)(o.Y0X, {
        transitionState: t,
        size: o.CgR.SMALL,
        className: p.modal,
        'aria-label': m.intl.string(m.t.eQ2bLi),
        children: (0, i.jsx)('form', {
            className: p.form,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: _
        })
    });
}
function f(e) {
    return (0, i.jsx)(c.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(
            h,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, e)
        )
    });
}
