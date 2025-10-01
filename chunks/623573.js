n.d(t, { default: () => b });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(793030),
    c = n(481060),
    u = n(563132),
    d = n(409813),
    f = n(3409),
    _ = n(388032),
    p = n(214820),
    h = n(149715);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e) {
    let {
            transitionState: t,
            analyticsLocation: n,
            onClose: i,
            onAddPaymentSource: o,
            toastContent: u,
            initialStep: m = d.h8.PAYMENT_TYPE,
            overwriteSubscriptionPaymentSource: g = !1,
        } = e,
        E = (0, f.fL)(),
        b = (0, f.vP)({
            paymentModalArgs: E,
            initialStep: m,
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
                className: a()(p.modalTitle, h.flex, h.justifyBetween, h.alignCenter),
                children: [
                    (0, r.jsx)(c.vwX, {
                        tag: c.RB0.H4,
                        children: _.intl.string(_.t.eQ2bLi),
                    }),
                    (0, r.jsx)(l.olH, {}),
                ],
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: u,
            overwriteSubscriptionPaymentSource: g,
        });
    function y(e) {
        e.preventDefault();
    }
    return (0, r.jsx)(l.IX, {
        transitionState: t,
        onClose: i,
        size: "sm",
        "aria-label": _.intl.string(_.t.eQ2bLi),
        children: (0, r.jsx)("form", {
            className: p.form,
            onSubmit: y,
            children: b,
        }),
    });
}
function b(e) {
    let t = null;
    return (0, r.jsx)(u.PaymentContextProvider, {
        activeSubscription: t,
        stepConfigs: [],
        skuIDs: [],
        children: (0, r.jsx)(E, g({}, e)),
    });
}
