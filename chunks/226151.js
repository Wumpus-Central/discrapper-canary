a.d(n, { default: () => h });
var t = a(627968);
a(64700);
var i = a(793574),
    l = a(688810),
    s = a(937008),
    d = a(156312),
    r = a(491057),
    c = a(546042),
    o = a(721252),
    u = a(674223),
    p = a(818348);
function g(e) {
    let { onClose: n, onComplete: a, transitionState: i, applicationId: s, analyticsLocationObject: r, skuId: o } = e,
        {} = (0, d.P5)(),
        { analyticsLocations: u } = (0, l.Ay)();
    return (0, t.jsx)(c.PaymentModal, {
        onClose: n,
        onComplete: a,
        applicationId: s,
        skuId: o,
        initialPlanId: null,
        analyticsObject: r,
        analyticsLocations: u,
        transitionState: i,
    });
}
function h(e) {
    let { loadId: n, applicationId: a, skuId: c, analyticsLocations: h, isGift: x = !1 } = e,
        { analyticsLocations: m } = (0, l.Ay)(h, i.A.PREMIUM_PAYMENT_MODAL);
    return (0, t.jsx)(l.f5, {
        value: m,
        children: (0, t.jsx)(d.PaymentContextProvider, {
            loadId: n,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [o.kJ, ...(e ? [u.K_] : []), o.zK, ...o.hh, o.r2, o.zX];
            })(x),
            applicationId: a,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: p.VV.ONE_TIME,
            isGift: x,
            children: (0, t.jsx)(r.Qt, {
                children: (0, t.jsx)(s.dX, { isGift: x, children: (0, t.jsx)(g, { ...e }) }),
            }),
        }),
    });
}
