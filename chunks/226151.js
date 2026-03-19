t.d(n, { default: () => x });
var a = t(627968);
t(64700);
var i = t(793574),
    l = t(688810),
    s = t(937008),
    d = t(156312),
    r = t(491057),
    c = t(546042),
    o = t(721252),
    u = t(674223),
    p = t(818348);
function h(e) {
    let { onClose: n, onComplete: t, transitionState: i, applicationId: s, analyticsLocationObject: r, skuId: o } = e,
        {} = (0, d.P5)(),
        { analyticsLocations: u } = (0, l.Ay)();
    return (0, a.jsx)(c.PaymentModal, {
        onClose: n,
        onComplete: t,
        applicationId: s,
        skuId: o,
        initialPlanId: null,
        analyticsObject: r,
        analyticsLocations: u,
        transitionState: i,
    });
}
function x(e) {
    let { loadId: n, applicationId: t, skuId: c, analyticsLocations: x, isGift: m = !1, checkoutFlow: g } = e,
        { analyticsLocations: f } = (0, l.Ay)(x, i.A.PREMIUM_PAYMENT_MODAL);
    return (0, a.jsx)(l.f5, {
        value: f,
        children: (0, a.jsx)(d.PaymentContextProvider, {
            loadId: n,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [o.kJ, ...(e ? [u.K] : []), o.zK, ...o.hh, o.r2, o.zX];
            })(m),
            applicationId: t,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: p.VV.ONE_TIME,
            isGift: m,
            unifiedCheckoutFlow: g,
            children: (0, a.jsx)(r.Qt, {
                children: (0, a.jsx)(s.dX, { isGift: m, children: (0, a.jsx)(h, { ...e }) }),
            }),
        }),
    });
}
