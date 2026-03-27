s.d(t, { default: () => v });
var r = s(627968),
    n = s(64700),
    o = s(106778),
    i = s(158954),
    a = s(397927),
    c = s(793574),
    p = s(688810),
    d = s(207803),
    u = s(298072),
    l = s(450481),
    E = s(623373),
    L = s(181774),
    C = s(536572),
    y = s(524246),
    _ = s(14368),
    f = s(213530),
    h = s(132198),
    x = s(961883),
    I = s(758836),
    k = s(7102);
let v = (e) => {
    let {
            transitionState: t,
            product: s,
            onClose: v,
            analyticsLocations: O,
            overrideTitle: m,
            overrideDescription: j,
            itemConsumed: S = !0,
            purchaseType: A = I.gs.ORB,
        } = e,
        G = (0, u.Q)(s),
        b = (0, E.rb)(s, G),
        { analyticsLocations: g } = (0, p.Ay)([...O, c.A.COLLECTIBLES_COLLECTED_MODAL]);
    n.useEffect(() => {
        I.Dp.ORB_PROFILE_BADGE === b.skuId && (0, d.Gr)([(0, h._)()], 600);
    }, [b.skuId]);
    let { isLoading: B, isFractionalPremiumActive: R, expiresAt: T } = (0, L.EZ)(),
        {
            environment: D,
            modalRef: N,
            confettiCanvas: P,
            setConfettiCanvas: V,
            customConfettiDisplayOptions: $,
        } = (0, x.mO)(b, A);
    (0, x.$V)(b, g);
    let w = (0, C.VG)(b),
        { handleUseNow: F, isApplying: M } = (0, l.p)({ product: b, onSuccess: v, onError: v });
    if (B) return (0, r.jsx)(a.y$y, { type: a.y$y.Type.SPINNING_CIRCLE });
    let z = (0, x.$k)({
            product: b,
            overrideTitle: m,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: w,
            itemConsumed: S,
        }),
        K = (0, x.v8)({
            product: b,
            overrideDescription: j,
            productName: w,
            itemConsumed: S,
            isFractionalPremiumActive: R,
            expiresAt: T,
        }),
        Q = (0, x.aG)({
            product: b,
            onClose: v,
            analyticsLocations: g,
            handleUseNow: F,
            isApplying: M,
            itemConsumed: S,
        });
    return (0, r.jsx)(p.f5, {
        value: g,
        children: (0, r.jsxs)("div", {
            ref: N,
            children: [
                (0, r.jsx)(o.Fk, { ref: V, className: k.L, environment: D }),
                (0, r.jsx)(i.ExpressiveModal, {
                    graphic: {
                        type: "dynamic",
                        component: a.Oz7.COLLECTIBLES_PREVIEW,
                        props: { product: b, itemConsumed: S },
                    },
                    title: z,
                    subtitle: K ?? void 0,
                    onClose: v,
                    transitionState: t,
                    actions: Q,
                }),
                null != $
                    ? (0, r.jsx)(f.K, { options: $ })
                    : (0, r.jsx)(y.A, {
                          confettiTarget: N.current,
                          confettiCanvas: P,
                          sprites: (0, _.rA)(b.categorySkuId),
                      }),
            ],
        }),
    });
};
