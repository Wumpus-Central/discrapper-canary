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
    R = n(623373),
    O = n(660653),
    I = n(536572),
    L = n(524246),
    _ = n(14368),
    m = n(213530),
    C = n(961883),
    y = n(758836),
    b = n(985018),
    T = n(700797);
let g = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: g,
            analyticsLocations: S,
            overrideTitle: k,
            overrideDescription: v,
            shouldShowPromotionalExperience: M,
            purchaseType: P = y.gs.FIAT,
            overrideGraphic: N,
            overrideGradientColor: D,
        } = t,
        x = (0, c.Q)(n),
        B = (0, R.rb)(n, x),
        { analyticsLocations: F } = (0, u.Ay)([...S, d.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: U } = ((t) => {
            let {
                    firstProfileEffect: e,
                    firstAvatarDecoration: n,
                    firstNameplate: i,
                    firstProfileFrame: r,
                } = (0, h.f5)(t),
                a = (0, p.aw)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: i,
                isBundle: a,
                firstProfileFrame: r,
                hasRequiredProductItems: a ? (0, O.uh)(t) : null != n || null != e || null != i || null != r,
            };
        })(B),
        w = (0, o.A)({ analyticsLocations: F }),
        j = b.intl.string(b.t.eZrmtq),
        {
            environment: V,
            modalRef: G,
            confettiCanvas: H,
            setConfettiCanvas: W,
            customConfettiDisplayOptions: z,
        } = (0, C.mO)(B, P),
        K = (0, I.VG)(B);
    (0, C.$V)(B, F);
    let { handleUseNow: Q, isApplying: Y } = (0, E.p)({ product: B, onSuccess: g, onError: g }),
        q = (0, C.$k)({
            product: B,
            overrideTitle: k,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: M,
            productName: K,
        }),
        J = (0, C.v8)({
            product: B,
            overrideDescription: v,
            productName: K,
            shouldShowPromotionalExperience: M,
            promotionalRewardCollectedText: j,
        }),
        Z = (0, C.aG)({
            product: B,
            onClose: g,
            analyticsLocations: F,
            hasRequiredProductItems: U,
            handleUseNow: Q,
            isApplying: Y,
            openProfileSettings: w,
        }),
        { enabled: $ } = (0, f.P)("CollectiblesCollectedModal"),
        X = "6/4";
    switch (B.type) {
        case a.R.NAMEPLATE:
        case a.R.AVATAR_DECORATION:
            X = "16/9";
            break;
        case a.R.BUNDLE:
            X = $ ? "16/9" : "6/4";
            break;
        case a.R.PROFILE_EFFECT:
        default:
            X = "6/4";
    }
    let { confettiColors: tt } = (0, A.A)(B.styles),
        te = N ?? {
            type: "dynamic",
            component: s.Oz7.COLLECTIBLES_PREVIEW,
            aspectRatio: X,
            props: { product: B, forCollectedModal: !0 },
        };
    return (0, i.jsx)(u.f5, {
        value: F,
        children: (0, i.jsxs)("div", {
            ref: G,
            children: [
                (0, i.jsx)(r.Fk, { ref: W, className: T.L, environment: V }),
                (0, i.jsx)(l.ExpressiveModal, {
                    graphic: te,
                    title: q,
                    subtitle: J ?? void 0,
                    onClose: g,
                    transitionState: e,
                    actions: Z,
                    gradientColor: D ?? void 0,
                }),
                null != z
                    ? (0, i.jsx)(m.K, { options: z })
                    : (0, i.jsx)(L.A, {
                          confettiTarget: G.current,
                          confettiCanvas: H,
                          sprites: (0, _.rA)(B.categorySkuId),
                          colors: tt?.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
