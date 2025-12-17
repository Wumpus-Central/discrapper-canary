n.d(t, { default: () => m });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(793030),
    s = n(563132),
    l = n(409813),
    c = n(3409),
    u = n(388032),
    d = n(585005);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let {
            transitionState: t,
            analyticsLocation: n,
            onClose: i,
            onAddPaymentSource: s,
            toastContent: f,
            initialStep: p = l.h8.PAYMENT_TYPE,
            overwriteSubscriptionPaymentSource: _ = !1,
        } = e,
        m = (0, c.fL)(),
        h = (0, c.vP)({
            paymentModalArgs: m,
            initialStep: p,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                i();
            },
            onComplete: (e, t) => {
                a()(null != t, "paymentSource missing"), null == s || s(t), i();
            },
            onStepChange: () => {},
            header: (0, r.jsx)(o.xBx, { title: u.intl.string(u.t.eQ2bLp) }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: f,
            overwriteSubscriptionPaymentSource: _,
        });
    function g(e) {
        e.preventDefault();
    }
    return (0, r.jsx)(o.IX, {
        transitionState: t,
        onClose: i,
        size: "sm",
        "aria-label": u.intl.string(u.t.eQ2bLp),
        children: (0, r.jsx)("form", {
            className: d.form,
            onSubmit: g,
            children: h,
        }),
    });
}
function m(e) {
    let t = null;
    return (0, r.jsx)(s.PaymentContextProvider, {
        activeSubscription: t,
        stepConfigs: [],
        skuIDs: [],
        children: (0, r.jsx)(_, p({}, e)),
    });
}
