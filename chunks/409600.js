n.d(t, { default: () => m }), n(388685);
var i = n(951288);
n(647438);
var l = n(100527),
    a = n(906732),
    r = n(987209),
    s = n(563132),
    o = n(107998),
    c = n(791785),
    u = n(961830),
    d = n(382263),
    f = n(137440),
    g = n(231338);
let h = (e, t, n) =>
    (0, i.jsx)(f.Z, {
        step: n,
        onClose: () => t(!1),
    });
function p(e) {
    let { onClose: t, onComplete: n, transitionState: l, applicationId: r, analyticsLocationObject: o, skuId: u } = e,
        {} = (0, s.JL)(),
        { analyticsLocations: d } = (0, a.ZP)();
    return (0, i.jsx)(c.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: r,
        skuId: u,
        renderHeader: h,
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: d,
        transitionState: l,
    });
}
function m(e) {
    let { loadId: t, applicationId: n, skuId: c, analyticsLocations: f, isGift: h = !1 } = e,
        { analyticsLocations: m } = (0, a.ZP)(f, l.Z.PREMIUM_PAYMENT_MODAL);
    return (0, i.jsx)(a.Gt, {
        value: m,
        children: (0, i.jsx)(s.PaymentContextProvider, {
            loadId: t,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [u.WA, ...(e ? [d.PT] : []), u.s2, ...u.yp, u.wo, u.F7];
            })(h),
            applicationId: n,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: g.GZ.ONE_TIME,
            isGift: h,
            children: (0, i.jsx)(o.c1, {
                children: (0, i.jsx)(r.KB, {
                    isGift: h,
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
