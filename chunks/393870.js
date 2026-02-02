n.d(e, {
    default: () => I,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(106778),
    l = n(575593),
    a = n(158954),
    s = n(397927),
    o = n(793574),
    u = n(688810),
    c = n(206835),
    p = n(298072),
    d = n(993408),
    f = n(450481),
    O = n(645178),
    b = n(442759),
    y = n(306710),
    h = n(623373),
    E = n(660653),
    A = n(524246),
    m = n(14368),
    g = n(213530),
    R = n(961883),
    P = n(758836),
    v = n(985018),
    C = n(290964);
let I = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: I,
            analyticsLocations: L,
            overrideTitle: _,
            overrideDescription: T,
            shouldShowPromotionalExperience: j,
            purchaseType: S = P.gs.FIAT,
            overrideGraphic: k,
            rentalDuration: D,
            rentalExpiresAt: N,
        } = t,
        w = (0, p.Q)(n),
        M = (0, h.rb)(n, w),
        { analyticsLocations: x } = (0, u.Ay)([...L, o.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: B } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: r } = (0, b.f5)(t),
                i = (0, d.aw)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: r,
                isBundle: i,
                hasRequiredProductItems: i ? (0, E.uh)(t) : null != n || null != e || null != r,
            };
        })(M),
        U = (0, c.A)({
            analyticsLocations: x,
        }),
        F = v.intl.string(v.t.eZrmtq),
        {
            environment: G,
            modalRef: H,
            confettiCanvas: V,
            setConfettiCanvas: W,
            customConfettiDisplayOptions: z,
        } = (0, R.mO)(M, S),
        Q = (0, O.o7)(M);
    (0, R.$V)(M, x);
    let { handleUseNow: q, isApplying: J } = (0, f.p)({
            product: M,
            onSuccess: I,
            onError: I,
        }),
        Y = (0, R.$k)({
            product: M,
            overrideTitle: _,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: j,
            productName: Q,
            rentalDuration: D,
        }),
        K = (0, R.v8)({
            product: M,
            overrideDescription: T,
            productName: Q,
            shouldShowPromotionalExperience: j,
            promotionalRewardCollectedText: F,
            isRental: null != D,
            expiresAt: N,
        }),
        Z = (0, R.aG)({
            product: M,
            onClose: I,
            analyticsLocations: x,
            hasRequiredProductItems: B,
            handleUseNow: q,
            isApplying: J,
            openProfileSettings: U,
        }),
        $ = "6/4";
    switch (M.type) {
        case l.R.NAMEPLATE:
        case l.R.AVATAR_DECORATION:
            $ = "16/9";
            break;
        case l.R.BUNDLE:
        case l.R.PROFILE_EFFECT:
        default:
            $ = "6/4";
    }
    let { confettiColors: X } = (0, y.A)(M.styles),
        tt =
            null != k
                ? k
                : {
                      type: "dynamic",
                      component: s.Oz7.COLLECTIBLES_PREVIEW,
                      aspectRatio: $,
                      props: {
                          product: M,
                          forCollectedModal: !0,
                      },
                  };
    return (0, r.jsx)(u.f5, {
        value: x,
        children: (0, r.jsxs)("div", {
            ref: H,
            children: [
                (0, r.jsx)(i.Fk, {
                    ref: W,
                    className: C.L,
                    environment: G,
                }),
                (0, r.jsx)(a.ExpressiveModal, {
                    graphic: tt,
                    title: Y,
                    subtitle: null != K ? K : void 0,
                    onClose: I,
                    transitionState: e,
                    actions: Z,
                }),
                null != z
                    ? (0, r.jsx)(g.K, {
                          options: z,
                      })
                    : (0, r.jsx)(A.A, {
                          confettiTarget: H.current,
                          confettiCanvas: V,
                          sprites: (0, m.rA)(M.categorySkuId),
                          colors: null == X ? void 0 : X.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
