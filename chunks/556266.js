n.d(t, { default: () => x }), n(388685);
var i = n(951288);
n(647438);
var r = n(100527),
    l = n(906732),
    a = n(987209),
    o = n(563132),
    s = n(409813),
    c = n(107998),
    d = n(791785),
    u = n(961830),
    f = n(444448),
    g = n(439293),
    p = n(152242),
    m = n(231338);
function v(e) {
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
let b = function () {
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
            applicationId: a,
            analyticsLocationObject: s,
            skuId: c,
            isGift: u,
        } = e,
        {} = (0, o.JL)(),
        { analyticsLocations: f } = (0, l.ZP)();
    return (0, i.jsx)(d.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: a,
        skuId: c,
        renderHeader: b(u),
        initialPlanId: null,
        analyticsObject: s,
        analyticsLocations: f,
        transitionState: r,
    });
}
function x(e) {
    let {
            loadId: t,
            applicationId: n,
            skuId: d,
            analyticsLocations: g,
            isGift: b = !1,
            giftRecipient: x,
            giftingOrigin: j,
        } = e,
        { analyticsLocations: C } = (0, l.ZP)(g, r.Z.PREMIUM_PAYMENT_MODAL);
    return (0, i.jsx)(l.Gt, {
        value: C,
        children: (0, i.jsx)(o.PaymentContextProvider, {
            loadId: t,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [
                    u.WA,
                    ...(e ? [p.jM] : []),
                    u.s2,
                    ...u.yp,
                    u.wo,
                    {
                        key: s.h8.CONFIRM,
                        renderStep: (e) => (0, i.jsx)(f.d, v({}, e)),
                    },
                ];
            })(b),
            applicationId: n,
            skuIDs: [d],
            activeSubscription: null,
            purchaseType: m.GZ.ONE_TIME,
            isGift: b,
            children: (0, i.jsx)(c.c1, {
                children: (0, i.jsx)(a.KB, {
                    isGift: b,
                    giftRecipient: x,
                    giftingOrigin: j,
                    children: (0, i.jsx)(h, v({}, e)),
                }),
            }),
        }),
    });
}
