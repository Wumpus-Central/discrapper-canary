n.d(e, { default: () => L });
var i = n(627968),
    r = n(64700),
    a = n(106778),
    l = n(158954),
    s = n(397927),
    d = n(793574),
    u = n(688810),
    p = n(207803),
    o = n(298072),
    c = n(450481),
    h = n(645178),
    E = n(623373),
    O = n(181774),
    f = n(524246),
    A = n(14368),
    y = n(213530),
    I = n(132198),
    _ = n(961883),
    R = n(758836),
    C = n(290964);
let L = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: L,
            analyticsLocations: m,
            overrideTitle: T,
            overrideDescription: b,
            itemConsumed: k = !0,
            purchaseType: g = R.gs.ORB,
        } = t,
        S = (0, o.Q)(n),
        N = (0, E.rb)(n, S),
        { analyticsLocations: v } = (0, u.Ay)([...m, d.A.COLLECTIBLES_COLLECTED_MODAL]);
    r.useEffect(() => {
        R.Dp.ORB_PROFILE_BADGE === N.skuId && (0, p.Gr)([(0, I._)()], 600);
    }, [N.skuId]);
    let { isLoading: P, isFractionalPremiumActive: B, expiresAt: M } = (0, O.EZ)(),
        {
            environment: x,
            modalRef: D,
            confettiCanvas: U,
            setConfettiCanvas: F,
            customConfettiDisplayOptions: j,
        } = (0, _.mO)(N, g);
    (0, _.$V)(N, v);
    let G = (0, h.o7)(N),
        { handleUseNow: w, isApplying: H } = (0, c.p)({ product: N, onSuccess: L, onError: L });
    if (P) return (0, i.jsx)(s.y$y, { type: s.y$y.Type.SPINNING_CIRCLE });
    let V = (0, _.$k)({
            product: N,
            overrideTitle: T,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: G,
            itemConsumed: k,
        }),
        W = (0, _.v8)({
            product: N,
            overrideDescription: b,
            productName: G,
            itemConsumed: k,
            isFractionalPremiumActive: B,
            expiresAt: M,
        }),
        z = (0, _.aG)({
            product: N,
            onClose: L,
            analyticsLocations: v,
            handleUseNow: w,
            isApplying: H,
            itemConsumed: k,
        });
    return (0, i.jsx)(u.f5, {
        value: v,
        children: (0, i.jsxs)("div", {
            ref: D,
            children: [
                (0, i.jsx)(a.Fk, { ref: F, className: C.L, environment: x }),
                (0, i.jsx)(l.ExpressiveModal, {
                    graphic: {
                        type: "dynamic",
                        component: s.Oz7.COLLECTIBLES_PREVIEW,
                        props: { product: N, itemConsumed: k },
                    },
                    title: V,
                    subtitle: W ?? void 0,
                    onClose: L,
                    transitionState: e,
                    actions: z,
                }),
                null != j
                    ? (0, i.jsx)(y.K, { options: j })
                    : (0, i.jsx)(f.A, {
                          confettiTarget: D.current,
                          confettiCanvas: U,
                          sprites: (0, A.rA)(N.categorySkuId),
                      }),
            ],
        }),
    });
};
