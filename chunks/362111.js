n.d(t, { default: () => h });
var i = n(627968);
n(64700);
var s = n(284009),
    a = n.n(s),
    r = n(20742),
    l = n(224640),
    c = n(156312),
    o = n(166532),
    d = n(61299),
    u = n(985018),
    m = n(318152);
function p(e) {
    let {
            transitionState: t,
            analyticsLocation: n,
            onClose: s,
            onAddPaymentSource: c,
            toastContent: p,
            initialStep: h = o.pn.PAYMENT_TYPE,
            overwriteSubscriptionPaymentSource: _ = !1,
        } = e,
        x = (0, d._V)(),
        f = (0, d.Y)({
            paymentModalArgs: x,
            initialStep: h,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                s();
            },
            onComplete: (e, t) => {
                a()(null != t, "paymentSource missing"), c?.(t), s();
            },
            onStepChange: () => {},
            header: (0, i.jsx)(r.rQ, { title: u.intl.string(u.t.eQ2bLp) }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: p,
            overwriteSubscriptionPaymentSource: _,
        });
    return (0, i.jsx)(l.d, {
        transitionState: t,
        onClose: s,
        size: "sm",
        "aria-label": u.intl.string(u.t.eQ2bLp),
        children: (0, i.jsx)("form", {
            className: m.Zd,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: f,
        }),
    });
}
function h(e) {
    return (0, i.jsx)(c.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(p, { ...e }),
    });
}
