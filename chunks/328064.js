n.d(e, { default: () => C });
var i = n(627968),
    r = n(64700),
    a = n(106778),
    l = n(158954),
    s = n(397927),
    d = n(793574),
    u = n(688810),
    o = n(207803),
    c = n(298072),
    p = n(450481),
    h = n(623373),
    E = n(181774),
    O = n(536572),
    f = n(524246),
    A = n(14368),
    I = n(213530),
    _ = n(132198),
    L = n(961883),
    R = n(758836),
    y = n(7102);
let C = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: C,
            analyticsLocations: m,
            overrideTitle: T,
            overrideDescription: b,
            itemConsumed: k = !0,
            purchaseType: S = R.gs.ORB,
        } = t,
        g = (0, c.Q)(n),
        v = (0, h.rb)(n, g),
        { analyticsLocations: M } = (0, u.Ay)([...m, d.A.COLLECTIBLES_COLLECTED_MODAL]);
    r.useEffect(() => {
        R.Dp.ORB_PROFILE_BADGE === v.skuId && (0, o.Gr)([(0, _._)()], 600);
    }, [v.skuId]);
    let { isLoading: x, isFractionalPremiumActive: B, expiresAt: N } = (0, E.EZ)(),
        {
            environment: P,
            modalRef: D,
            confettiCanvas: U,
            setConfettiCanvas: F,
            customConfettiDisplayOptions: j,
        } = (0, L.mO)(v, S);
    (0, L.$V)(v, M);
    let G = (0, O.VG)(v),
        { handleUseNow: V, isApplying: w } = (0, p.p)({ product: v, onSuccess: C, onError: C });
    if (x) return (0, i.jsx)(s.y$y, { type: s.y$y.Type.SPINNING_CIRCLE });
    let H = (0, L.$k)({
            product: v,
            overrideTitle: T,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: G,
            itemConsumed: k,
        }),
        W = (0, L.v8)({
            product: v,
            overrideDescription: b,
            productName: G,
            itemConsumed: k,
            isFractionalPremiumActive: B,
            expiresAt: N,
        }),
        z = (0, L.aG)({
            product: v,
            onClose: C,
            analyticsLocations: M,
            handleUseNow: V,
            isApplying: w,
            itemConsumed: k,
        });
    return (0, i.jsx)(u.f5, {
        value: M,
        children: (0, i.jsxs)("div", {
            ref: D,
            children: [
                (0, i.jsx)(a.Fk, { ref: F, className: y.L, environment: P }),
                (0, i.jsx)(l.ExpressiveModal, {
                    graphic: {
                        type: "dynamic",
                        component: s.Oz7.COLLECTIBLES_PREVIEW,
                        props: { product: v, itemConsumed: k },
                    },
                    title: H,
                    subtitle: W ?? void 0,
                    onClose: C,
                    transitionState: e,
                    actions: z,
                }),
                null != j
                    ? (0, i.jsx)(I.K, { options: j })
                    : (0, i.jsx)(f.A, {
                          confettiTarget: D.current,
                          confettiCanvas: U,
                          sprites: (0, A.rA)(v.categorySkuId),
                      }),
            ],
        }),
    });
};
