s.d(t, { default: () => G });
var n = s(627968),
    a = s(64700),
    r = s(106778),
    l = s(575593),
    i = s(772707),
    o = s(116833),
    c = s(793574),
    d = s(688810),
    u = s(206835),
    p = s(212739),
    h = s(428262),
    m = s(298072),
    x = s(993408);
let E = (0, s(945810).mj)({
    name: "2026-05-orbs-purchase-upsell-banner",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = s(450481),
    C = s(442759),
    v = s(953150),
    A = s(623373),
    b = s(660653),
    g = s(536572),
    L = s(524246),
    R = s(534514),
    j = s(834730),
    T = s(821609),
    k = s(403581),
    O = s(532794),
    y = s(788868),
    I = s(375708),
    _ = s(939052);
let N = () => {
    let { analyticsLocations: e } = (0, d.Ay)(),
        t = a.useRef(null);
    return (0, n.jsxs)("div", {
        className: _.kL,
        children: [
            (0, n.jsx)("div", {
                className: _.LG,
                "aria-hidden": !0,
                role: "presentation",
                children: (0, n.jsx)("img", { src: "/assets/54013366f9df47f1.svg", className: _.Qw, alt: "" }),
            }),
            (0, n.jsxs)("div", {
                className: _.rf,
                children: [
                    (0, n.jsx)(R.D, { variant: "heading-md/bold", children: I.intl.string(I.t.xPfigP) }),
                    (0, n.jsx)(j.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        children: I.intl.format(I.t["7igrTt"], { monthlyOrbsAmount: 250 }),
                    }),
                ],
            }),
            (0, n.jsx)(T.$, {
                buttonRef: t,
                variant: "secondary",
                icon: k.t,
                text: I.intl.string(I.t["8x0jKT"]),
                onClick: () => {
                    (0, O.A)({ subscriptionTier: y.pe.TIER_2, analyticsLocations: e, returnRef: t });
                },
            }),
        ],
    });
};
var F = s(14368),
    P = s(213530),
    D = s(184264),
    S = s(758836),
    w = s(700797);
let G = (e) => {
    let {
            transitionState: t,
            product: s,
            onClose: a,
            analyticsLocations: R,
            overrideTitle: j,
            overrideDescription: T,
            shouldShowPromotionalExperience: k,
            purchaseType: O = S.gs.FIAT,
            overrideGraphic: y,
            overrideGradientColor: _,
        } = e,
        G = (0, m.Q)(s),
        M = (0, A.rb)(s, G),
        { analyticsLocations: V } = (0, d.Ay)([...R, c.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: B } = ((e) => {
            let {
                    firstProfileEffect: t,
                    firstAvatarDecoration: s,
                    firstNameplate: n,
                    firstProfileFrame: a,
                } = (0, C.f5)(e),
                r = (0, x.aw)(e);
            return {
                firstAvatarDecoration: s,
                firstProfileEffect: t,
                firstNameplate: n,
                isBundle: r,
                firstProfileFrame: a,
                hasRequiredProductItems: r ? (0, b.uh)(e) : null != s || null != t || null != n || null != a,
            };
        })(M),
        K = (0, u.A)({ analyticsLocations: V }),
        $ = I.intl.string(I.t.eZrmtq),
        {
            environment: q,
            modalRef: Q,
            confettiCanvas: H,
            setConfettiCanvas: U,
            customConfettiDisplayOptions: W,
        } = (0, D.mO)(M, O),
        Z = (0, g.VG)(M);
    (0, D.$V)(M, V);
    let { handleUseNow: z, isApplying: J } = (0, f.p)({ product: M, onSuccess: a, onError: a }),
        X = (0, D.$k)({
            product: M,
            overrideTitle: j,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: k,
            productName: Z,
        }),
        Y = (0, D.v8)({
            product: M,
            overrideDescription: T,
            productName: Z,
            shouldShowPromotionalExperience: k,
            promotionalRewardCollectedText: $,
        }),
        ee = (0, D.aG)({
            product: M,
            onClose: a,
            analyticsLocations: V,
            hasRequiredProductItems: B,
            handleUseNow: z,
            isApplying: J,
            openProfileSettings: K,
        }),
        et = (0, h.nK)(),
        es = (0, p.O)(),
        en = E.useConfig({ location: "CollectiblesCollectedModal" }).enabled && O === S.gs.ORB && !et && !es,
        ea = "6/4";
    switch (M.type) {
        case l.R.NAMEPLATE:
        case l.R.AVATAR_DECORATION:
        case l.R.BUNDLE:
            ea = "16/9";
            break;
        case l.R.PROFILE_EFFECT:
        case l.R.PROFILE_FRAME:
        default:
            ea = "6/4";
    }
    let { confettiColors: er } = (0, v.A)(M.styles),
        el = y ?? {
            type: "dynamic",
            component: o.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: ea,
            props: { product: M, forCollectedModal: !0 },
        };
    return (0, n.jsx)(d.f5, {
        value: V,
        children: (0, n.jsxs)("div", {
            ref: Q,
            children: [
                (0, n.jsx)(r.Fk, { ref: U, className: w.L, environment: q }),
                (0, n.jsx)(i.k, {
                    graphic: el,
                    title: X,
                    subtitle: Y ?? void 0,
                    onClose: a,
                    transitionState: t,
                    actions: ee,
                    gradientColor: _ ?? void 0,
                    children: en && (0, n.jsx)(N, {}),
                }),
                null != W
                    ? (0, n.jsx)(P.K, { options: W })
                    : (0, n.jsx)(L.A, {
                          confettiTarget: Q.current,
                          confettiCanvas: H,
                          sprites: (0, F.rA)(M.categorySkuId),
                          colors: er?.map((e) => e.toHexString()),
                      }),
            ],
        }),
    });
};
