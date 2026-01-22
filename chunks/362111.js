n.d(t, {
    default: () => h,
});
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(158954),
    o = n(156312),
    l = n(166532),
    c = n(998678),
    u = n(985018),
    d = n(893659);

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
            onAddPaymentSource: o,
            toastContent: f,
            initialStep: p = l.pn.PAYMENT_TYPE,
            overwriteSubscriptionPaymentSource: _ = !1,
        } = e,
        h = (0, c.KP)(),
        m = (0, c.Y)({
            paymentModalArgs: h,
            initialStep: p,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                i();
            },
            onComplete: (e, t) => {
                a()(null != t, "paymentSource missing"), null == o || o(t), i();
            },
            onStepChange: () => {},
            header: (0, r.jsx)(s.rQ0, {
                title: u.intl.string(u.t.eQ2bLp),
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: f,
            overwriteSubscriptionPaymentSource: _,
        });

    function g(e) {
        e.preventDefault();
    }
    return (0, r.jsx)(s.dWK, {
        transitionState: t,
        onClose: i,
        size: "sm",
        "aria-label": u.intl.string(u.t.eQ2bLp),
        children: (0, r.jsx)("form", {
            className: d.Zd,
            onSubmit: g,
            children: m,
        }),
    });
}

function h(e) {
    let t = null;
    return (0, r.jsx)(o.PaymentContextProvider, {
        activeSubscription: t,
        stepConfigs: [],
        skuIDs: [],
        children: (0, r.jsx)(_, p({}, e)),
    });
}
