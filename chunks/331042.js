n.d(e, { default: () => P }), n(388685);
var r = n(951288);
n(647438);
var l = n(238651),
    a = n(979554),
    o = n(399606),
    i = n(667202),
    s = n(481060),
    c = n(100527),
    u = n(906732),
    f = n(347896),
    d = n(300284),
    p = n(1870),
    C = n(429368),
    E = n(884697),
    v = n(635552),
    L = n(328456),
    h = n(624377),
    x = n(330349),
    Z = n(530618),
    m = n(372654),
    A = n(197831),
    T = n(58201),
    _ = n(29121),
    I = n(391594),
    N = n(215023),
    O = n(222311);
let P = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: P,
            analyticsLocations: R,
            overrideTitle: j,
            overrideDescription: k,
            shouldShowPromotionalExperience: w,
            purchaseType: y = N.o8.FIAT,
        } = t,
        b = (0, o.e7)([p.Z], () => p.Z.purchases),
        D = (0, C.o)(n, b),
        S = (0, T.W)(n, D),
        { analyticsLocations: g } = (0, u.ZP)([...R, c.Z.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: B } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: r } = (0, L.Rj)(t),
                l = (0, E.x6)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: r,
                isBundle: l,
                hasRequiredProductItems: l ? (0, x.N)(t) : null != n || null != e || null != r,
            };
        })(S),
        { promotionalRewardCollectedText: F, openProfileSettings: M } = ((t) => {
            var e;
            let n = (0, f.Z)(),
                r = (0, d.Z)({ analyticsLocations: t });
            return {
                giftingPromotionConfig: n,
                promotionalRewardCollectedText:
                    null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: r,
            };
        })(g),
        {
            environment: V,
            modalRef: W,
            confettiCanvas: G,
            setConfettiCanvas: X,
            customConfettiDisplayOptions: $,
        } = (0, I.$0)(S, y),
        q = (0, _.kd)(S);
    (0, I.f1)(S, g);
    let { handleUseNow: H, isApplying: K } = (0, v.W)({
            product: S,
            onSuccess: P,
            onError: P,
        }),
        U = (0, I.Xw)({
            product: S,
            overrideTitle: j,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: w,
            productName: q,
        }),
        z = (0, I.ys)({
            product: S,
            overrideDescription: k,
            productName: q,
            shouldShowPromotionalExperience: w,
            promotionalRewardCollectedText: F,
        }),
        J = (0, I.cf)({
            product: S,
            onClose: P,
            analyticsLocations: g,
            hasRequiredProductItems: B,
            handleUseNow: H,
            isApplying: K,
            openProfileSettings: M,
        }),
        Q = "6/4";
    switch (S.type) {
        case a.Z.NAMEPLATE:
        case a.Z.AVATAR_DECORATION:
            Q = "16/9";
            break;
        case a.Z.BUNDLE:
        case a.Z.PROFILE_EFFECT:
        default:
            Q = "6/4";
    }
    let { confettiColors: Y } = (0, h.Z)(S.styles);
    return (0, r.jsx)(u.Gt, {
        value: g,
        children: (0, r.jsxs)("div", {
            ref: W,
            children: [
                (0, r.jsx)(l.O_, {
                    ref: X,
                    className: O.confettiCanvas,
                    environment: V,
                }),
                (0, r.jsx)(i.I, {
                    graphic: {
                        type: "dynamic",
                        component: s.AX$.COLLECTIBLES_PREVIEW,
                        aspectRatio: Q,
                        props: {
                            product: S,
                            forCollectedModal: !0,
                        },
                    },
                    title: U,
                    subtitle: null != z ? z : void 0,
                    onClose: P,
                    transitionState: e,
                    actions: J,
                }),
                null != $
                    ? (0, r.jsx)(A.i, { options: $ })
                    : (0, r.jsx)(Z.Z, {
                          confettiTarget: W.current,
                          confettiCanvas: G,
                          sprites: (0, m.vK)(S.categorySkuId),
                          colors: null == Y ? void 0 : Y.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
