n.d(t, {
    hh: () => v,
    kJ: () => g,
    r2: () => O,
    zK: () => E,
    zX: () => A,
});
var r = n(627968);
n(64700);
var i = n(295405),
    a = n(166532),
    s = n(735305),
    o = n(343834),
    l = n(467122),
    c = n(33190),
    u = n(623020),
    d = n(881677),
    f = n(985018);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = {
        key: null,
        renderStep: (e) => (0, r.jsx)(d.B, _({}, e)),
    },
    E = {
        key: a.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(
                s.x,
                m(_({}, e), {
                    breadcrumbSteps: [a.pn.ADD_PAYMENT_STEPS, a.pn.REVIEW, a.pn.CONFIRM],
                    onReturn: () => {
                        0 === Object.keys(i.A.paymentSources).length
                            ? e.handleClose()
                            : e.handleStepChange(a.pn.REVIEW, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                    },
                }),
            ),
        options: { renderHeader: !0 },
    },
    b = {
        key: a.pn.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(l.A, {}),
    },
    y = {
        key: a.pn.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(o.A, {}),
        options: { renderHeader: !0 },
    },
    O = {
        key: a.pn.REVIEW,
        renderStep: (e) => (0, r.jsx)(u._M, _({}, e)),
        options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHq) },
    },
    A = {
        key: a.pn.CONFIRM,
        renderStep: (e) => (0, r.jsx)(c.k, _({}, e)),
    },
    v = [b, y];
