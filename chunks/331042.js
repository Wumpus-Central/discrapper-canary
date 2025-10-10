n.d(e, { default: () => k }), n(388685);
var i = n(951288);
n(647438);
var r = n(238651),
    l = n(979554),
    a = n(793030),
    s = n(399606),
    u = n(481060),
    o = n(100527),
    d = n(906732),
    c = n(347896),
    p = n(300284),
    h = n(1870),
    E = n(429368),
    f = n(884697),
    A = n(635552),
    O = n(328456),
    C = n(624377),
    T = n(330349),
    I = n(530618),
    R = n(372654),
    _ = n(197831),
    y = n(58201),
    L = n(29121),
    m = n(391594),
    b = n(215023),
    g = n(222311);
let k = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: k,
            analyticsLocations: v,
            overrideTitle: S,
            overrideDescription: P,
            shouldShowPromotionalExperience: N,
            purchaseType: Z = b.o8.FIAT,
        } = t,
        M = (0, s.e7)([h.Z], () => h.Z.purchases),
        x = (0, E.o)(n, M),
        B = (0, y.W)(n, x),
        { analyticsLocations: U } = (0, d.ZP)([...v, o.Z.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: D } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: i } = (0, O.Rj)(t),
                r = (0, f.x6)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: i,
                isBundle: r,
                hasRequiredProductItems: r ? (0, T.N)(t) : null != n || null != e || null != i,
            };
        })(B),
        { promotionalRewardCollectedText: F, openProfileSettings: w } = ((t) => {
            var e;
            let n = (0, c.Z)(),
                i = (0, p.Z)({ analyticsLocations: t });
            return {
                giftingPromotionConfig: n,
                promotionalRewardCollectedText:
                    null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: i,
            };
        })(U),
        {
            environment: j,
            modalRef: V,
            confettiCanvas: G,
            setConfettiCanvas: W,
            customConfettiDisplayOptions: H,
        } = (0, m.$0)(B, Z),
        X = (0, L.kd)(B);
    (0, m.f1)(B, U);
    let { handleUseNow: z, isApplying: Y } = (0, A.W)({
            product: B,
            onSuccess: k,
            onError: k,
        }),
        Q = (0, m.Xw)({
            product: B,
            overrideTitle: S,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: N,
            productName: X,
        }),
        $ = (0, m.ys)({
            product: B,
            overrideDescription: P,
            productName: X,
            shouldShowPromotionalExperience: N,
            promotionalRewardCollectedText: F,
        }),
        q = (0, m.cf)({
            product: B,
            onClose: k,
            analyticsLocations: U,
            hasRequiredProductItems: D,
            handleUseNow: z,
            isApplying: Y,
            openProfileSettings: w,
        }),
        K = "6/4";
    switch (B.type) {
        case l.Z.NAMEPLATE:
        case l.Z.AVATAR_DECORATION:
            K = "16/9";
            break;
        case l.Z.BUNDLE:
        case l.Z.PROFILE_EFFECT:
        default:
            K = "6/4";
    }
    let { confettiColors: J } = (0, C.Z)(B.styles);
    return (0, i.jsx)(d.Gt, {
        value: U,
        children: (0, i.jsxs)("div", {
            ref: V,
            children: [
                (0, i.jsx)(r.O_, {
                    ref: W,
                    className: g.confettiCanvas,
                    environment: j,
                }),
                (0, i.jsx)(a.ExpressiveModal, {
                    graphic: {
                        type: "dynamic",
                        component: u.AX$.COLLECTIBLES_PREVIEW,
                        aspectRatio: K,
                        props: {
                            product: B,
                            forCollectedModal: !0,
                        },
                    },
                    title: Q,
                    subtitle: null != $ ? $ : void 0,
                    onClose: k,
                    transitionState: e,
                    actions: q,
                }),
                null != H
                    ? (0, i.jsx)(_.i, { options: H })
                    : (0, i.jsx)(I.Z, {
                          confettiTarget: V.current,
                          confettiCanvas: G,
                          sprites: (0, R.vK)(B.categorySkuId),
                          colors: null == J ? void 0 : J.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
