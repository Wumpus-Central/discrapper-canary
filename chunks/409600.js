n.d(e, { default: () => f }), n(47120);
var r = n(200651);
n(192379);
var i = n(100527),
    a = n(906732),
    o = n(987209),
    c = n(563132),
    l = n(107998),
    s = n(791785),
    u = n(961830),
    p = n(231338);
function d(t) {
    let { onClose: e, onComplete: n, transitionState: i, applicationId: o, analyticsLocationObject: l, skuId: u } = t,
        {} = (0, c.JL)(),
        { analyticsLocations: p } = (0, a.ZP)();
    return (0, r.jsx)(s.PaymentModal, {
        onClose: e,
        onComplete: n,
        applicationId: o,
        skuId: u,
        initialPlanId: null,
        analyticsObject: l,
        analyticsLocations: p,
        transitionState: i
    });
}
let b = [u.WA, u.s2, ...u.yp, u.wo, u.F7];
function f(t) {
    let { loadId: e, applicationId: n, skuId: s, analyticsLocations: u } = t,
        { analyticsLocations: f } = (0, a.ZP)(u, i.Z.PREMIUM_PAYMENT_MODAL);
    return (0, r.jsx)(a.Gt, {
        value: f,
        children: (0, r.jsx)(c.PaymentContextProvider, {
            loadId: e,
            stepConfigs: b,
            applicationId: n,
            skuIDs: [s],
            activeSubscription: null,
            purchaseType: p.GZ.ONE_TIME,
            children: (0, r.jsx)(l.c1, {
                children: (0, r.jsx)(o.KB, {
                    children: (0, r.jsx)(
                        d,
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
        })
    });
}
