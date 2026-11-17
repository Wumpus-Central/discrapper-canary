var s = a(477900),
    n = a(582128),
    o = a(776310),
    r = a(575593),
    i = a(116833),
    c = a(772707),
    l = a(793574),
    d = a(688810),
    p = a(206835),
    u = a(298072),
    E = a(304210),
    C = a(450481),
    A = a(959281),
    L = a(623373),
    R = a(536572),
    h = a(524246),
    m = a(159522),
    k = a(14368),
    g = a(213530),
    y = a(436733),
    O = a(61750),
    T = a(184264),
    b = a(758836),
    f = a(792996),
    v = a(232666);
a.d(
    e,
    {},
    {
        default: (t) => {
            let {
                    transitionState: e,
                    product: a,
                    remainingProducts: x,
                    onClose: F,
                    analyticsLocations: I,
                    overrideTitle: _,
                    overrideDescription: j,
                    shouldShowPromotionalExperience: w,
                    purchaseType: S = b.gs.FIAT,
                    overrideGraphic: D,
                    overrideGradientColor: G,
                    completesCollectAndClaimPromotion: V = !1,
                    orbsBack: B,
                } = t,
                M = (0, u.Q)(a),
                N = (0, L.rb)(a, M),
                { analyticsLocations: P } = (0, d.Ay)([...I, l.A.COLLECTIBLES_COLLECTED_MODAL]),
                $ = (0, p.A)({ analyticsLocations: P }),
                q = f.intl.string(f.t.eZrmtq),
                {
                    environment: H,
                    modalRef: K,
                    confettiCanvas: Q,
                    setConfettiCanvas: U,
                    customConfettiDisplayOptions: W,
                } = (0, T.mO)(N, S),
                Z = (0, R.VG)(N);
            (0, T.$V)(N, P);
            let {
                    handleUseNow: z,
                    isApplying: J,
                    canUseNow: X,
                } = (0, C.p)({
                    product: N,
                    onSuccess: () => {
                        (null == x || 0 === x.length) && F();
                    },
                    onError: F,
                }),
                { promotion: Y, isFetchingPromotion: tt } = (0, E.FE)(V),
                te = n.useCallback(
                    (t) => {
                        (F(), (0, O.A)({ product: t, analyticsLocations: I }));
                    },
                    [F, I],
                ),
                { onClaim: ta, isClaiming: ts } = (0, y.G)(Y, te),
                tn = (0, T.$k)({
                    product: N,
                    overrideTitle: _,
                    isVariantsGroupEnabled: !0,
                    shouldShowPromotionalExperience: w,
                    productName: Z,
                }),
                to = (0, T.v8)({
                    product: N,
                    overrideDescription: j,
                    productName: Z,
                    shouldShowPromotionalExperience: w,
                    promotionalRewardCollectedText: q,
                }),
                tr = (0, T.aG)({
                    props: t,
                    product: N,
                    analyticsLocations: P,
                    handleUseNow: z,
                    isApplying: J,
                    canUseNow: X,
                    openProfileSettings: $,
                    isFetchingPromotion: tt,
                    showClaimReward: null != Y || ts,
                    isClaimingReward: ts,
                    onClaimReward: ta,
                }),
                ti = "6/4";
            switch (N.type) {
                case r.R.NAMEPLATE:
                case r.R.AVATAR_DECORATION:
                case r.R.BUNDLE:
                    ti = "16/9";
                    break;
                case r.R.PROFILE_EFFECT:
                case r.R.PROFILE_FRAME:
                default:
                    ti = "6/4";
            }
            let { confettiColors: tc } = (0, A.A)(N.styles),
                tl = D ?? {
                    type: "dynamic",
                    component: i.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
                    aspectRatio: ti,
                    props: { product: N, forCollectedModal: !0 },
                };
            return (0, s.jsx)(d.f5, {
                value: P,
                children: (0, s.jsxs)("div", {
                    ref: K,
                    children: [
                        (0, s.jsx)(o.Fk, { ref: U, className: v.L, environment: H }),
                        (0, s.jsx)(c.k, {
                            graphic: tl,
                            title: tn,
                            subtitle: to ?? void 0,
                            onClose: F,
                            transitionState: e,
                            actions: tr,
                            gradientColor: G ?? void 0,
                            children: null != B ? (0, s.jsx)(m.A, { orbsBack: B }) : null,
                        }),
                        null != W
                            ? (0, s.jsx)(g.K, { options: W })
                            : (0, s.jsx)(h.A, {
                                  confettiTarget: K.current,
                                  confettiCanvas: Q,
                                  sprites: (0, k.rA)(N.categorySkuId),
                                  colors: tc?.map((t) => t.toHexString()),
                              }),
                    ],
                }),
            });
        },
    },
);
