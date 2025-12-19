t.d(n, { default: () => p }), t(388685);
var l = t(54381);
t(473749);
var a = t(100527),
    i = t(906732),
    r = t(987209),
    s = t(563132),
    o = t(107998),
    c = t(791785),
    u = t(961830),
    d = t(382263),
    f = t(231338);
function g(e) {
    let { onClose: n, onComplete: t, transitionState: a, applicationId: r, analyticsLocationObject: o, skuId: u } = e,
        {} = (0, s.JL)(),
        { analyticsLocations: d } = (0, i.ZP)();
    return (0, l.jsx)(c.PaymentModal, {
        onClose: n,
        onComplete: t,
        applicationId: r,
        skuId: u,
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: d,
        transitionState: a,
    });
}
function p(e) {
    let { loadId: n, applicationId: t, skuId: c, analyticsLocations: p, isGift: m = !1 } = e,
        { analyticsLocations: b } = (0, i.ZP)(p, a.Z.PREMIUM_PAYMENT_MODAL);
    return (0, l.jsx)(i.Gt, {
        value: b,
        children: (0, l.jsx)(s.PaymentContextProvider, {
            loadId: n,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [u.WA, ...(e ? [d.PT] : []), u.s2, ...u.yp, u.wo, u.F7];
            })(m),
            applicationId: t,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: f.GZ.ONE_TIME,
            isGift: m,
            children: (0, l.jsx)(o.c1, {
                children: (0, l.jsx)(r.KB, {
                    isGift: m,
                    children: (0, l.jsx)(
                        g,
                        (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    l = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (n) {
                                        var l;
                                        (l = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[n] = l);
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
