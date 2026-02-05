n.d(e, { default: () => b });
var i = n(627968);
n(64700);
var r = n(106778),
    l = n(575593),
    a = n(158954),
    s = n(397927),
    u = n(793574),
    d = n(688810),
    o = n(206835),
    c = n(298072),
    p = n(993408),
    f = n(450481),
    h = n(645178),
    E = n(442759),
    A = n(306710),
    O = n(623373),
    R = n(660653),
    m = n(524246),
    C = n(14368),
    I = n(213530),
    L = n(961883),
    _ = n(758836),
    y = n(985018),
    T = n(290964);
let b = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: b,
            analyticsLocations: k,
            overrideTitle: g,
            overrideDescription: S,
            shouldShowPromotionalExperience: v,
            purchaseType: N = _.gs.FIAT,
            overrideGraphic: P,
            rentalDuration: M,
            rentalExpiresAt: D,
        } = t,
        x = (0, c.Q)(n),
        B = (0, O.rb)(n, x),
        { analyticsLocations: U } = (0, d.Ay)([...k, u.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: F } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: i } = (0, E.f5)(t),
                r = (0, p.aw)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: i,
                isBundle: r,
                hasRequiredProductItems: r ? (0, R.uh)(t) : null != n || null != e || null != i,
            };
        })(B),
        j = (0, o.A)({ analyticsLocations: U }),
        w = y.intl.string(y.t.eZrmtq),
        {
            environment: G,
            modalRef: H,
            confettiCanvas: V,
            setConfettiCanvas: W,
            customConfettiDisplayOptions: z,
        } = (0, L.mO)(B, N),
        Q = (0, h.o7)(B);
    (0, L.$V)(B, U);
    let { handleUseNow: q, isApplying: J } = (0, f.p)({ product: B, onSuccess: b, onError: b }),
        Y = (0, L.$k)({
            product: B,
            overrideTitle: g,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: v,
            productName: Q,
            rentalDuration: M,
        }),
        K = (0, L.v8)({
            product: B,
            overrideDescription: S,
            productName: Q,
            shouldShowPromotionalExperience: v,
            promotionalRewardCollectedText: w,
            isRental: null != M,
            expiresAt: D,
        }),
        Z = (0, L.aG)({
            product: B,
            onClose: b,
            analyticsLocations: U,
            hasRequiredProductItems: F,
            handleUseNow: q,
            isApplying: J,
            openProfileSettings: j,
        }),
        $ = "6/4";
    switch (B.type) {
        case l.R.NAMEPLATE:
        case l.R.AVATAR_DECORATION:
            $ = "16/9";
            break;
        case l.R.BUNDLE:
        case l.R.PROFILE_EFFECT:
        default:
            $ = "6/4";
    }
    let { confettiColors: X } = (0, A.A)(B.styles),
        tt = P ?? {
            type: "dynamic",
            component: s.Oz7.COLLECTIBLES_PREVIEW,
            aspectRatio: $,
            props: { product: B, forCollectedModal: !0 },
        };
    return (0, i.jsx)(d.f5, {
        value: U,
        children: (0, i.jsxs)("div", {
            ref: H,
            children: [
                (0, i.jsx)(r.Fk, { ref: W, className: T.L, environment: G }),
                (0, i.jsx)(a.ExpressiveModal, {
                    graphic: tt,
                    title: Y,
                    subtitle: K ?? void 0,
                    onClose: b,
                    transitionState: e,
                    actions: Z,
                }),
                null != z
                    ? (0, i.jsx)(I.K, { options: z })
                    : (0, i.jsx)(m.A, {
                          confettiTarget: H.current,
                          confettiCanvas: V,
                          sprites: (0, C.rA)(B.categorySkuId),
                          colors: X?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
