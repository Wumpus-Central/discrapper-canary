n.d(e, { default: () => T }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(238651),
    a = n(399606),
    l = n(667202),
    d = n(481060),
    u = n(100527),
    o = n(906732),
    p = n(350327),
    c = n(1870),
    h = n(429368),
    f = n(635552),
    E = n(578976),
    C = n(530618),
    O = n(372654),
    I = n(197831),
    _ = n(755419),
    A = n(58201),
    m = n(29121),
    L = n(391594),
    g = n(215023),
    k = n(222311);
let T = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: T,
            analyticsLocations: R,
            overrideTitle: y,
            overrideDescription: b,
            itemConsumed: S = !0,
            purchaseType: P = g.o8.ORB,
        } = t,
        N = (0, a.e7)([c.Z], () => c.Z.purchases),
        B = (0, h.o)(n, N),
        v = (0, A.W)(n, B),
        { analyticsLocations: x } = (0, o.ZP)([...R, u.Z.COLLECTIBLES_COLLECTED_MODAL]);
    r.useEffect(() => {
        g.Vt.ORB_PROFILE_BADGE === v.skuId && (0, p.Ls)([(0, _.X)()], 600);
    }, [v.skuId]);
    let { isLoading: M, isFractionalPremiumActive: U, expiresAt: D } = (0, E.Kd)(),
        {
            environment: Z,
            modalRef: F,
            confettiCanvas: j,
            setConfettiCanvas: G,
            customConfettiDisplayOptions: w,
        } = (0, L.$0)(v, P);
    (0, L.f1)(v, x);
    let V = (0, m.kd)(v),
        { handleUseNow: H, isApplying: W } = (0, f.W)({
            product: v,
            onSuccess: T,
            onError: T,
        });
    if (M) return (0, i.jsx)(d.$jN, { type: d.$jN.Type.SPINNING_CIRCLE });
    let X = (0, L.Xw)({
            product: v,
            pairedProduct: void 0,
            overrideTitle: y,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: V,
            pairedProductName: void 0,
            itemConsumed: S,
        }),
        $ = (0, L.ys)({
            product: v,
            overrideDescription: b,
            productName: V,
            itemConsumed: S,
            isFractionalPremiumActive: U,
            expiresAt: D,
        }),
        Q = (0, L.cf)({
            product: v,
            onClose: T,
            analyticsLocations: x,
            handleUseNow: H,
            isApplying: W,
            itemConsumed: S,
        });
    return (0, i.jsx)(o.Gt, {
        value: x,
        children: (0, i.jsxs)("div", {
            ref: F,
            children: [
                (0, i.jsx)(s.O_, {
                    ref: G,
                    className: k.confettiCanvas,
                    environment: Z,
                }),
                (0, i.jsx)(l.I, {
                    graphic: {
                        type: "dynamic",
                        component: d.AX$.COLLECTIBLES_PREVIEW,
                        props: {
                            product: v,
                            itemConsumed: S,
                        },
                    },
                    title: X,
                    subtitle: null != $ ? $ : void 0,
                    onClose: T,
                    transitionState: e,
                    actions: Q,
                }),
                null != w
                    ? (0, i.jsx)(I.i, { options: w })
                    : (0, i.jsx)(C.Z, {
                          confettiTarget: F.current,
                          confettiCanvas: j,
                          sprites: (0, O.vK)(v.categorySkuId),
                      }),
            ],
        }),
    });
};
