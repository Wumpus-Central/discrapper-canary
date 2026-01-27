n.d(t, {
    default: () => p,
});
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    s = n(158954),
    a = n(156312),
    o = n(166532),
    c = n(998678),
    d = n(985018),
    u = n(893659);

function _(e) {
    let {
            transitionState: t,
            analyticsLocation: n,
            onClose: i,
            onAddPaymentSource: a,
            toastContent: _,
            initialStep: p = o.pn.PAYMENT_TYPE,
            overwriteSubscriptionPaymentSource: m = !1,
        } = e,
        g = (0, c.KP)(),
        A = (0, c.Y)({
            paymentModalArgs: g,
            initialStep: p,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                i();
            },
            onComplete: (e, t) => {
                l()(null != t, "paymentSource missing"), null == a || a(t), i();
            },
            onStepChange: () => {},
            header: (0, r.jsx)(s.rQ0, {
                title: d.intl.string(d.t.eQ2bLp),
            }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: _,
            overwriteSubscriptionPaymentSource: m,
        });
    return (0, r.jsx)(s.dWK, {
        transitionState: t,
        onClose: i,
        size: "sm",
        "aria-label": d.intl.string(d.t.eQ2bLp),
        children: (0, r.jsx)("form", {
            className: u.Zd,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: A,
        }),
    });
}

function p(e) {
    return (0, r.jsx)(a.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, r.jsx)(
            _,
            (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
