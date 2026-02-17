a.d(n, { default: () => x });
var t = a(627968);
a(64700);
var i = a(793574),
    s = a(688810),
    l = a(937008),
    d = a(156312),
    r = a(491057),
    c = a(546042),
    o = a(721252),
    u = a(674223),
    p = a(818348);
function h(e) {
    let { onClose: n, onComplete: a, transitionState: i, applicationId: l, analyticsLocationObject: r, skuId: o } = e,
        {} = (0, d.P5)(),
        { analyticsLocations: u } = (0, s.Ay)();
    return (0, t.jsx)(c.PaymentModal, {
        onClose: n,
        onComplete: a,
        applicationId: l,
        skuId: o,
        initialPlanId: null,
        analyticsObject: r,
        analyticsLocations: u,
        transitionState: i,
    });
}
function x(e) {
    let { loadId: n, applicationId: a, skuId: c, analyticsLocations: x, isGift: g = !1 } = e,
        { analyticsLocations: m } = (0, s.Ay)(x, i.A.PREMIUM_PAYMENT_MODAL);
    return (0, t.jsx)(s.f5, {
        value: m,
        children: (0, t.jsx)(d.PaymentContextProvider, {
            loadId: n,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [o.kJ, ...(e ? [u.K] : []), o.zK, ...o.hh, o.r2, o.zX];
            })(g),
            applicationId: a,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: p.VV.ONE_TIME,
            isGift: g,
            children: (0, t.jsx)(r.Qt, {
                children: (0, t.jsx)(l.dX, { isGift: g, children: (0, t.jsx)(h, { ...e }) }),
            }),
        }),
    });
}
