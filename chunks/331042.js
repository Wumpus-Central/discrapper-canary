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
    I = n(722982);
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
            isRental: S = !1,
            rentalDuration: b,
            rentalExpiresAt: g,
        } = t,
        N = (0, p.o)(n),
        D = (0, Z.W)(n, N),
        { analyticsLocations: F } = (0, c.ZP)([...R, i.Z.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: M } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: o } = (0, f.Rj)(t),
                s = (0, C.x6)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: o,
                isBundle: s,
                hasRequiredProductItems: s ? (0, L.N)(t) : null != n || null != e || null != o,
            };
        })(D),
        { promotionalRewardCollectedText: B, openProfileSettings: V } = ((t) => {
            var e;
            let n = (0, u.Z)(),
                o = (0, d.Z)({ analyticsLocations: t });
            return {
                giftingPromotionConfig: n,
                promotionalRewardCollectedText:
                    null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: o,
            };
        })(F),
        {
            environment: W,
            modalRef: G,
            confettiCanvas: X,
            setConfettiCanvas: $,
            customConfettiDisplayOptions: q,
        } = (0, A.$0)(D, w),
        H = (0, _.kd)(D);
    (0, A.f1)(D, F);
    let { handleUseNow: K, isApplying: U } = (0, E.W)({
            product: D,
            onSuccess: O,
            onError: O,
        }),
        z = (0, A.Xw)({
            product: D,
            overrideTitle: j,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: y,
            productName: H,
            isRental: S,
            rentalDuration: b,
        }),
        J = (0, A.ys)({
            product: D,
            overrideDescription: k,
            productName: H,
            shouldShowPromotionalExperience: y,
            promotionalRewardCollectedText: B,
            isRental: S,
            rentalExpiresAt: g,
        }),
        Q = (0, A.cf)({
            product: D,
            onClose: O,
            analyticsLocations: F,
            hasRequiredProductItems: M,
            handleUseNow: K,
            isApplying: U,
            openProfileSettings: V,
            isRental: S,
        }),
        Y = "6/4";
    switch (D.type) {
        case a.Z.NAMEPLATE:
        case a.Z.AVATAR_DECORATION:
            Y = "16/9";
            break;
        case a.Z.BUNDLE:
        case a.Z.PROFILE_EFFECT:
        default:
            Y = "6/4";
    }
    let { confettiColors: tt } = (0, v.Z)(D.styles),
        te =
            null != P
                ? P
                : {
                      type: "dynamic",
                      component: r.AX$.COLLECTIBLES_PREVIEW,
                      aspectRatio: Y,
                      props: {
                          product: D,
                          forCollectedModal: !0,
                      },
                  };
    return (0, o.jsx)(c.Gt, {
        value: F,
        children: (0, o.jsxs)("div", {
            ref: G,
            children: [
                (0, o.jsx)(s.O_, {
                    ref: $,
                    className: I.confettiCanvas,
                    environment: W,
                }),
                (0, o.jsx)(l.ExpressiveModal, {
                    graphic: te,
                    title: z,
                    subtitle: null != J ? J : void 0,
                    onClose: O,
                    transitionState: e,
                    actions: Q,
                }),
                null != q
                    ? (0, o.jsx)(T.i, { options: q })
                    : (0, o.jsx)(x.Z, {
                          confettiTarget: G.current,
                          confettiCanvas: X,
                          sprites: (0, h.vK)(D.categorySkuId),
                          colors: null == tt ? void 0 : tt.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
