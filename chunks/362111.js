i.d(t, { default: () => A });
var n = i(627968);
i(64700);
var s = i(284009),
    l = i.n(s),
    r = i(20742),
    a = i(224640),
    o = i(834252),
    u = i(166532),
    d = i(61299),
    c = i(375708),
    g = i(318152);
function m(e) {
    let {
            transitionState: t,
            analyticsLocation: i,
            onClose: s,
            onAddPaymentSource: o,
            toastContent: m,
            initialStep: A = u.pn.PAYMENT_TYPE,
            overwriteSubscriptionPaymentSource: h = !1,
        } = e,
        E = (0, d._V)(),
        T = (0, d.Y)({
            paymentModalArgs: E,
            initialStep: A,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                s();
            },
            onComplete: (e, t) => {
                l()(null != t, "paymentSource missing"), o?.(t), s();
            },
            onStepChange: () => {},
            header: (0, n.jsx)(r.rQ, { title: c.intl.string(c.t.eQ2bLp) }),
            analyticsLocation: i,
            hideBreadcrumbs: !0,
            toastContent: m,
            overwriteSubscriptionPaymentSource: h,
        });
    return (0, n.jsx)(a.d, {
        transitionState: t,
        onClose: s,
        size: "sm",
        "aria-label": c.intl.string(c.t.eQ2bLp),
        children: (0, n.jsx)("form", {
            className: g.Zd,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: T,
        }),
    });
}
function A(e) {
    return (0, n.jsx)(o.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, n.jsx)(m, { ...e }),
    });
}
