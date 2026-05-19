n.d(i, { default: () => k });
var e = n(627968),
    s = n(64700),
    a = n(793574),
    l = n(688810),
    o = n(937008),
    c = n(834252),
    d = n(491057),
    u = n(546042),
    r = n(939220),
    p = n(674223),
    h = n(818348);
function f(t) {
    let { onClose: i, onComplete: n, transitionState: s, applicationId: a, analyticsLocationObject: o, skuId: d } = t,
        {} = (0, c.P5)(),
        { analyticsLocations: r } = (0, l.Ay)();
    return (0, e.jsx)(u.PaymentModal, {
        onClose: i,
        onComplete: n,
        applicationId: a,
        skuId: d,
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: r,
        transitionState: s,
    });
}
function k(t) {
    let { loadId: i, applicationId: n, skuId: u, analyticsLocations: k, isGift: y = !1, checkoutFlow: I } = t,
        { analyticsLocations: j } = (0, l.Ay)(k, a.A.PREMIUM_PAYMENT_MODAL),
        x = s.useMemo(
            () =>
                (function () {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return [r.kJ, ...(t ? [p.K] : []), r.zK, ...r.hh, r.r2, r.zX];
                })(y),
            [y],
        );
    return (0, e.jsx)(l.f5, {
        value: j,
        children: (0, e.jsx)(c.PaymentContextProvider, {
            loadId: i,
            stepConfigs: x,
            applicationId: n,
            skuIDs: [u],
            activeSubscription: null,
            purchaseType: h.VV.ONE_TIME,
            isGift: y,
            unifiedCheckoutFlow: I,
            children: (0, e.jsx)(d.Qt, {
                children: (0, e.jsx)(o.dX, { isGift: y, children: (0, e.jsx)(f, { ...t }) }),
            }),
        }),
    });
}
