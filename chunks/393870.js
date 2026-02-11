n.d(e, { default: () => b });
var i = n(627968);
n(64700);
var r = n(106778),
    a = n(575593),
    l = n(158954),
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
    C = n(524246),
    _ = n(14368),
    m = n(213530),
    I = n(961883),
    L = n(758836),
    y = n(985018),
    T = n(290964);
let b = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: b,
            analyticsLocations: k,
            overrideTitle: S,
            overrideDescription: g,
            shouldShowPromotionalExperience: v,
            purchaseType: P = L.gs.FIAT,
            overrideGraphic: N,
        } = t,
        M = (0, c.Q)(n),
        D = (0, O.rb)(n, M),
        { analyticsLocations: B } = (0, d.Ay)([...k, u.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: x } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: i } = (0, E.f5)(t),
                r = (0, p.aw)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: i,
                isBundle: r,
                hasRequiredProductItems: r ? (0, R.uh)(t) : null != n || null != e || null != i,
            };
        })(D),
        U = (0, o.A)({ analyticsLocations: B }),
        F = y.intl.string(y.t.eZrmtq),
        {
            environment: j,
            modalRef: w,
            confettiCanvas: V,
            setConfettiCanvas: G,
            customConfettiDisplayOptions: H,
        } = (0, I.mO)(D, P),
        W = (0, h.o7)(D);
    (0, I.$V)(D, B);
    let { handleUseNow: z, isApplying: q } = (0, f.p)({ product: D, onSuccess: b, onError: b }),
        J = (0, I.$k)({
            product: D,
            overrideTitle: S,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: v,
            productName: W,
        }),
        Q = (0, I.v8)({
            product: D,
            overrideDescription: g,
            productName: W,
            shouldShowPromotionalExperience: v,
            promotionalRewardCollectedText: F,
        }),
        K = (0, I.aG)({
            product: D,
            onClose: b,
            analyticsLocations: B,
            hasRequiredProductItems: x,
            handleUseNow: z,
            isApplying: q,
            openProfileSettings: U,
        }),
        Y = "6/4";
    switch (D.type) {
        case a.R.NAMEPLATE:
        case a.R.AVATAR_DECORATION:
            Y = "16/9";
            break;
        case a.R.BUNDLE:
        case a.R.PROFILE_EFFECT:
        default:
            Y = "6/4";
    }
    let { confettiColors: Z } = (0, A.A)(D.styles),
        $ = N ?? {
            type: "dynamic",
            component: s.Oz7.COLLECTIBLES_PREVIEW,
            aspectRatio: Y,
            props: { product: D, forCollectedModal: !0 },
        };
    return (0, i.jsx)(d.f5, {
        value: B,
        children: (0, i.jsxs)("div", {
            ref: w,
            children: [
                (0, i.jsx)(r.Fk, { ref: G, className: T.L, environment: j }),
                (0, i.jsx)(l.ExpressiveModal, {
                    graphic: $,
                    title: J,
                    subtitle: Q ?? void 0,
                    onClose: b,
                    transitionState: e,
                    actions: K,
                }),
                null != H
                    ? (0, i.jsx)(m.K, { options: H })
                    : (0, i.jsx)(C.A, {
                          confettiTarget: w.current,
                          confettiCanvas: V,
                          sprites: (0, _.rA)(D.categorySkuId),
                          colors: Z?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
