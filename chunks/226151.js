t.d(n, { default: () => x });
var a = t(627968),
    i = t(64700),
    l = t(793574),
    s = t(688810),
    d = t(937008),
    r = t(156312),
    c = t(491057),
    o = t(546042),
    u = t(721252),
    p = t(674223),
    h = t(818348);
function m(e) {
    let { onClose: n, onComplete: t, transitionState: i, applicationId: l, analyticsLocationObject: d, skuId: c } = e,
        {} = (0, r.P5)(),
        { analyticsLocations: u } = (0, s.Ay)();
    return (0, a.jsx)(o.PaymentModal, {
        onClose: n,
        onComplete: t,
        applicationId: l,
        skuId: c,
        initialPlanId: null,
        analyticsObject: d,
        analyticsLocations: u,
        transitionState: i,
    });
}
function x(e) {
    let { loadId: n, applicationId: t, skuId: o, analyticsLocations: x, isGift: g = !1, checkoutFlow: f } = e,
        { analyticsLocations: j } = (0, s.Ay)(x, l.A.PREMIUM_PAYMENT_MODAL),
        k = i.useMemo(
            () =>
                (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return [u.kJ, ...(e ? [p.K] : []), u.zK, ...u.hh, u.r2, u.zX];
                })(g),
            [g],
        );
    return (0, a.jsx)(s.f5, {
        value: j,
        children: (0, a.jsx)(r.PaymentContextProvider, {
            loadId: n,
            stepConfigs: k,
            applicationId: t,
            skuIDs: [o],
            activeSubscription: null,
            purchaseType: h.VV.ONE_TIME,
            isGift: g,
            unifiedCheckoutFlow: f,
            children: (0, a.jsx)(c.Qt, {
                children: (0, a.jsx)(d.dX, { isGift: g, children: (0, a.jsx)(m, { ...e }) }),
            }),
        }),
    });
}
