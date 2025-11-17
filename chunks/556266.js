n.d(t, { default: () => P }), n(388685);
var i = n(54381),
    l = n(473749),
    a = n(100527),
    r = n(906732),
    s = n(835473),
    o = n(987209),
    d = n(563132),
    c = n(409813),
    u = n(107998),
    f = n(791785),
    g = n(961830),
    m = n(55563),
    p = n(551428),
    x = n(411935),
    h = n(444448),
    v = n(439293),
    C = n(152242),
    j = n(231338);
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
let _ = function () {
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
            isGift: c,
        } = e,
        {} = (0, d.JL)(),
        { analyticsLocations: u } = (0, r.ZP)();
    return (0, i.jsx)(f.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: a,
        skuId: o,
        renderHeader: _(c),
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
            isGift: _ = !1,
            giftRecipient: P,
            giftingOrigin: w,
        } = e,
        { analyticsLocations: T } = (0, r.ZP)(v, a.Z.SLAYER_STOREFRONT_PAYMENT_MODAL),
        N = (0, s.q)(n);
    return (
        l.useEffect(() => {
            null == N ||
                null == N.guildId ||
                null == f ||
                p.Z.isFetchingForSKU(f) ||
                null != m.Z.get(f) ||
                (0, x.y)(N.guildId, f);
        }, [N, f]),
        (0, i.jsx)(r.Gt, {
            value: T,
            children: (0, i.jsx)(d.PaymentContextProvider, {
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
                            key: c.h8.CONFIRM,
                            renderStep: (e) => (0, i.jsx)(h.d, b({}, e)),
                        },
                    ];
                })(_),
                applicationId: n,
                skuIDs: [f],
                activeSubscription: null,
                purchaseType: j.GZ.ONE_TIME,
                isGift: _,
                children: (0, i.jsx)(u.c1, {
                    children: (0, i.jsx)(o.KB, {
                        isGift: _,
                        giftRecipient: P,
                        giftingOrigin: w,
                        children: (0, i.jsx)(I, b({}, e)),
                    }),
                }),
            }),
        })
    );
}
