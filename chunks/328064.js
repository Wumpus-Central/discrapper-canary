s.d(t, {
    default: () => v,
}),
    s(896048);
var n = s(627968),
    o = s(64700),
    r = s(106778),
    i = s(158954),
    a = s(397927),
    c = s(793574),
    p = s(688810),
    l = s(207803),
    u = s(298072),
    d = s(450481),
    E = s(645178),
    L = s(623373),
    C = s(181774),
    y = s(524246),
    _ = s(14368),
    f = s(213530),
    h = s(132198),
    x = s(961883),
    I = s(758836),
    k = s(290964);
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
        b = (0, u.Q)(s),
        g = (0, L.rb)(s, b),
        { analyticsLocations: B } = (0, p.Ay)([...O, c.A.COLLECTIBLES_COLLECTED_MODAL]);
    o.useEffect(() => {
        I.Dp.ORB_PROFILE_BADGE === g.skuId && (0, l.Gr)([(0, h._)()], 600);
    }, [g.skuId]);
    let { isLoading: G, isFractionalPremiumActive: R, expiresAt: T } = (0, C.EZ)(),
        {
            environment: D,
            modalRef: N,
            confettiCanvas: P,
            setConfettiCanvas: $,
            customConfettiDisplayOptions: w,
        } = (0, x.mO)(g, A);
    (0, x.$V)(g, B);
    let V = (0, E.o7)(g),
        { handleUseNow: F, isApplying: M } = (0, d.p)({
            product: g,
            onSuccess: v,
            onError: v,
        });
    if (G)
        return (0, n.jsx)(a.y$y, {
            type: a.y$y.Type.SPINNING_CIRCLE,
        });
    let z = (0, x.$k)({
            product: g,
            overrideTitle: m,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: V,
            itemConsumed: S,
        }),
        K = (0, x.v8)({
            product: g,
            overrideDescription: j,
            productName: V,
            itemConsumed: S,
            isFractionalPremiumActive: R,
            expiresAt: T,
        }),
        Q = (0, x.aG)({
            product: g,
            onClose: v,
            analyticsLocations: B,
            handleUseNow: F,
            isApplying: M,
            itemConsumed: S,
        });
    return (0, n.jsx)(p.f5, {
        value: B,
        children: (0, n.jsxs)("div", {
            ref: N,
            children: [
                (0, n.jsx)(r.Fk, {
                    ref: $,
                    className: k.L,
                    environment: D,
                }),
                (0, n.jsx)(i.ExpressiveModal, {
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
                    onClose: v,
                    transitionState: t,
                    actions: Q,
                }),
                null != w
                    ? (0, n.jsx)(f.K, {
                          options: w,
                      })
                    : (0, n.jsx)(y.A, {
                          confettiTarget: N.current,
                          confettiCanvas: P,
                          sprites: (0, _.rA)(g.categorySkuId),
                      }),
            ],
        }),
    });
};
