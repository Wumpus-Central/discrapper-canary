n.d(t, { default: () => _ });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(20742),
    r = n(224640),
    o = n(156312),
    d = n(166532),
    u = n(480800),
    c = n(985018),
    g = n(318152);
function m(e) {
    let {
            transitionState: t,
            analyticsLocation: n,
            onClose: s,
            onAddPaymentSource: o,
            toastContent: m,
            initialStep: _ = d.pn.PAYMENT_TYPE,
            overwriteSubscriptionPaymentSource: A = !1,
        } = e,
        h = (0, u._V)(),
        p = (0, u.Y)({
            paymentModalArgs: h,
            initialStep: _,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                s();
            },
            onComplete: (e, t) => {
                l()(null != t, "paymentSource missing"), o?.(t), s();
            },
            onStepChange: () => {},
            header: (0, i.jsx)(a.rQ, { title: c.intl.string(c.t.eQ2bLp) }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: m,
            overwriteSubscriptionPaymentSource: A,
        });
    return (0, i.jsx)(r.d, {
        transitionState: t,
        onClose: s,
        size: "sm",
        "aria-label": c.intl.string(c.t.eQ2bLp),
        children: (0, i.jsx)("form", {
            className: g.Zd,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: p,
        }),
    });
}
function _(e) {
    return (0, i.jsx)(o.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(m, { ...e }),
    });
}
