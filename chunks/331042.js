n.d(e, { default: () => O }), n(388685);
var o = n(54381);
n(473749);
var s = n(921254),
    a = n(979554),
    l = n(793030),
    r = n(481060),
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
            overrideGraphic: P,
        } = t,
        S = (0, p.o)(n),
        b = (0, Z.W)(n, S),
        { analyticsLocations: g } = (0, c.ZP)([...R, i.Z.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: N } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: o } = (0, f.Rj)(t),
                s = (0, C.x6)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: o,
                isBundle: s,
                hasRequiredProductItems: s ? (0, L.N)(t) : null != n || null != e || null != o,
            };
        })(b),
        { promotionalRewardCollectedText: D, openProfileSettings: F } = ((t) => {
            var e;
            let n = (0, u.Z)(),
                o = (0, d.Z)({ analyticsLocations: t });
            return {
                giftingPromotionConfig: n,
                promotionalRewardCollectedText:
                    null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: o,
            };
        })(g),
        {
            environment: M,
            modalRef: B,
            confettiCanvas: V,
            setConfettiCanvas: W,
            customConfettiDisplayOptions: G,
        } = (0, A.$0)(b, w),
        X = (0, _.kd)(b);
    (0, A.f1)(b, g);
    let { handleUseNow: $, isApplying: q } = (0, E.W)({
            product: b,
            onSuccess: O,
            onError: O,
        }),
        H = (0, A.Xw)({
            product: b,
            overrideTitle: j,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: y,
            productName: X,
        }),
        K = (0, A.ys)({
            product: b,
            overrideDescription: k,
            productName: X,
            shouldShowPromotionalExperience: y,
            promotionalRewardCollectedText: D,
        }),
        U = (0, A.cf)({
            product: b,
            onClose: O,
            analyticsLocations: g,
            hasRequiredProductItems: N,
            handleUseNow: $,
            isApplying: q,
            openProfileSettings: F,
        }),
        z = "6/4";
    switch (b.type) {
        case a.Z.NAMEPLATE:
        case a.Z.AVATAR_DECORATION:
            z = "16/9";
            break;
        case a.Z.BUNDLE:
        case a.Z.PROFILE_EFFECT:
        default:
            z = "6/4";
    }
    let { confettiColors: J } = (0, v.Z)(b.styles),
        Q =
            null != P
                ? P
                : {
                      type: "dynamic",
                      component: r.AX$.COLLECTIBLES_PREVIEW,
                      aspectRatio: z,
                      props: {
                          product: b,
                          forCollectedModal: !0,
                      },
                  };
    return (0, o.jsx)(c.Gt, {
        value: g,
        children: (0, o.jsxs)("div", {
            ref: B,
            children: [
                (0, o.jsx)(s.O_, {
                    ref: W,
                    className: I.confettiCanvas,
                    environment: M,
                }),
                (0, o.jsx)(l.ExpressiveModal, {
                    graphic: Q,
                    title: H,
                    subtitle: null != K ? K : void 0,
                    onClose: O,
                    transitionState: e,
                    actions: U,
                }),
                null != G
                    ? (0, o.jsx)(T.i, { options: G })
                    : (0, o.jsx)(x.Z, {
                          confettiTarget: B.current,
                          confettiCanvas: V,
                          sprites: (0, h.vK)(b.categorySkuId),
                          colors: null == J ? void 0 : J.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
