n.d(e, { default: () => O }), n(388685);
var o = n(951288);
n(647438);
var s = n(238651),
    a = n(979554),
    r = n(793030),
    l = n(481060),
    i = n(100527),
    c = n(906732),
    u = n(347896),
    d = n(300284),
    p = n(429368),
    C = n(884697),
    E = n(635552),
    f = n(328456),
    v = n(624377),
    L = n(330349),
    x = n(530618),
    h = n(372654),
    T = n(197831),
    Z = n(58201),
    _ = n(29121),
    A = n(391594),
    m = n(215023),
    I = n(222311);
let O = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: O,
            analyticsLocations: R,
            overrideTitle: j,
            overrideDescription: k,
            shouldShowPromotionalExperience: y,
            purchaseType: w = m.o8.FIAT,
        } = t,
        P = (0, p.o)(n),
        S = (0, Z.W)(n, P),
        { analyticsLocations: b } = (0, c.ZP)([...R, i.Z.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: g } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: o } = (0, f.Rj)(t),
                s = (0, C.x6)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: o,
                isBundle: s,
                hasRequiredProductItems: s ? (0, L.N)(t) : null != n || null != e || null != o,
            };
        })(S),
        { promotionalRewardCollectedText: N, openProfileSettings: D } = ((t) => {
            var e;
            let n = (0, u.Z)(),
                o = (0, d.Z)({ analyticsLocations: t });
            return {
                giftingPromotionConfig: n,
                promotionalRewardCollectedText:
                    null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: o,
            };
        })(b),
        {
            environment: F,
            modalRef: M,
            confettiCanvas: B,
            setConfettiCanvas: V,
            customConfettiDisplayOptions: W,
        } = (0, A.$0)(S, w),
        G = (0, _.kd)(S);
    (0, A.f1)(S, b);
    let { handleUseNow: X, isApplying: $ } = (0, E.W)({
            product: S,
            onSuccess: O,
            onError: O,
        }),
        q = (0, A.Xw)({
            product: S,
            overrideTitle: j,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: y,
            productName: G,
        }),
        H = (0, A.ys)({
            product: S,
            overrideDescription: k,
            productName: G,
            shouldShowPromotionalExperience: y,
            promotionalRewardCollectedText: N,
        }),
        K = (0, A.cf)({
            product: S,
            onClose: O,
            analyticsLocations: b,
            hasRequiredProductItems: g,
            handleUseNow: X,
            isApplying: $,
            openProfileSettings: D,
        }),
        U = "6/4";
    switch (S.type) {
        case a.Z.NAMEPLATE:
        case a.Z.AVATAR_DECORATION:
            U = "16/9";
            break;
        case a.Z.BUNDLE:
        case a.Z.PROFILE_EFFECT:
        default:
            U = "6/4";
    }
    let { confettiColors: z } = (0, v.Z)(S.styles);
    return (0, o.jsx)(c.Gt, {
        value: b,
        children: (0, o.jsxs)("div", {
            ref: M,
            children: [
                (0, o.jsx)(s.O_, {
                    ref: V,
                    className: I.confettiCanvas,
                    environment: F,
                }),
                (0, o.jsx)(r.ExpressiveModal, {
                    graphic: {
                        type: "dynamic",
                        component: l.AX$.COLLECTIBLES_PREVIEW,
                        aspectRatio: U,
                        props: {
                            product: S,
                            forCollectedModal: !0,
                        },
                    },
                    title: q,
                    subtitle: null != H ? H : void 0,
                    onClose: O,
                    transitionState: e,
                    actions: K,
                }),
                null != W
                    ? (0, o.jsx)(T.i, { options: W })
                    : (0, o.jsx)(x.Z, {
                          confettiTarget: M.current,
                          confettiCanvas: B,
                          sprites: (0, h.vK)(S.categorySkuId),
                          colors: null == z ? void 0 : z.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
