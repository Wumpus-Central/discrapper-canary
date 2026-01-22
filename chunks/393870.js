l.d(e, { default: () => w }), l(896048);
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
    A = l(442759),
    C = l(306710),
    L = l(660653),
    v = l(524246),
    m = l(14368),
    x = l(213530),
    R = l(767503),
    h = l(764999),
    T = l(961883),
    O = l(758836),
    k = l(290964);
let w = (t) => {
    var e;
    let l,
        w,
        {
            transitionState: y,
            product: I,
            onClose: _,
            analyticsLocations: P,
            overrideTitle: b,
            overrideDescription: g,
            shouldShowPromotionalExperience: j,
            purchaseType: D = O.gs.FIAT,
            overrideGraphic: N,
            rentalDuration: S,
            rentalExpiresAt: F,
        } = t,
        M = (0, f.Q)(I),
        V = (0, R.r)(I, M),
        { analyticsLocations: B } = (0, u.Ay)([...P, o.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: G } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: l, firstNameplate: r } = (0, A.f5)(t),
                n = (0, p.aw)(t);
            return {
                firstAvatarDecoration: l,
                firstProfileEffect: e,
                firstNameplate: r,
                isBundle: n,
                hasRequiredProductItems: n ? (0, L.u)(t) : null != l || null != e || null != r,
            };
        })(V),
        { promotionalRewardCollectedText: W, openProfileSettings: $ } =
            ((l = (0, c.A)()),
            (w = (0, d.A)({ analyticsLocations: B })),
            {
                giftingPromotionConfig: l,
                promotionalRewardCollectedText:
                    null == l || null == (e = l.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: w,
            }),
        {
            environment: q,
            modalRef: z,
            confettiCanvas: H,
            setConfettiCanvas: K,
            customConfettiDisplayOptions: Q,
        } = (0, T.mO)(V, D),
        U = (0, h.o7)(V);
    (0, T.$V)(V, B);
    let { handleUseNow: Y, isApplying: J } = (0, E.p)({
            product: V,
            onSuccess: _,
            onError: _,
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
            onClose: _,
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
    let { confettiColors: tl } = (0, C.A)(V.styles),
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
                    className: k.L,
                    environment: q,
                }),
                (0, r.jsx)(s.ExpressiveModal, {
                    graphic: tr,
                    title: X,
                    subtitle: null != Z ? Z : void 0,
                    onClose: _,
                    transitionState: y,
                    actions: tt,
                }),
                null != Q
                    ? (0, r.jsx)(x.K, { options: Q })
                    : (0, r.jsx)(v.A, {
                          confettiTarget: z.current,
                          confettiCanvas: H,
                          sprites: (0, m.rA)(V.categorySkuId),
                          colors: null == tl ? void 0 : tl.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
