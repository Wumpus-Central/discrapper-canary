s.d(t, { default: () => w });
var a = s(627968),
    r = s(64700),
    l = s(106778),
    n = s(575593),
    i = s(772707),
    o = s(116833),
    c = s(793574),
    d = s(688810),
    u = s(206835),
    p = s(212739),
    b = s(428262),
    h = s(298072),
    C = s(993408);
let E = (0, s(945810).mj)({
    name: "2026-05-orbs-purchase-upsell-banner",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var m = s(320447),
    f = s(450481),
    v = s(442759),
    x = s(953150),
    A = s(623373),
    L = s(660653),
    R = s(536572),
    g = s(524246),
    j = s(534514),
    k = s(834730),
    y = s(821609),
    O = s(403581),
    T = s(532794),
    I = s(788868),
    N = s(939052);
let _ = () => {
    let { analyticsLocations: e } = (0, d.Ay)(),
        t = r.useRef(null);
    return (0, a.jsxs)("div", {
        className: N.kL,
        children: [
            (0, a.jsx)("div", {
                className: N.LG,
                "aria-hidden": !0,
                role: "presentation",
                children: (0, a.jsx)("img", { src: "/assets/54013366f9df47f1.svg", className: N.Qw, alt: "" }),
            }),
            (0, a.jsxs)("div", {
                className: N.rf,
                children: [
                    (0, a.jsx)(j.D, { variant: "heading-md/bold", children: "Get Orbs on repeat" }),
                    (0, a.jsxs)(k.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: [
                            "Nitro keeps ",
                            250,
                            " Orbs rolling into your balance every month. Treat yourself accordingly.",
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(y.$, {
                buttonRef: t,
                variant: "secondary",
                icon: O.t,
                text: "Get Nitro",
                onClick: () => {
                    (0, T.A)({ subscriptionTier: I.pe.TIER_2, analyticsLocations: e, returnRef: t });
                },
            }),
        ],
    });
};
var F = s(14368),
    G = s(213530),
    D = s(184264),
    M = s(758836),
    P = s(375708),
    S = s(700797);
let w = (e) => {
    let {
            transitionState: t,
            product: s,
            onClose: r,
            analyticsLocations: j,
            overrideTitle: k,
            overrideDescription: y,
            shouldShowPromotionalExperience: O,
            purchaseType: T = M.gs.FIAT,
            overrideGraphic: I,
            overrideGradientColor: N,
        } = e,
        w = (0, h.Q)(s),
        V = (0, A.rb)(s, w),
        { analyticsLocations: B } = (0, d.Ay)([...j, c.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: $ } = ((e) => {
            let {
                    firstProfileEffect: t,
                    firstAvatarDecoration: s,
                    firstNameplate: a,
                    firstProfileFrame: r,
                } = (0, v.f5)(e),
                l = (0, C.aw)(e);
            return {
                firstAvatarDecoration: s,
                firstProfileEffect: t,
                firstNameplate: a,
                isBundle: l,
                firstProfileFrame: r,
                hasRequiredProductItems: l ? (0, L.uh)(e) : null != s || null != t || null != a || null != r,
            };
        })(V),
        q = (0, u.A)({ analyticsLocations: B }),
        K = P.intl.string(P.t.eZrmtq),
        {
            environment: Q,
            modalRef: H,
            confettiCanvas: U,
            setConfettiCanvas: W,
            customConfettiDisplayOptions: Z,
        } = (0, D.mO)(V, T),
        z = (0, R.VG)(V);
    (0, D.$V)(V, B);
    let { handleUseNow: J, isApplying: X } = (0, f.p)({ product: V, onSuccess: r, onError: r }),
        Y = (0, D.$k)({
            product: V,
            overrideTitle: k,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: O,
            productName: z,
        }),
        ee = (0, D.v8)({
            product: V,
            overrideDescription: y,
            productName: z,
            shouldShowPromotionalExperience: O,
            promotionalRewardCollectedText: K,
        }),
        et = (0, D.aG)({
            product: V,
            onClose: r,
            analyticsLocations: B,
            hasRequiredProductItems: $,
            handleUseNow: J,
            isApplying: X,
            openProfileSettings: q,
        }),
        { enabled: es } = (0, m.P)("CollectiblesCollectedModal"),
        ea = (0, b.nK)(),
        er = (0, p.O)(),
        el = E.useConfig({ location: "CollectiblesCollectedModal" }).enabled && T === M.gs.ORB && !ea && !er,
        en = "6/4";
    switch (V.type) {
        case n.R.NAMEPLATE:
        case n.R.AVATAR_DECORATION:
            en = "16/9";
            break;
        case n.R.BUNDLE:
            en = es ? "16/9" : "6/4";
            break;
        case n.R.PROFILE_EFFECT:
        case n.R.PROFILE_FRAME:
        default:
            en = "6/4";
    }
    let { confettiColors: ei } = (0, x.A)(V.styles),
        eo = I ?? {
            type: "dynamic",
            component: o.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: en,
            props: { product: V, forCollectedModal: !0 },
        };
    return (0, a.jsx)(d.f5, {
        value: B,
        children: (0, a.jsxs)("div", {
            ref: H,
            children: [
                (0, a.jsx)(l.Fk, { ref: W, className: S.L, environment: Q }),
                (0, a.jsx)(i.k, {
                    graphic: eo,
                    title: Y,
                    subtitle: ee ?? void 0,
                    onClose: r,
                    transitionState: t,
                    actions: et,
                    gradientColor: N ?? void 0,
                    children: el && (0, a.jsx)(_, {}),
                }),
                null != Z
                    ? (0, a.jsx)(G.K, { options: Z })
                    : (0, a.jsx)(g.A, {
                          confettiTarget: H.current,
                          confettiCanvas: U,
                          sprites: (0, F.rA)(V.categorySkuId),
                          colors: ei?.map((e) => e.toHexString()),
                      }),
            ],
        }),
    });
};
