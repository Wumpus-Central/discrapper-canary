n.d(e, { default: () => b }), n(47120);
var r = n(200651);
n(192379);
var a = n(100527),
    i = n(906732),
    o = n(987209),
    c = n(563132),
    l = n(791785),
    s = n(961830),
    u = n(231338);
function p(t) {
    let { onClose: e, onComplete: n, transitionState: a, applicationId: o, analyticsLocationObject: s, skuId: u } = t,
        {} = (0, c.JL)(),
        { analyticsLocations: p } = (0, i.ZP)();
    return (0, r.jsx)(l.PaymentModal, {
        onClose: e,
        onComplete: n,
        applicationId: o,
        skuId: u,
        initialPlanId: null,
        analyticsObject: s,
        analyticsLocations: p,
        transitionState: a
    });
}
let d = [s.WA, s.s2, ...s.yp, s.wo, s.F7];
function b(t) {
    let { loadId: e, applicationId: n, skuId: l, analyticsLocations: s } = t,
        { analyticsLocations: b } = (0, i.ZP)(s, a.Z.PREMIUM_PAYMENT_MODAL);
    return (0, r.jsx)(i.Gt, {
        value: b,
        children: (0, r.jsx)(c.PaymentContextProvider, {
            loadId: e,
            stepConfigs: d,
            applicationId: n,
            skuIDs: [l],
            activeSubscription: null,
            purchaseType: u.GZ.ONE_TIME,
            children: (0, r.jsx)(o.KB, {
                children: (0, r.jsx)(
                    p,
                    (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    })
                                )),
                                r.forEach(function (e) {
                                    var r;
                                    (r = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (t[e] = r);
                                });
                        }
                        return t;
                    })({}, t)
                )
            })
        })
    });
}
