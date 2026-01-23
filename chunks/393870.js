l.d(e, {
    default: () => k,
}),
    l(896048);
var r = l(627968);
l(64700);
var n = l(106778),
    a = l(575593),
    s = l(158954),
    i = l(397927),
    o = l(793574),
    u = l(688810),
    c = l(552736),
    d = l(206835),
    f = l(298072),
    p = l(993408),
    E = l(450481),
    A = l(645178),
    C = l(442759),
    v = l(306710),
    L = l(623373),
    m = l(660653),
    x = l(524246),
    R = l(14368),
    h = l(213530),
    T = l(961883),
    O = l(758836),
    _ = l(290964);
let k = (t) => {
    var e;
    let l,
        k,
        {
            transitionState: w,
            product: y,
            onClose: I,
            analyticsLocations: P,
            overrideTitle: b,
            overrideDescription: g,
            shouldShowPromotionalExperience: j,
            purchaseType: D = O.gs.FIAT,
            overrideGraphic: N,
            rentalDuration: S,
            rentalExpiresAt: F,
        } = t,
        M = (0, f.Q)(y),
        V = (0, L.rb)(y, M),
        { analyticsLocations: B } = (0, u.Ay)([...P, o.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: G } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: l, firstNameplate: r } = (0, C.f5)(t),
                n = (0, p.aw)(t);
            return {
                firstAvatarDecoration: l,
                firstProfileEffect: e,
                firstNameplate: r,
                isBundle: n,
                hasRequiredProductItems: n ? (0, m.u)(t) : null != l || null != e || null != r,
            };
        })(V),
        { promotionalRewardCollectedText: W, openProfileSettings: $ } =
            ((l = (0, c.A)()),
            (k = (0, d.A)({
                analyticsLocations: B,
            })),
            {
                giftingPromotionConfig: l,
                promotionalRewardCollectedText:
                    null == l || null == (e = l.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: k,
            }),
        {
            environment: q,
            modalRef: z,
            confettiCanvas: H,
            setConfettiCanvas: K,
            customConfettiDisplayOptions: Q,
        } = (0, T.mO)(V, D),
        U = (0, A.o7)(V);
    (0, T.$V)(V, B);
    let { handleUseNow: Y, isApplying: J } = (0, E.p)({
            product: V,
            onSuccess: I,
            onError: I,
        }),
        X = (0, T.$k)({
            product: V,
            overrideTitle: b,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: j,
            productName: U,
            rentalDuration: S,
        }),
        Z = (0, T.v8)({
            product: V,
            overrideDescription: g,
            productName: U,
            shouldShowPromotionalExperience: j,
            promotionalRewardCollectedText: W,
            isRental: null != S,
            expiresAt: F,
        }),
        tt = (0, T.aG)({
            product: V,
            onClose: I,
            analyticsLocations: B,
            hasRequiredProductItems: G,
            handleUseNow: Y,
            isApplying: J,
            openProfileSettings: $,
        }),
        te = "6/4";
    switch (V.type) {
        case a.R.NAMEPLATE:
        case a.R.AVATAR_DECORATION:
            te = "16/9";
            break;
        case a.R.BUNDLE:
        case a.R.PROFILE_EFFECT:
        default:
            te = "6/4";
    }
    let { confettiColors: tl } = (0, v.A)(V.styles),
        tr =
            null != N
                ? N
                : {
                      type: "dynamic",
                      component: i.Oz7.COLLECTIBLES_PREVIEW,
                      aspectRatio: te,
                      props: {
                          product: V,
                          forCollectedModal: !0,
                      },
                  };
    return (0, r.jsx)(u.f5, {
        value: B,
        children: (0, r.jsxs)("div", {
            ref: z,
            children: [
                (0, r.jsx)(n.Fk, {
                    ref: K,
                    className: _.L,
                    environment: q,
                }),
                (0, r.jsx)(s.ExpressiveModal, {
                    graphic: tr,
                    title: X,
                    subtitle: null != Z ? Z : void 0,
                    onClose: I,
                    transitionState: w,
                    actions: tt,
                }),
                null != Q
                    ? (0, r.jsx)(h.K, {
                          options: Q,
                      })
                    : (0, r.jsx)(x.A, {
                          confettiTarget: z.current,
                          confettiCanvas: H,
                          sprites: (0, R.rA)(V.categorySkuId),
                          colors: null == tl ? void 0 : tl.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
