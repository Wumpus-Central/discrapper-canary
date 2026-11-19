var i = n(477900);
n(582128);
var l = n(284009),
    s = n.n(l),
    r = n(20742),
    a = n(224640),
    o = n(632088),
    u = n(199453),
    c = n(166532),
    d = n(671334),
    m = n(792996),
    g = n(998973);
function A(e) {
    let {
            transitionState: t,
            analyticsLocation: n,
            onClose: l,
            onAddPaymentSource: u,
            toastContent: A,
            initialStep: E = c.pn.PAYMENT_ELEMENT,
            overwriteSubscriptionPaymentSource: h = !1,
        } = e,
        f = (0, d.p)(),
        p = (0, d.Y)({
            addPaymentMethodStepState: f,
            initialStep: E,
            prependSteps: [],
            appendSteps: [],
            onReturn: () => {
                l();
            },
            onComplete: (e, t) => {
                (s()(null != t, "paymentSource missing"), u?.(t), l());
            },
            onStepChange: () => {},
            header: (0, i.jsx)(r.rQ, { title: m.intl.string(m.t.eQ2bLp) }),
            analyticsLocation: n,
            toastContent: A,
            overwriteSubscriptionPaymentSource: h,
        });
    return (0, i.jsx)(a.d, {
        transitionState: t,
        onClose: l,
        size: "md",
        "aria-label": m.intl.string(m.t.eQ2bLp),
        contentOutsideContainer: (0, i.jsx)(o.A, {}),
        children: (0, i.jsx)("form", {
            className: g.Zd,
            onSubmit: function (e) {
                e.preventDefault();
            },
            children: p,
        }),
    });
}
n.d(
    t,
    {},
    {
        default: function (e) {
            return (0, i.jsx)(u.M, {
                activeSubscription: null,
                stepConfigs: [],
                skuIDs: [],
                children: (0, i.jsx)(A, { ...e }),
            });
        },
    },
);
