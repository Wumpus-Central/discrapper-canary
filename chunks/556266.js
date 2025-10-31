n.d(t, { default: () => x }), n(388685);
var i = n(951288);
n(647438);
var r = n(100527),
    a = n(906732),
    l = n(987209),
    s = n(563132),
    o = n(409813),
    c = n(107998),
    d = n(791785),
    u = n(961830),
    f = n(444448),
    g = n(439293),
    m = n(152242),
    p = n(231338);
function b(e) {
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
}
let v = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (t, n, r) =>
        (0, i.jsx)(g.Z, {
            step: r,
            onClose: () => n(!1),
            isGift: e,
        });
};
function h(e) {
    let {
            onClose: t,
            onComplete: n,
            transitionState: r,
            applicationId: l,
            analyticsLocationObject: o,
            skuId: c,
            isGift: u,
        } = e,
        {} = (0, s.JL)(),
        { analyticsLocations: f } = (0, a.ZP)();
    return (0, i.jsx)(d.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: l,
        skuId: c,
        renderHeader: v(u),
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: f,
        transitionState: r,
    });
}
function x(e) {
    let { loadId: t, applicationId: n, skuId: d, analyticsLocations: g, isGift: v = !1 } = e,
        { analyticsLocations: x } = (0, a.ZP)(g, r.Z.PREMIUM_PAYMENT_MODAL);
    return (0, i.jsx)(a.Gt, {
        value: x,
        children: (0, i.jsx)(s.PaymentContextProvider, {
            loadId: t,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [
                    u.WA,
                    ...(e ? [m.jM] : []),
                    u.s2,
                    ...u.yp,
                    u.wo,
                    {
                        key: o.h8.CONFIRM,
                        renderStep: (e) => (0, i.jsx)(f.d, b({}, e)),
                    },
                ];
            })(v),
            applicationId: n,
            skuIDs: [d],
            activeSubscription: null,
            purchaseType: p.GZ.ONE_TIME,
            isGift: v,
            children: (0, i.jsx)(c.c1, {
                children: (0, i.jsx)(l.KB, {
                    isGift: v,
                    children: (0, i.jsx)(h, b({}, e)),
                }),
            }),
        }),
    });
}
