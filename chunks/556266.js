n.d(t, { default: () => P }), n(388685);
var i = n(54381),
    l = n(473749),
    a = n(100527),
    r = n(906732),
    s = n(835473),
    o = n(987209),
    c = n(563132),
    d = n(409813),
    u = n(107998),
    f = n(791785),
    g = n(961830),
    m = n(55563),
    p = n(551428),
    h = n(411935),
    x = n(444448),
    v = n(439293),
    C = n(152242),
    _ = n(231338);
function j(e) {
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
    return (t, n, l) =>
        (0, i.jsx)(v.Z, {
            step: l,
            onClose: () => n(!1),
            isGift: e,
        });
};
function I(e) {
    let {
            onClose: t,
            onComplete: n,
            transitionState: l,
            applicationId: a,
            analyticsLocationObject: s,
            skuId: o,
            isGift: d,
        } = e,
        {} = (0, c.JL)(),
        { analyticsLocations: u } = (0, r.ZP)();
    return (0, i.jsx)(f.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: a,
        skuId: o,
        renderHeader: b(d),
        initialPlanId: null,
        analyticsObject: s,
        analyticsLocations: u,
        transitionState: l,
    });
}
function P(e) {
    let {
            loadId: t,
            applicationId: n,
            skuId: f,
            analyticsLocations: v,
            isGift: b = !1,
            giftRecipient: P,
            giftingOrigin: w,
        } = e,
        { analyticsLocations: y } = (0, r.ZP)(v, a.Z.SLAYER_STOREFRONT_PAYMENT_MODAL),
        S = (0, s.q)(n);
    return (
        l.useEffect(() => {
            null == S ||
                null == S.guildId ||
                null == f ||
                p.Z.isFetchingForSKU(f) ||
                null != m.Z.get(f) ||
                (0, h.y)(S.guildId, f);
        }, [S, f]),
        (0, i.jsx)(r.Gt, {
            value: y,
            children: (0, i.jsx)(c.PaymentContextProvider, {
                loadId: t,
                stepConfigs: (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return [
                        g.WA,
                        ...(e ? [C.jM] : []),
                        g.s2,
                        ...g.yp,
                        g.wo,
                        {
                            key: d.h8.CONFIRM,
                            renderStep: (e) => (0, i.jsx)(x.d, j({}, e)),
                        },
                    ];
                })(b),
                applicationId: n,
                skuIDs: [f],
                activeSubscription: null,
                purchaseType: _.GZ.ONE_TIME,
                isGift: b,
                children: (0, i.jsx)(u.c1, {
                    children: (0, i.jsx)(o.KB, {
                        isGift: b,
                        giftRecipient: P,
                        giftingOrigin: w,
                        children: (0, i.jsx)(I, j({}, e)),
                    }),
                }),
            }),
        })
    );
}
