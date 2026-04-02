n.d(e, { default: () => g });
var i = n(627968);
n(64700);
var r = n(106778),
    a = n(575593),
    l = n(158954),
    s = n(397927),
    d = n(793574),
    u = n(688810),
    o = n(206835),
    c = n(298072),
    p = n(993408),
    f = n(320447),
    E = n(450481),
    h = n(442759),
    A = n(306710),
    O = n(623373),
    R = n(660653),
    I = n(536572),
    _ = n(524246),
    C = n(14368),
    L = n(213530),
    m = n(961883),
    b = n(758836),
    T = n(985018),
    y = n(7102);
let g = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: g,
            analyticsLocations: k,
            overrideTitle: S,
            overrideDescription: v,
            shouldShowPromotionalExperience: M,
            purchaseType: P = b.gs.FIAT,
            overrideGraphic: N,
        } = t,
        D = (0, c.Q)(n),
        x = (0, O.rb)(n, D),
        { analyticsLocations: B } = (0, u.Ay)([...k, d.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: F } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: i } = (0, h.f5)(t),
                r = (0, p.aw)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: i,
                isBundle: r,
                hasRequiredProductItems: r ? (0, R.uh)(t) : null != n || null != e || null != i,
            };
        })(x),
        U = (0, o.A)({ analyticsLocations: B }),
        w = T.intl.string(T.t.eZrmtq),
        {
            environment: V,
            modalRef: j,
            confettiCanvas: G,
            setConfettiCanvas: H,
            customConfettiDisplayOptions: W,
        } = (0, m.mO)(x, P),
        z = (0, I.VG)(x);
    (0, m.$V)(x, B);
    let { handleUseNow: K, isApplying: Q } = (0, E.p)({ product: x, onSuccess: g, onError: g }),
        Y = (0, m.$k)({
            product: x,
            overrideTitle: S,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: M,
            productName: z,
        }),
        q = (0, m.v8)({
            product: x,
            overrideDescription: v,
            productName: z,
            shouldShowPromotionalExperience: M,
            promotionalRewardCollectedText: w,
        }),
        J = (0, m.aG)({
            product: x,
            onClose: g,
            analyticsLocations: B,
            hasRequiredProductItems: F,
            handleUseNow: K,
            isApplying: Q,
            openProfileSettings: U,
        }),
        { enabled: Z } = (0, f.P)("CollectiblesCollectedModal"),
        $ = "6/4";
    switch (x.type) {
        case a.R.NAMEPLATE:
        case a.R.AVATAR_DECORATION:
            $ = "16/9";
            break;
        case a.R.BUNDLE:
            $ = Z ? "16/9" : "6/4";
            break;
        case a.R.PROFILE_EFFECT:
        default:
            $ = "6/4";
    }
    let { confettiColors: X } = (0, A.A)(x.styles),
        tt = N ?? {
            type: "dynamic",
            component: s.Oz7.COLLECTIBLES_PREVIEW,
            aspectRatio: $,
            props: { product: x, forCollectedModal: !0 },
        };
    return (0, i.jsx)(u.f5, {
        value: B,
        children: (0, i.jsxs)("div", {
            ref: j,
            children: [
                (0, i.jsx)(r.Fk, { ref: H, className: y.L, environment: V }),
                (0, i.jsx)(l.ExpressiveModal, {
                    graphic: tt,
                    title: Y,
                    subtitle: q ?? void 0,
                    onClose: g,
                    transitionState: e,
                    actions: J,
                }),
                null != W
                    ? (0, i.jsx)(L.K, { options: W })
                    : (0, i.jsx)(_.A, {
                          confettiTarget: j.current,
                          confettiCanvas: G,
                          sprites: (0, C.rA)(x.categorySkuId),
                          colors: X?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
