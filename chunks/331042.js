n.d(e, { default: () => I }), n(388685);
var s = n(54381);
n(473749);
var l = n(921254),
    a = n(979554),
    o = n(793030),
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
    x = n(330349),
    L = n(530618),
    h = n(372654),
    T = n(197831),
    A = n(58201),
    R = n(29121),
    Z = n(391594),
    _ = n(215023),
    m = n(222311);
let I = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: I,
            analyticsLocations: O,
            overrideTitle: j,
            overrideDescription: k,
            shouldShowPromotionalExperience: y,
            purchaseType: w = _.o8.FIAT,
            overrideGraphic: P,
            rentalDuration: S,
            rentalExpiresAt: b,
        } = t,
        g = (0, p.o)(n),
        N = (0, A.W)(n, g),
        { analyticsLocations: D } = (0, c.ZP)([...O, i.Z.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: F } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: s } = (0, f.Rj)(t),
                l = (0, C.x6)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: s,
                isBundle: l,
                hasRequiredProductItems: l ? (0, x.N)(t) : null != n || null != e || null != s,
            };
        })(N),
        { promotionalRewardCollectedText: M, openProfileSettings: B } = ((t) => {
            var e;
            let n = (0, u.Z)(),
                s = (0, d.Z)({ analyticsLocations: t });
            return {
                giftingPromotionConfig: n,
                promotionalRewardCollectedText:
                    null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: s,
            };
        })(D),
        {
            environment: V,
            modalRef: W,
            confettiCanvas: G,
            setConfettiCanvas: X,
            customConfettiDisplayOptions: $,
        } = (0, Z.$0)(N, w),
        q = (0, R.kd)(N);
    (0, Z.f1)(N, D);
    let { handleUseNow: H, isApplying: K } = (0, E.W)({
            product: N,
            onSuccess: I,
            onError: I,
        }),
        U = (0, Z.Xw)({
            product: N,
            overrideTitle: j,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: y,
            productName: q,
            rentalDuration: S,
        }),
        z = (0, Z.ys)({
            product: N,
            overrideDescription: k,
            productName: q,
            shouldShowPromotionalExperience: y,
            promotionalRewardCollectedText: M,
            isRental: null != S,
            expiresAt: b,
        }),
        J = (0, Z.cf)({
            product: N,
            onClose: I,
            analyticsLocations: D,
            hasRequiredProductItems: F,
            handleUseNow: H,
            isApplying: K,
            openProfileSettings: B,
            isRental: null != S,
        }),
        Q = "6/4";
    switch (N.type) {
        case a.Z.NAMEPLATE:
        case a.Z.AVATAR_DECORATION:
            Q = "16/9";
            break;
        case a.Z.BUNDLE:
        case a.Z.PROFILE_EFFECT:
        default:
            Q = "6/4";
    }
    let { confettiColors: Y } = (0, v.Z)(N.styles),
        tt =
            null != P
                ? P
                : {
                      type: "dynamic",
                      component: r.AX$.COLLECTIBLES_PREVIEW,
                      aspectRatio: Q,
                      props: {
                          product: N,
                          forCollectedModal: !0,
                      },
                  };
    return (0, s.jsx)(c.Gt, {
        value: D,
        children: (0, s.jsxs)("div", {
            ref: W,
            children: [
                (0, s.jsx)(l.O_, {
                    ref: X,
                    className: m.confettiCanvas,
                    environment: V,
                }),
                (0, s.jsx)(o.ExpressiveModal, {
                    graphic: tt,
                    title: U,
                    subtitle: null != z ? z : void 0,
                    onClose: I,
                    transitionState: e,
                    actions: J,
                }),
                null != $
                    ? (0, s.jsx)(T.i, { options: $ })
                    : (0, s.jsx)(L.Z, {
                          confettiTarget: W.current,
                          confettiCanvas: G,
                          sprites: (0, h.vK)(N.categorySkuId),
                          colors: null == Y ? void 0 : Y.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
