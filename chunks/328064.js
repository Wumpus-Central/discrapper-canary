s.d(t, {
    default: () => O,
}),
    s(896048);
var r = s(627968),
    o = s(64700),
    n = s(106778),
    i = s(158954),
    a = s(397927),
    c = s(793574),
    p = s(688810),
    d = s(207803),
    l = s(298072),
    u = s(450481),
    E = s(181774),
    L = s(524246),
    C = s(14368),
    f = s(213530),
    y = s(132198),
    h = s(767503),
    x = s(764999),
    I = s(961883),
    _ = s(758836),
    k = s(290964);
let O = (e) => {
    let {
            transitionState: t,
            product: s,
            onClose: O,
            analyticsLocations: m,
            overrideTitle: v,
            overrideDescription: j,
            itemConsumed: S = !0,
            purchaseType: A = _.gs.ORB,
        } = e,
        b = (0, l.Q)(s),
        g = (0, h.r)(s, b),
        { analyticsLocations: B } = (0, p.Ay)([...m, c.A.COLLECTIBLES_COLLECTED_MODAL]);
    o.useEffect(() => {
        _.Dp.ORB_PROFILE_BADGE === g.skuId && (0, d.Gr)([(0, y._)()], 600);
    }, [g.skuId]);
    let { isLoading: G, isFractionalPremiumActive: R, expiresAt: T } = (0, E.EZ)(),
        {
            environment: D,
            modalRef: N,
            confettiCanvas: P,
            setConfettiCanvas: $,
            customConfettiDisplayOptions: w,
        } = (0, I.mO)(g, A);
    (0, I.$V)(g, B);
    let V = (0, x.o7)(g),
        { handleUseNow: F, isApplying: M } = (0, u.p)({
            product: g,
            onSuccess: O,
            onError: O,
        });
    if (G)
        return (0, r.jsx)(a.y$y, {
            type: a.y$y.Type.SPINNING_CIRCLE,
        });
    let z = (0, I.$k)({
            product: g,
            overrideTitle: v,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: V,
            itemConsumed: S,
        }),
        K = (0, I.v8)({
            product: g,
            overrideDescription: j,
            productName: V,
            itemConsumed: S,
            isFractionalPremiumActive: R,
            expiresAt: T,
        }),
        Q = (0, I.aG)({
            product: g,
            onClose: O,
            analyticsLocations: B,
            handleUseNow: F,
            isApplying: M,
            itemConsumed: S,
        });
    return (0, r.jsx)(p.f5, {
        value: B,
        children: (0, r.jsxs)("div", {
            ref: N,
            children: [
                (0, r.jsx)(n.Fk, {
                    ref: $,
                    className: k.L,
                    environment: D,
                }),
                (0, r.jsx)(i.ExpressiveModal, {
                    graphic: {
                        type: "dynamic",
                        component: a.Oz7.COLLECTIBLES_PREVIEW,
                        props: {
                            product: g,
                            itemConsumed: S,
                        },
                    },
                    title: z,
                    subtitle: null != K ? K : void 0,
                    onClose: O,
                    transitionState: t,
                    actions: Q,
                }),
                null != w
                    ? (0, r.jsx)(f.K, {
                          options: w,
                      })
                    : (0, r.jsx)(L.A, {
                          confettiTarget: N.current,
                          confettiCanvas: P,
                          sprites: (0, C.rA)(g.categorySkuId),
                      }),
            ],
        }),
    });
};
