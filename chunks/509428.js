s.d(e, { default: () => m }), s(388685);
var n = s(951288),
    o = s(647438),
    i = s(238651),
    a = s(399606),
    r = s(667202),
    c = s(481060),
    u = s(100527),
    d = s(906732),
    p = s(350327),
    l = s(1870),
    C = s(429368),
    f = s(635552),
    E = s(578976),
    L = s(530618),
    h = s(372654),
    I = s(197831),
    _ = s(755419),
    v = s(58201),
    j = s(29121),
    x = s(391594),
    k = s(215023),
    O = s(222311);
let m = (t) => {
    let {
            transitionState: e,
            product: s,
            onClose: m,
            analyticsLocations: y,
            overrideTitle: S,
            overrideDescription: N,
            itemConsumed: B = !0,
            purchaseType: P = k.o8.ORB,
        } = t,
        R = (0, a.e7)([l.Z], () => l.Z.purchases),
        T = (0, C.o)(s, R),
        Z = (0, v.W)(s, T),
        { analyticsLocations: b } = (0, d.ZP)([...y, u.Z.COLLECTIBLES_COLLECTED_MODAL]);
    o.useEffect(() => {
        k.Vt.ORB_PROFILE_BADGE === Z.skuId && (0, p.Ls)([(0, _.X)()], 600);
    }, [Z.skuId]);
    let { isLoading: g, isFractionalPremiumActive: w, expiresAt: G } = (0, E.Kd)(),
        {
            environment: $,
            modalRef: A,
            confettiCanvas: D,
            setConfettiCanvas: V,
            customConfettiDisplayOptions: W,
        } = (0, x.$0)(Z, P);
    (0, x.f1)(Z, b);
    let X = (0, j.kd)(Z),
        { handleUseNow: K, isApplying: F } = (0, f.W)({
            product: Z,
            onSuccess: m,
            onError: m,
        });
    if (g) return (0, n.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE });
    let M = (0, x.Xw)({
            product: Z,
            overrideTitle: S,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: X,
            itemConsumed: B,
        }),
        q = (0, x.ys)({
            product: Z,
            overrideDescription: N,
            productName: X,
            itemConsumed: B,
            isFractionalPremiumActive: w,
            expiresAt: G,
        }),
        z = (0, x.cf)({
            product: Z,
            onClose: m,
            analyticsLocations: b,
            handleUseNow: K,
            isApplying: F,
            itemConsumed: B,
        });
    return (0, n.jsx)(d.Gt, {
        value: b,
        children: (0, n.jsxs)("div", {
            ref: A,
            children: [
                (0, n.jsx)(i.O_, {
                    ref: V,
                    className: O.confettiCanvas,
                    environment: $,
                }),
                (0, n.jsx)(r.I, {
                    graphic: {
                        type: "dynamic",
                        component: c.AX$.COLLECTIBLES_PREVIEW,
                        props: {
                            product: Z,
                            itemConsumed: B,
                        },
                    },
                    title: M,
                    subtitle: null != q ? q : void 0,
                    onClose: m,
                    transitionState: e,
                    actions: z,
                }),
                null != W
                    ? (0, n.jsx)(I.i, { options: W })
                    : (0, n.jsx)(L.Z, {
                          confettiTarget: A.current,
                          confettiCanvas: D,
                          sprites: (0, h.vK)(Z.categorySkuId),
                      }),
            ],
        }),
    });
};
