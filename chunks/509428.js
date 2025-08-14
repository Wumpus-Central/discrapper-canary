i.d(e, { default: () => O }), i(388685);
var s = i(255367),
    n = i(73800),
    o = i(505266),
    r = i(399606),
    a = i(667202),
    c = i(481060),
    d = i(100527),
    u = i(906732),
    l = i(975298),
    p = i(350327),
    f = i(55935),
    C = i(1870),
    L = i(429368),
    v = i(635552),
    E = i(530618),
    h = i(372654),
    m = i(197831),
    I = i(755419),
    _ = i(58201),
    j = i(29121),
    x = i(391594),
    P = i(215023),
    k = i(222311);
let O = (t) => {
    let {
            transitionState: e,
            product: i,
            onClose: O,
            analyticsLocations: y,
            overrideTitle: N,
            overrideDescription: S,
            itemConsumed: A = !0,
            purchaseType: Z = P.o8.ORB,
        } = t,
        g = (0, r.e7)([C.Z], () => C.Z.purchases),
        B = (0, L.o)(i, g),
        R = (0, _.W)(i, B),
        { analyticsLocations: T } = (0, u.ZP)([...y, d.Z.COLLECTIBLES_COLLECTED_MODAL]);
    n.useEffect(() => {
        P.Vt.ORB_PROFILE_BADGE === R.skuId && (0, p.Ls)([(0, I.X)()], 600);
    }, [R.skuId]);
    let {
            isLoading: b,
            isFractionalPremiumActive: w,
            expiresAt: F,
        } = (() => {
            let t = (0, l.Z)({ forceFetch: !0 }),
                e = (0, f.vc)(t.endsAt, "L");
            return {
                isLoading: !t.fetched,
                isFractionalPremiumActive: t.isFractionalPremiumActive,
                expiresAt: e,
            };
        })(),
        {
            environment: G,
            modalRef: $,
            confettiCanvas: D,
            setConfettiCanvas: V,
            customConfettiDisplayOptions: W,
        } = (0, x.$0)(R, Z);
    (0, x.f1)(R, T);
    let X = (0, j.kd)(R),
        { handleUseNow: K, isApplying: M } = (0, v.W)({
            product: R,
            onSuccess: O,
            onError: O,
        });
    if (b) return (0, s.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE });
    let q = (0, x.Xw)({
            product: R,
            pairedProduct: void 0,
            overrideTitle: N,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: X,
            pairedProductName: void 0,
            itemConsumed: A,
        }),
        z = (0, x.ys)({
            product: R,
            overrideDescription: S,
            productName: X,
            itemConsumed: A,
            isFractionalPremiumActive: w,
            expiresAt: F,
        }),
        H = (0, x.cf)({
            product: R,
            onClose: O,
            analyticsLocations: T,
            handleUseNow: K,
            isApplying: M,
            itemConsumed: A,
        });
    return (0, s.jsx)(u.Gt, {
        value: T,
        children: (0, s.jsxs)("div", {
            ref: $,
            children: [
                (0, s.jsx)(o.O_, {
                    ref: V,
                    className: k.confettiCanvas,
                    environment: G,
                }),
                (0, s.jsx)(a.I, {
                    graphic: {
                        type: "dynamic",
                        component: c.AX$.COLLECTIBLES_PREVIEW,
                        props: {
                            product: R,
                            itemConsumed: A,
                        },
                    },
                    title: q,
                    subtitle: null != z ? z : void 0,
                    onClose: O,
                    transitionState: e,
                    actions: H,
                }),
                null != W
                    ? (0, s.jsx)(m.i, { options: W })
                    : (0, s.jsx)(E.Z, {
                          confettiTarget: $.current,
                          confettiCanvas: D,
                          sprites: (0, h.vK)(R.categorySkuId),
                      }),
            ],
        }),
    });
};
