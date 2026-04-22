r.d(e, { default: () => T });
var o = r(627968);
r(64700);
var l = r(106778),
    n = r(575593),
    a = r(772707),
    i = r(116833),
    s = r(793574),
    u = r(688810),
    d = r(206835),
    c = r(298072),
    E = r(993408),
    _ = r(320447),
    p = r(450481),
    f = r(442759),
    h = r(306710),
    C = r(623373),
    b = r(660653),
    I = r(536572),
    R = r(524246),
    S = r(14368),
    y = r(213530),
    g = r(961883),
    L = r(758836),
    v = r(985018),
    A = r(700797);
let T = (t) => {
    let {
            transitionState: e,
            product: r,
            onClose: T,
            analyticsLocations: m,
            overrideTitle: k,
            overrideDescription: P,
            shouldShowPromotionalExperience: N,
            purchaseType: O = L.gs.FIAT,
            overrideGraphic: G,
            overrideGradientColor: U,
        } = t,
        F = (0, c.Q)(r),
        D = (0, C.rb)(r, F),
        { analyticsLocations: x } = (0, u.Ay)([...m, s.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: M } = ((t) => {
            let {
                    firstProfileEffect: e,
                    firstAvatarDecoration: r,
                    firstNameplate: o,
                    firstProfileFrame: l,
                } = (0, f.f5)(t),
                n = (0, E.aw)(t);
            return {
                firstAvatarDecoration: r,
                firstProfileEffect: e,
                firstNameplate: o,
                isBundle: n,
                firstProfileFrame: l,
                hasRequiredProductItems: n ? (0, b.uh)(t) : null != r || null != e || null != o || null != l,
            };
        })(D),
        w = (0, d.A)({ analyticsLocations: x }),
        B = v.intl.string(v.t.eZrmtq),
        {
            environment: j,
            modalRef: V,
            confettiCanvas: H,
            setConfettiCanvas: q,
            customConfettiDisplayOptions: W,
        } = (0, g.mO)(D, O),
        J = (0, I.VG)(D);
    (0, g.$V)(D, x);
    let { handleUseNow: X, isApplying: K } = (0, p.p)({ product: D, onSuccess: T, onError: T }),
        $ = (0, g.$k)({
            product: D,
            overrideTitle: k,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: N,
            productName: J,
        }),
        Q = (0, g.v8)({
            product: D,
            overrideDescription: P,
            productName: J,
            shouldShowPromotionalExperience: N,
            promotionalRewardCollectedText: B,
        }),
        Y = (0, g.aG)({
            product: D,
            onClose: T,
            analyticsLocations: x,
            hasRequiredProductItems: M,
            handleUseNow: X,
            isApplying: K,
            openProfileSettings: w,
        }),
        { enabled: Z } = (0, _.P)("CollectiblesCollectedModal"),
        z = "6/4";
    switch (D.type) {
        case n.R.NAMEPLATE:
        case n.R.AVATAR_DECORATION:
            z = "16/9";
            break;
        case n.R.BUNDLE:
            z = Z ? "16/9" : "6/4";
            break;
        case n.R.PROFILE_EFFECT:
        case n.R.PROFILE_FRAME:
        default:
            z = "6/4";
    }
    let { confettiColors: tt } = (0, h.A)(D.styles),
        te = G ?? {
            type: "dynamic",
            component: i.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: z,
            props: { product: D, forCollectedModal: !0 },
        };
    return (0, o.jsx)(u.f5, {
        value: x,
        children: (0, o.jsxs)("div", {
            ref: V,
            children: [
                (0, o.jsx)(l.Fk, { ref: q, className: A.L, environment: j }),
                (0, o.jsx)(a.k, {
                    graphic: te,
                    title: $,
                    subtitle: Q ?? void 0,
                    onClose: T,
                    transitionState: e,
                    actions: Y,
                    gradientColor: U ?? void 0,
                }),
                null != W
                    ? (0, o.jsx)(y.K, { options: W })
                    : (0, o.jsx)(R.A, {
                          confettiTarget: V.current,
                          confettiCanvas: H,
                          sprites: (0, S.rA)(D.categorySkuId),
                          colors: tt?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
