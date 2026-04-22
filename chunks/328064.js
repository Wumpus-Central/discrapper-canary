s.d(t, { default: () => O });
var r = s(627968),
    c = s(64700),
    o = s(106778),
    a = s(772707),
    n = s(289873),
    i = s(116833),
    d = s(793574),
    p = s(688810),
    l = s(207803),
    u = s(298072),
    E = s(450481),
    _ = s(623373),
    f = s(181774),
    A = s(536572),
    m = s(524246),
    L = s(14368),
    b = s(213530),
    h = s(132198),
    v = s(961883),
    x = s(758836),
    I = s(700797);
let O = (e) => {
    let {
            transitionState: t,
            product: s,
            onClose: O,
            analyticsLocations: C,
            overrideTitle: D,
            overrideDescription: R,
            itemConsumed: G = !0,
            purchaseType: g = x.gs.ORB,
        } = e,
        j = (0, u.Q)(s),
        B = (0, _.rb)(s, j),
        { analyticsLocations: y } = (0, p.Ay)([...C, d.A.COLLECTIBLES_COLLECTED_MODAL]);
    c.useEffect(() => {
        x.Dp.ORB_PROFILE_BADGE === B.skuId && (0, l.Gr)([(0, h._)()], 600);
    }, [B.skuId]);
    let { isLoading: P, isFractionalPremiumActive: T, expiresAt: S } = (0, f.EZ)(),
        {
            environment: k,
            modalRef: N,
            confettiCanvas: F,
            setConfettiCanvas: M,
            customConfettiDisplayOptions: w,
        } = (0, v.mO)(B, g);
    (0, v.$V)(B, y);
    let H = (0, A.VG)(B),
        { handleUseNow: V, isApplying: U } = (0, E.p)({ product: B, onSuccess: O, onError: O });
    if (P) return (0, r.jsx)(n.y, { type: n.y.Type.SPINNING_CIRCLE });
    let W = (0, v.$k)({
            product: B,
            overrideTitle: D,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: H,
            itemConsumed: G,
        }),
        $ = (0, v.v8)({
            product: B,
            overrideDescription: R,
            productName: H,
            itemConsumed: G,
            isFractionalPremiumActive: T,
            expiresAt: S,
        }),
        K = (0, v.aG)({
            product: B,
            onClose: O,
            analyticsLocations: y,
            handleUseNow: V,
            isApplying: U,
            itemConsumed: G,
        });
    return (0, r.jsx)(p.f5, {
        value: y,
        children: (0, r.jsxs)("div", {
            ref: N,
            children: [
                (0, r.jsx)(o.Fk, { ref: M, className: I.L, environment: k }),
                (0, r.jsx)(a.k, {
                    graphic: {
                        type: "dynamic",
                        component: i.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                        props: { product: B, itemConsumed: G },
                    },
                    title: W,
                    subtitle: $ ?? void 0,
                    onClose: O,
                    transitionState: t,
                    actions: K,
                }),
                null != w
                    ? (0, r.jsx)(b.K, { options: w })
                    : (0, r.jsx)(m.A, {
                          confettiTarget: N.current,
                          confettiCanvas: F,
                          sprites: (0, L.rA)(B.categorySkuId),
                      }),
            ],
        }),
    });
};
