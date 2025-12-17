n.d(e, { default: () => I }), n(388685);
var l = n(54381);
n(473749);
var r = n(921254),
    a = n(979554),
    i = n(793030),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(347896),
    f = n(300284),
    d = n(429368),
    p = n(884697),
    E = n(635552),
    C = n(328456),
    v = n(624377),
    x = n(330349),
    L = n(530618),
    A = n(372654),
    h = n(197831),
    m = n(58201),
    T = n(29121),
    Z = n(391594),
    R = n(215023),
    _ = n(505281);
let I = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: I,
            analyticsLocations: N,
            overrideTitle: O,
            overrideDescription: P,
            shouldShowPromotionalExperience: b,
            purchaseType: j = R.o8.FIAT,
            overrideGraphic: k,
            rentalDuration: w,
            rentalExpiresAt: y,
        } = t,
        D = (0, d.o)(n),
        S = (0, m.W)(n, D),
        { analyticsLocations: g } = (0, c.ZP)([...N, s.Z.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: B } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: l } = (0, C.Rj)(t),
                r = (0, p.x6)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: l,
                isBundle: r,
                hasRequiredProductItems: r ? (0, x.N)(t) : null != n || null != e || null != l,
            };
        })(S),
        { promotionalRewardCollectedText: F, openProfileSettings: M } = ((t) => {
            var e;
            let n = (0, u.Z)(),
                l = (0, f.Z)({ analyticsLocations: t });
            return {
                giftingPromotionConfig: n,
                promotionalRewardCollectedText:
                    null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: l,
            };
        })(g),
        {
            environment: V,
            modalRef: W,
            confettiCanvas: G,
            setConfettiCanvas: X,
            customConfettiDisplayOptions: $,
        } = (0, Z.$0)(S, j),
        q = (0, T.kd)(S);
    (0, Z.f1)(S, g);
    let { handleUseNow: H, isApplying: K } = (0, E.W)({
            product: S,
            onSuccess: I,
            onError: I,
        }),
        U = (0, Z.Xw)({
            product: S,
            overrideTitle: O,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: b,
            productName: q,
            rentalDuration: w,
        }),
        z = (0, Z.ys)({
            product: S,
            overrideDescription: P,
            productName: q,
            shouldShowPromotionalExperience: b,
            promotionalRewardCollectedText: F,
            isRental: null != w,
            expiresAt: y,
        }),
        J = (0, Z.cf)({
            product: S,
            onClose: I,
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
    let { confettiColors: Y } = (0, v.Z)(S.styles),
        tt =
            null != k
                ? k
                : {
                      type: "dynamic",
                      component: o.AX$.COLLECTIBLES_PREVIEW,
                      aspectRatio: Q,
                      props: {
                          product: S,
                          forCollectedModal: !0,
                      },
                  };
    return (0, l.jsx)(c.Gt, {
        value: g,
        children: (0, l.jsxs)("div", {
            ref: W,
            children: [
                (0, l.jsx)(r.O_, {
                    ref: X,
                    className: _.confettiCanvas,
                    environment: V,
                }),
                (0, l.jsx)(i.ExpressiveModal, {
                    graphic: tt,
                    title: U,
                    subtitle: null != z ? z : void 0,
                    onClose: I,
                    transitionState: e,
                    actions: J,
                }),
                null != $
                    ? (0, l.jsx)(h.i, { options: $ })
                    : (0, l.jsx)(L.Z, {
                          confettiTarget: W.current,
                          confettiCanvas: G,
                          sprites: (0, A.vK)(S.categorySkuId),
                          colors: null == Y ? void 0 : Y.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
