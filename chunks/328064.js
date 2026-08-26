s.d(e, { default: () => O });
var n = s(477900),
    o = s(582128),
    r = s(776310),
    i = s(772707),
    a = s(289873),
    c = s(116833),
    p = s(793574),
    u = s(688810),
    d = s(207803),
    l = s(298072),
    E = s(450481),
    L = s(623373),
    C = s(181774),
    h = s(536572),
    y = s(524246),
    k = s(14368),
    m = s(213530),
    I = s(132198),
    f = s(184264),
    _ = s(758836),
    x = s(232666);
let O = (t) => {
    let {
            transitionState: e,
            product: s,
            onClose: O,
            analyticsLocations: j,
            overrideTitle: v,
            overrideDescription: G,
            itemConsumed: S = !0,
            purchaseType: A = _.gs.ORB,
        } = t,
        b = (0, l.Q)(s),
        g = (0, L.rb)(s, b),
        { analyticsLocations: B } = (0, u.Ay)([...j, p.A.COLLECTIBLES_COLLECTED_MODAL]);
    o.useEffect(() => {
        _.Dp.ORB_PROFILE_BADGE === g.skuId && (0, d.Gr)([(0, I._)()], 600);
    }, [g.skuId]);
    let { isLoading: D, isFractionalPremiumActive: R, expiresAt: T } = (0, C.EZ)(),
        {
            environment: N,
            modalRef: P,
            confettiCanvas: V,
            setConfettiCanvas: w,
            customConfettiDisplayOptions: F,
        } = (0, f.mO)(g, A);
    (0, f.$V)(g, B);
    let $ = (0, h.VG)(g),
        { handleUseNow: K, isApplying: M, canUseNow: Q } = (0, E.p)({ product: g, onSuccess: O, onError: O });
    if (D) return (0, n.jsx)(a.y, { type: a.y.Type.SPINNING_CIRCLE });
    let W = (0, f.$k)({
            product: g,
            overrideTitle: v,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: $,
            itemConsumed: S,
        }),
        Z = (0, f.v8)({
            product: g,
            overrideDescription: G,
            productName: $,
            itemConsumed: S,
            isFractionalPremiumActive: R,
            expiresAt: T,
        }),
        q = (0, f.aG)({
            props: { product: s, analyticsLocations: j, onClose: O, itemConsumed: S },
            product: g,
            analyticsLocations: B,
            handleUseNow: K,
            isApplying: M,
            canUseNow: Q,
        });
    return (0, n.jsx)(u.f5, {
        value: B,
        children: (0, n.jsxs)("div", {
            ref: P,
            children: [
                (0, n.jsx)(r.Fk, { ref: w, className: x.L, environment: N }),
                (0, n.jsx)(i.k, {
                    graphic: {
                        type: "dynamic",
                        component: c.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                        props: { product: g, itemConsumed: S },
                    },
                    title: W,
                    subtitle: Z ?? void 0,
                    onClose: O,
                    transitionState: e,
                    actions: q,
                }),
                null != F
                    ? (0, n.jsx)(m.K, { options: F })
                    : (0, n.jsx)(y.A, {
                          confettiTarget: P.current,
                          confettiCanvas: V,
                          sprites: (0, k.rA)(g.categorySkuId),
                      }),
            ],
        }),
    });
};
