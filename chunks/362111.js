i.d(t, { default: () => h });
var n = i(627968);
i(64700);
var s = i(284009),
    l = i.n(s),
    r = i(20742),
    a = i(224640),
    o = i(632088),
    u = i(171835),
    d = i(166532),
    c = i(769160),
    g = i(375708),
    m = i(318152);
function A(e) {
    let {
            transitionState: t,
            analyticsLocation: i,
            onClose: s,
            onAddPaymentSource: u,
            toastContent: A,
            initialStep: h = d.pn.PAYMENT_TYPE,
            overwriteSubscriptionPaymentSource: E = !1,
        } = e,
        S = (0, c._V)(),
        T = (0, c.Y)({
            paymentModalArgs: S,
            initialStep: h,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                s();
            },
            onComplete: (e, t) => {
                l()(null != t, "paymentSource missing"), u?.(t), s();
            },
            onStepChange: () => {},
            header: (0, n.jsx)(r.rQ, { title: g.intl.string(g.t.eQ2bLp) }),
            analyticsLocation: i,
            hideBreadcrumbs: !0,
            toastContent: A,
            overwriteSubscriptionPaymentSource: E,
        });
    return (0, n.jsx)(a.d, {
        transitionState: t,
        onClose: s,
        size: "sm",
        "aria-label": g.intl.string(g.t.eQ2bLp),
        contentOutsideContainer: (0, n.jsx)(o.A, {}),
        children: (0, n.jsx)("form", {
            className: m.Zd,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: T,
        }),
    });
}
function h(e) {
    return (0, n.jsx)(u.M, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, n.jsx)(A, { ...e }),
    });
}
