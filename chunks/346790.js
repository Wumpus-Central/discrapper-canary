n.d(t, { n: () => f });
var r = n(200651);
n(192379);
var i = n(853872),
    o = n(987209),
    a = n(409813),
    s = n(276442);
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
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = {
    key: a.h8.ADD_PAYMENT_STEPS,
    renderStep: (e) => (0, r.jsx)(_, c({}, e)),
    options: { renderHeader: !0 }
};
function _(e) {
    let { isGift: t } = (0, o.wD)();
    return (0, r.jsx)(
        s.J,
        d(c({}, e), {
            breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
            onReturn: () => {
                if (0 === Object.keys(i.Z.paymentSources).length) {
                    if (t) return void e.handleStepChange(a.h8.GIFT_CUSTOMIZATION);
                    e.handleClose();
                } else e.handleStepChange(a.h8.REVIEW, { trackedFromStep: a.h8.ADD_PAYMENT_STEPS });
            }
        })
    );
}
