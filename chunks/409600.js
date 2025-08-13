n.d(t, { default: () => m }), n(388685);
var i = n(255367);
n(73800);
var a = n(100527),
    l = n(906732),
    s = n(987209),
    r = n(563132),
    o = n(107998),
    c = n(791785),
    u = n(961830),
    d = n(382263),
    f = n(231338);
function p(e) {
    let { onClose: t, onComplete: n, transitionState: a, applicationId: s, analyticsLocationObject: o, skuId: u } = e,
        {} = (0, r.JL)(),
        { analyticsLocations: d } = (0, l.ZP)();
    return (0, i.jsx)(c.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: s,
        skuId: u,
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: d,
        transitionState: a,
    });
}
function m(e) {
    let { loadId: t, applicationId: n, skuId: c, analyticsLocations: m, isGift: g = !1 } = e,
        { analyticsLocations: b } = (0, l.ZP)(m, a.Z.PREMIUM_PAYMENT_MODAL);
    return (0, i.jsx)(l.Gt, {
        value: b,
        children: (0, i.jsx)(r.PaymentContextProvider, {
            loadId: t,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [u.WA, ...(e ? [d.PT] : []), u.s2, ...u.yp, u.wo, u.F7];
            })(g),
            applicationId: n,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: f.GZ.ONE_TIME,
            isGift: g,
            children: (0, i.jsx)(o.c1, {
                children: (0, i.jsx)(s.KB, {
                    isGift: g,
                    children: (0, i.jsx)(
                        p,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, e),
                    ),
                }),
            }),
        }),
    });
}
