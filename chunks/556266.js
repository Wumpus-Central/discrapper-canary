n.d(t, { default: () => v }), n(388685);
var i = n(951288);
n(647438);
var a = n(100527),
    l = n(906732),
    r = n(987209),
    s = n(563132),
    o = n(107998),
    d = n(791785),
    c = n(961830),
    u = n(137440),
    g = n(511821),
    f = n(231338);
let m = (e, t, n) =>
    (0, i.jsx)(u.Z, {
        step: n,
        onClose: () => t(!1),
    });
function p(e) {
    let { onClose: t, onComplete: n, transitionState: a, applicationId: r, analyticsLocationObject: o, skuId: c } = e,
        {} = (0, s.JL)(),
        { analyticsLocations: u } = (0, l.ZP)();
    return (0, i.jsx)(d.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: r,
        skuId: c,
        renderHeader: m,
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: u,
        transitionState: a,
    });
}
function v(e) {
    let { loadId: t, applicationId: n, skuId: d, analyticsLocations: u, isGift: m = !1 } = e,
        { analyticsLocations: v } = (0, l.ZP)(u, a.Z.PREMIUM_PAYMENT_MODAL);
    return (0, i.jsx)(l.Gt, {
        value: v,
        children: (0, i.jsx)(s.PaymentContextProvider, {
            loadId: t,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [c.WA, ...(e ? [g.jM] : []), c.s2, ...c.yp, c.wo, c.F7];
            })(m),
            applicationId: n,
            skuIDs: [d],
            activeSubscription: null,
            purchaseType: f.GZ.ONE_TIME,
            isGift: m,
            children: (0, i.jsx)(o.c1, {
                children: (0, i.jsx)(r.KB, {
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
