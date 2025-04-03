n.d(t, { default: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(512722),
    l = n.n(a),
    o = n(481060),
    c = n(563132),
    d = n(409813),
    u = n(3409),
    m = n(388032),
    g = n(281817),
    p = n(893354);
function h(e) {
    let { transitionState: t, analyticsLocation: n, onClose: i, onAddPaymentSource: a, toastContent: c, initialStep: h = d.h8.PAYMENT_TYPE, overwriteSubscriptionPaymentSource: f = !1 } = e,
        b = (0, u.fL)(),
        N = (0, u.vP)({
            paymentModalArgs: b,
            initialStep: h,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                i();
            },
            onComplete: (e, t) => {
                l()(null != t, 'paymentSource missing'), null == a || a(t), i();
            },
            onStepChange: () => {},
            header: (0, r.jsxs)('div', {
                className: s()(g.modalTitle, p.flex, p.justifyBetween, p.alignCenter),
                children: [
                    (0, r.jsx)(o.vwX, {
                        tag: o.RB0.H4,
                        children: m.NW.string(m.t.eQ2bLi)
                    }),
                    (0, r.jsx)(o.olH, { onClick: i })
                ]
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: c,
            overwriteSubscriptionPaymentSource: f
        });
    return (0, r.jsx)(o.Y0X, {
        transitionState: t,
        size: o.CgR.SMALL,
        className: g.modal,
        'aria-label': m.NW.string(m.t.eQ2bLi),
        children: (0, r.jsx)('form', {
            className: g.form,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: N
        })
    });
}
function f(e) {
    return (0, r.jsx)(c.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, r.jsx)(
            h,
            (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)
        )
    });
}
