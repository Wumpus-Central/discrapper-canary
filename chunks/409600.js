a.d(n, { default: () => h }), a(47120);
var i = a(200651);
a(192379);
var s = a(100527),
    e = a(906732),
    l = a(987209),
    o = a(563132),
    c = a(791785),
    d = a(961830),
    p = a(231338);
function r(t) {
    let { onClose: n, onComplete: a, transitionState: s, applicationId: l, analyticsLocationObject: d, skuId: p } = t,
        {} = (0, o.JL)(),
        { analyticsLocations: r } = (0, e.ZP)();
    return (0, i.jsx)(c.PaymentModal, {
        onClose: n,
        onComplete: a,
        applicationId: l,
        skuId: p,
        initialPlanId: null,
        analyticsObject: d,
        analyticsLocations: r,
        transitionState: s
    });
}
let u = [d.WA, d.s2, ...d.yp, d.wo, d.F7];
function h(t) {
    let { loadId: n, applicationId: a, skuId: c, analyticsLocations: d } = t,
        { analyticsLocations: h } = (0, e.ZP)(d, s.Z.PREMIUM_PAYMENT_MODAL);
    return (0, i.jsx)(e.Gt, {
        value: h,
        children: (0, i.jsx)(o.PaymentContextProvider, {
            loadId: n,
            stepConfigs: u,
            applicationId: a,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: p.GZ.ONE_TIME,
            children: (0, i.jsx)(l.KB, { children: (0, i.jsx)(r, { ...t }) })
        })
    });
}
