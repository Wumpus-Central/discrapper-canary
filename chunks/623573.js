n.d(t, { default: () => y });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(257465),
    c = n(37148),
    u = n(481060),
    d = n(563132),
    f = n(409813),
    _ = n(3409),
    p = n(388032),
    h = n(214820),
    m = n(149715);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e) {
    let {
            transitionState: t,
            analyticsLocation: n,
            onClose: i,
            onAddPaymentSource: o,
            toastContent: d,
            initialStep: g = f.h8.PAYMENT_TYPE,
            overwriteSubscriptionPaymentSource: E = !1,
        } = e,
        b = (0, _.fL)(),
        y = (0, _.vP)({
            paymentModalArgs: b,
            initialStep: g,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                i();
            },
            onComplete: (e, t) => {
                s()(null != t, "paymentSource missing"), null == o || o(t), i();
            },
            onStepChange: () => {},
            header: (0, r.jsxs)("div", {
                className: a()(h.modalTitle, m.flex, m.justifyBetween, m.alignCenter),
                children: [
                    (0, r.jsx)(u.vwX, {
                        tag: u.RB0.H4,
                        children: p.intl.string(p.t.eQ2bLi),
                    }),
                    (0, r.jsx)(c.o, {}),
                ],
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: d,
            overwriteSubscriptionPaymentSource: E,
        });
    function O(e) {
        e.preventDefault();
    }
    return (0, r.jsx)(l.IX, {
        transitionState: t,
        onClose: i,
        size: "sm",
        "aria-label": p.intl.string(p.t.eQ2bLi),
        children: (0, r.jsx)("form", {
            className: h.form,
            onSubmit: O,
            children: y,
        }),
    });
}
function y(e) {
    let t = null;
    return (0, r.jsx)(d.PaymentContextProvider, {
        activeSubscription: t,
        stepConfigs: [],
        skuIDs: [],
        children: (0, r.jsx)(b, E({}, e)),
    });
}
