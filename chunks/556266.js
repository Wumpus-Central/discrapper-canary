n.d(t, { default: () => C }), n(388685);
var i = n(951288);
n(647438);
var l = n(100527),
    a = n(906732),
    r = n(987209),
    s = n(563132),
    o = n(409813),
    d = n(107998),
    c = n(791785),
    u = n(961830),
    f = n(444448),
    g = n(439293),
    m = n(152242),
    p = n(231338);
function x(e) {
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
    return (t, n, l) =>
        (0, i.jsx)(g.Z, {
            step: l,
            onClose: () => n(!1),
            isGift: e,
        });
};
function h(e) {
    let {
            onClose: t,
            onComplete: n,
            transitionState: l,
            applicationId: r,
            analyticsLocationObject: o,
            skuId: d,
            isGift: u,
        } = e,
        {} = (0, s.JL)(),
        { analyticsLocations: f } = (0, a.ZP)();
    return (0, i.jsx)(c.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: r,
        skuId: d,
        renderHeader: v(u),
        initialPlanId: null,
        analyticsObject: o,
        analyticsLocations: f,
        transitionState: l,
    });
}
function C(e) {
    let {
            loadId: t,
            applicationId: n,
            skuId: c,
            analyticsLocations: g,
            isGift: v = !1,
            giftRecipient: C,
            giftingOrigin: j,
        } = e,
        { analyticsLocations: b } = (0, a.ZP)(g, l.Z.SLAYER_STOREFRONT_PAYMENT_MODAL);
    return (0, i.jsx)(a.Gt, {
        value: b,
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
                        renderStep: (e) => (0, i.jsx)(f.d, x({}, e)),
                    },
                ];
            })(v),
            applicationId: n,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: p.GZ.ONE_TIME,
            isGift: v,
            children: (0, i.jsx)(d.c1, {
                children: (0, i.jsx)(r.KB, {
                    isGift: v,
                    giftRecipient: C,
                    giftingOrigin: j,
                    children: (0, i.jsx)(h, x({}, e)),
                }),
            }),
        }),
    });
}
