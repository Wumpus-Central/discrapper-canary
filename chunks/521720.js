s.d(t, { default: () => M });
var a = s(627968),
    r = s(64700),
    n = s(106778),
    l = s(575593),
    i = s(772707),
    o = s(116833),
    c = s(793574),
    d = s(688810),
    u = s(206835),
    p = s(212739),
    h = s(428262),
    E = s(298072),
    m = s(993408);
let C = (0, s(945810).mj)({
    name: "2026-05-orbs-purchase-upsell-banner",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var b = s(450481),
    f = s(442759),
    v = s(953150),
    x = s(623373),
    A = s(660653),
    L = s(536572),
    R = s(524246),
    g = s(534514),
    j = s(834730),
    y = s(821609),
    k = s(403581),
    O = s(532794),
    T = s(788868),
    I = s(939052);
let N = () => {
    let { analyticsLocations: e } = (0, d.Ay)(),
        t = r.useRef(null);
    return (0, a.jsxs)("div", {
        className: I.kL,
        children: [
            (0, a.jsx)("div", {
                className: I.LG,
                "aria-hidden": !0,
                role: "presentation",
                children: (0, a.jsx)("img", { src: "/assets/54013366f9df47f1.svg", className: I.Qw, alt: "" }),
            }),
            (0, a.jsxs)("div", {
                className: I.rf,
                children: [
                    (0, a.jsx)(g.D, { variant: "heading-md/bold", children: "Get Orbs on repeat" }),
                    (0, a.jsxs)(j.E, {
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
                icon: k.t,
                text: "Get Nitro",
                onClick: () => {
                    (0, O.A)({ subscriptionTier: T.pe.TIER_2, analyticsLocations: e, returnRef: t });
                },
            }),
        ],
    });
};
var _ = s(14368),
    F = s(213530),
    G = s(184264),
    D = s(758836),
    S = s(375708),
    w = s(700797);
let M = (e) => {
    let {
            transitionState: t,
            product: s,
            onClose: r,
            analyticsLocations: g,
            overrideTitle: j,
            overrideDescription: y,
            shouldShowPromotionalExperience: k,
            purchaseType: O = D.gs.FIAT,
            overrideGraphic: T,
            overrideGradientColor: I,
        } = e,
        M = (0, E.Q)(s),
        P = (0, x.rb)(s, M),
        { analyticsLocations: V } = (0, d.Ay)([...g, c.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: B } = ((e) => {
            let {
                    firstProfileEffect: t,
                    firstAvatarDecoration: s,
                    firstNameplate: a,
                    firstProfileFrame: r,
                } = (0, f.f5)(e),
                n = (0, m.aw)(e);
            return {
                firstAvatarDecoration: s,
                firstProfileEffect: t,
                firstNameplate: a,
                isBundle: n,
                firstProfileFrame: r,
                hasRequiredProductItems: n ? (0, A.uh)(e) : null != s || null != t || null != a || null != r,
            };
        })(P),
        $ = (0, u.A)({ analyticsLocations: V }),
        q = S.intl.string(S.t.eZrmtq),
        {
            environment: K,
            modalRef: Q,
            confettiCanvas: H,
            setConfettiCanvas: U,
            customConfettiDisplayOptions: W,
        } = (0, G.mO)(P, O),
        Z = (0, L.VG)(P);
    (0, G.$V)(P, V);
    let { handleUseNow: z, isApplying: J } = (0, b.p)({ product: P, onSuccess: r, onError: r }),
        X = (0, G.$k)({
            product: P,
            overrideTitle: j,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: k,
            productName: Z,
        }),
        Y = (0, G.v8)({
            product: P,
            overrideDescription: y,
            productName: Z,
            shouldShowPromotionalExperience: k,
            promotionalRewardCollectedText: q,
        }),
        ee = (0, G.aG)({
            product: P,
            onClose: r,
            analyticsLocations: V,
            hasRequiredProductItems: B,
            handleUseNow: z,
            isApplying: J,
            openProfileSettings: $,
        }),
        et = (0, h.nK)(),
        es = (0, p.O)(),
        ea = C.useConfig({ location: "CollectiblesCollectedModal" }).enabled && O === D.gs.ORB && !et && !es,
        er = "6/4";
    switch (P.type) {
        case l.R.NAMEPLATE:
        case l.R.AVATAR_DECORATION:
        case l.R.BUNDLE:
            er = "16/9";
            break;
        case l.R.PROFILE_EFFECT:
        case l.R.PROFILE_FRAME:
        default:
            er = "6/4";
    }
    let { confettiColors: en } = (0, v.A)(P.styles),
        el = T ?? {
            type: "dynamic",
            component: o.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: er,
            props: { product: P, forCollectedModal: !0 },
        };
    return (0, a.jsx)(d.f5, {
        value: V,
        children: (0, a.jsxs)("div", {
            ref: Q,
            children: [
                (0, a.jsx)(n.Fk, { ref: U, className: w.L, environment: K }),
                (0, a.jsx)(i.k, {
                    graphic: el,
                    title: X,
                    subtitle: Y ?? void 0,
                    onClose: r,
                    transitionState: t,
                    actions: ee,
                    gradientColor: I ?? void 0,
                    children: ea && (0, a.jsx)(N, {}),
                }),
                null != W
                    ? (0, a.jsx)(F.K, { options: W })
                    : (0, a.jsx)(R.A, {
                          confettiTarget: Q.current,
                          confettiCanvas: H,
                          sprites: (0, _.rA)(P.categorySkuId),
                          colors: en?.map((e) => e.toHexString()),
                      }),
            ],
        }),
    });
};
