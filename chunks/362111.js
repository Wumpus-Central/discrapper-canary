n.d(t, { default: () => h });
var i = n(477900);
n(582128);
var l = n(284009),
    s = n.n(l),
    r = n(20742),
    a = n(224640),
    o = n(632088),
    u = n(626797),
    d = n(166532),
    c = n(469155),
    g = n(375708),
    m = n(998973);
function A(e) {
    let {
            transitionState: t,
            analyticsLocation: n,
            onClose: l,
            onAddPaymentSource: u,
            toastContent: A,
            initialStep: h = d.pn.PAYMENT_ELEMENT,
            overwriteSubscriptionPaymentSource: E = !1,
        } = e,
        S = (0, c._V)(),
        p = (0, c.Y)({
            paymentModalArgs: S,
            initialStep: h,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                l();
            },
            onComplete: (e, t) => {
                s()(null != t, "paymentSource missing"), u?.(t), l();
            },
            onStepChange: () => {},
            header: (0, i.jsx)(r.rQ, { title: g.intl.string(g.t.eQ2bLp) }),
            analyticsLocation: n,
            hideBreadcrumbs: !0,
            toastContent: A,
            overwriteSubscriptionPaymentSource: E,
        });
    return (0, i.jsx)(a.d, {
        transitionState: t,
        onClose: l,
        size: "sm",
        "aria-label": g.intl.string(g.t.eQ2bLp),
        contentOutsideContainer: (0, i.jsx)(o.A, {}),
        children: (0, i.jsx)("form", {
            className: m.Zd,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: p,
        }),
    });
}
function h(e) {
    return (0, i.jsx)(u.M, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(A, { ...e }),
    });
}
