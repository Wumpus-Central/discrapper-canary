n.d(t, {
    V: () => C,
    default: () => A,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(100527),
    o = n(906732),
    s = n(835473),
    l = n(987209),
    c = n(563132),
    u = n(409813),
    d = n(107998),
    f = n(791785),
    p = n(961830),
    _ = n(55563),
    m = n(551428),
    h = n(411935),
    g = n(444448),
    E = n(439293),
    b = n(152242),
    y = n(231338);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
let S = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (t, n, i) =>
        (0, r.jsx)(E.Z, {
            step: i,
            onClose: () => n(!1),
            isGift: e,
        });
};
function I(e) {
    let {
            onClose: t,
            onComplete: n,
            transitionState: i,
            applicationId: a,
            analyticsLocationObject: s,
            skuId: l,
            isGift: u,
        } = e,
        {} = (0, c.JL)(),
        { analyticsLocations: d } = (0, o.ZP)();
    return (0, r.jsx)(f.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: a,
        skuId: l,
        renderHeader: S(u),
        initialPlanId: null,
        analyticsObject: s,
        analyticsLocations: d,
        transitionState: i,
    });
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        p.WA,
        ...(e ? [b.jM] : []),
        p.s2,
        ...p.yp,
        p.wo,
        {
            key: u.h8.CONFIRM,
            renderStep: (e) => (0, r.jsx)(g.d, v({}, e)),
        },
    ];
}
let C = (e) => {
    let { applicationId: t, skuId: n, analyticsLocations: r } = e,
        { analyticsLocations: l } = (0, o.ZP)(r, a.Z.SLAYER_STOREFRONT_PAYMENT_MODAL),
        c = (0, s.q)(t);
    return (
        i.useEffect(() => {
            null == c ||
                null == c.guildId ||
                null == n ||
                m.Z.isFetchingForSKU(n) ||
                null != _.Z.get(n) ||
                (0, h.y)(c.guildId, n);
        }, [c, n]),
        { analyticsLocations: l }
    );
};
function A(e) {
    let { loadId: t, applicationId: n, isGift: i = !1, giftRecipient: a, giftingOrigin: s, additionalUserIds: u } = e,
        { analyticsLocations: f } = C(e);
    return (0, r.jsx)(o.Gt, {
        value: f,
        children: (0, r.jsx)(c.PaymentContextProvider, {
            loadId: t,
            stepConfigs: T(i),
            applicationId: n,
            skuIDs: [e.skuId],
            activeSubscription: null,
            purchaseType: y.GZ.ONE_TIME,
            isGift: i,
            children: (0, r.jsx)(d.c1, {
                children: (0, r.jsx)(l.KB, {
                    isGift: i,
                    giftRecipient: a,
                    giftingOrigin: s,
                    additionalUserIds: u,
                    children: (0, r.jsx)(I, v({}, e)),
                }),
            }),
        }),
    });
}
