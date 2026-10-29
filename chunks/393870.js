a.d(e, { default: () => F });
var s = a(477900),
    o = a(582128),
    i = a(776310),
    n = a(575593),
    r = a(116833),
    c = a(772707),
    l = a(793574),
    p = a(688810),
    d = a(206835),
    u = a(298072),
    E = a(304210),
    C = a(450481),
    A = a(953150),
    L = a(623373),
    R = a(536572),
    m = a(524246),
    h = a(14368),
    k = a(213530),
    g = a(436733),
    y = a(61750),
    O = a(184264),
    T = a(758836),
    f = a(105292),
    v = a(232666);
let F = (t) => {
    let {
            transitionState: e,
            product: a,
            remainingProducts: F,
            onClose: I,
            analyticsLocations: _,
            overrideTitle: b,
            overrideDescription: w,
            shouldShowPromotionalExperience: x,
            purchaseType: j = T.gs.FIAT,
            overrideGraphic: S,
            overrideGradientColor: D,
            completesCollectAndClaimPromotion: G = !1,
        } = t,
        V = (0, u.Q)(a),
        M = (0, L.rb)(a, V),
        { analyticsLocations: N } = (0, p.Ay)([..._, l.A.COLLECTIBLES_COLLECTED_MODAL]),
        P = (0, d.A)({ analyticsLocations: N }),
        B = f.intl.string(f.t.eZrmtq),
        {
            environment: $,
            modalRef: q,
            confettiCanvas: H,
            setConfettiCanvas: K,
            customConfettiDisplayOptions: Q,
        } = (0, O.mO)(M, j),
        U = (0, R.VG)(M);
    (0, O.$V)(M, N);
    let {
            handleUseNow: W,
            isApplying: Z,
            canUseNow: z,
        } = (0, C.p)({
            product: M,
            onSuccess: () => {
                (null == F || 0 === F.length) && I();
            },
            onError: I,
        }),
        { promotion: J, isFetchingPromotion: X } = (0, E.FE)(G),
        Y = o.useCallback(
            (t) => {
                (I(), (0, y.A)({ product: t, analyticsLocations: _ }));
            },
            [I, _],
        ),
        { onClaim: tt, isClaiming: te } = (0, g.G)(J, Y),
        ta = (0, O.$k)({
            product: M,
            overrideTitle: b,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: x,
            productName: U,
        }),
        ts = (0, O.v8)({
            product: M,
            overrideDescription: w,
            productName: U,
            shouldShowPromotionalExperience: x,
            promotionalRewardCollectedText: B,
        }),
        to = (0, O.aG)({
            props: t,
            product: M,
            analyticsLocations: N,
            handleUseNow: W,
            isApplying: Z,
            canUseNow: z,
            openProfileSettings: P,
            isFetchingPromotion: X,
            showClaimReward: null != J || te,
            isClaimingReward: te,
            onClaimReward: tt,
        }),
        ti = "6/4";
    switch (M.type) {
        case n.R.NAMEPLATE:
        case n.R.AVATAR_DECORATION:
        case n.R.BUNDLE:
            ti = "16/9";
            break;
        case n.R.PROFILE_EFFECT:
        case n.R.PROFILE_FRAME:
        default:
            ti = "6/4";
    }
    let { confettiColors: tn } = (0, A.A)(M.styles),
        tr = S ?? {
            type: "dynamic",
            component: r.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: ti,
            props: { product: M, forCollectedModal: !0 },
        };
    return (0, s.jsx)(p.f5, {
        value: N,
        children: (0, s.jsxs)("div", {
            ref: q,
            children: [
                (0, s.jsx)(i.Fk, { ref: K, className: v.L, environment: $ }),
                (0, s.jsx)(c.k, {
                    graphic: tr,
                    title: ta,
                    subtitle: ts ?? void 0,
                    onClose: I,
                    transitionState: e,
                    actions: to,
                    gradientColor: D ?? void 0,
                }),
                null != Q
                    ? (0, s.jsx)(k.K, { options: Q })
                    : (0, s.jsx)(m.A, {
                          confettiTarget: q.current,
                          confettiCanvas: H,
                          sprites: (0, h.rA)(M.categorySkuId),
                          colors: tn?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
