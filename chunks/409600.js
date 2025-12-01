t.d(n, { default: () => g }), t(388685);
var i = t(54381);
t(473749);
var l = t(100527),
    a = t(906732),
    r = t(987209),
    s = t(563132),
    o = t(107998),
    c = t(791785),
    u = t(961830),
    d = t(382263),
    f = t(231338);
function p(e) {
    let { onClose: n, onComplete: t, transitionState: l, applicationId: r, analyticsLocationObject: o, skuId: u } = e,
        {} = (0, s.JL)(),
        { analyticsLocations: d } = (0, a.ZP)();
    return (0, i.jsx)(c.PaymentModal, {
        onClose: n,
        onComplete: t,
        applicationId: r,
        skuId: u,
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: d,
        transitionState: l,
    });
}
function g(e) {
    let { loadId: n, applicationId: t, skuId: c, analyticsLocations: g, isGift: m = !1 } = e,
        { analyticsLocations: b } = (0, a.ZP)(g, l.Z.PREMIUM_PAYMENT_MODAL);
    return (0, i.jsx)(a.Gt, {
        value: b,
        children: (0, i.jsx)(s.PaymentContextProvider, {
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
            children: (0, i.jsx)(o.c1, {
                children: (0, i.jsx)(r.KB, {
                    isGift: m,
                    children: (0, i.jsx)(
                        p,
                        (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    i = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (n) {
                                        var i;
                                        (i = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[n] = i);
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
