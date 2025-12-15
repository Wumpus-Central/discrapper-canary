n.d(t, { default: () => w }), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(100527),
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
    h = n(411935),
    C = n(444448),
    x = n(439293),
    v = n(152242),
    b = n(231338);
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
let I = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (t, n, a) =>
        (0, i.jsx)(x.Z, {
            step: a,
            onClose: () => n(!1),
            isGift: e,
        });
};
function P(e) {
    let {
            onClose: t,
            onComplete: n,
            transitionState: a,
            applicationId: l,
            analyticsLocationObject: s,
            skuId: o,
            isGift: c,
        } = e,
        {} = (0, d.JL)(),
        { analyticsLocations: u } = (0, r.ZP)();
    return (0, i.jsx)(f.PaymentModal, {
        onClose: t,
        onComplete: n,
        applicationId: l,
        skuId: o,
        renderHeader: I(c),
        initialPlanId: null,
        analyticsObject: s,
        analyticsLocations: u,
        transitionState: a,
    });
}
function w(e) {
    let { loadId: t, applicationId: n, isGift: f = !1, giftRecipient: x, giftingOrigin: I } = e,
        { analyticsLocations: w } = ((e) => {
            let { applicationId: t, skuId: n, analyticsLocations: i } = e,
                { analyticsLocations: o } = (0, r.ZP)(i, l.Z.SLAYER_STOREFRONT_PAYMENT_MODAL),
                d = (0, s.q)(t);
            return (
                a.useEffect(() => {
                    null == d ||
                        null == d.guildId ||
                        null == n ||
                        p.Z.isFetchingForSKU(n) ||
                        null != m.Z.get(n) ||
                        (0, h.y)(d.guildId, n);
                }, [d, n]),
                { analyticsLocations: o }
            );
        })(e);
    return (0, i.jsx)(r.Gt, {
        value: w,
        children: (0, i.jsx)(d.PaymentContextProvider, {
            loadId: t,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [
                    g.WA,
                    ...(e ? [v.jM] : []),
                    g.s2,
                    ...g.yp,
                    g.wo,
                    {
                        key: c.h8.CONFIRM,
                        renderStep: (e) => (0, i.jsx)(C.d, j({}, e)),
                    },
                ];
            })(f),
            applicationId: n,
            skuIDs: [e.skuId],
            activeSubscription: null,
            purchaseType: b.GZ.ONE_TIME,
            isGift: f,
            children: (0, i.jsx)(u.c1, {
                children: (0, i.jsx)(o.KB, {
                    isGift: f,
                    giftRecipient: x,
                    giftingOrigin: I,
                    children: (0, i.jsx)(P, j({}, e)),
                }),
            }),
        }),
    });
}
