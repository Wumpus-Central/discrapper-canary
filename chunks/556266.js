n.d(t, { default: () => v }), n(388685);
var i = n(951288);
n(647438);
var l = n(100527),
    r = n(906732),
    a = n(987209),
    s = n(563132),
    o = n(107998),
    c = n(791785),
    d = n(961830),
    u = n(439293),
    f = n(152242),
    g = n(231338);
let m = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (t, n, l) =>
        (0, i.jsx)(u.Z, {
            step: l,
            onClose: () => n(!1),
            isGift: e,
        });
};
function p(e) {
    let {
            onClose: t,
            onComplete: n,
            transitionState: l,
            applicationId: a,
            analyticsLocationObject: o,
            skuId: d,
            isGift: u,
        } = e,
        {} = (0, s.JL)(),
        { analyticsLocations: f } = (0, r.ZP)();
    return (0, i.jsx)(c.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: a,
        skuId: d,
        renderHeader: m(u),
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: f,
        transitionState: l,
    });
}
function v(e) {
    let { loadId: t, applicationId: n, skuId: c, analyticsLocations: u, isGift: m = !1 } = e,
        { analyticsLocations: v } = (0, r.ZP)(u, l.Z.PREMIUM_PAYMENT_MODAL);
    return (0, i.jsx)(r.Gt, {
        value: v,
        children: (0, i.jsx)(s.PaymentContextProvider, {
            loadId: t,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [d.WA, ...(e ? [f.jM] : []), d.s2, ...d.yp, d.wo, d.F7];
            })(m),
            applicationId: n,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: g.GZ.ONE_TIME,
            isGift: m,
            children: (0, i.jsx)(o.c1, {
                children: (0, i.jsx)(a.KB, {
                    isGift: m,
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
