s.d(t, { default: () => G });
var n = s(627968),
    a = s(64700),
    i = s(106778),
    r = s(575593),
    l = s(772707),
    o = s(116833),
    c = s(793574),
    d = s(688810),
    u = s(206835),
    p = s(212739),
    m = s(428262),
    f = s(298072),
    h = s(993408);
let x = (0, s(945810).mj)({
    name: "2026-05-orbs-purchase-upsell-banner",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var E = s(450481),
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
                size: "sm",
                variant: "secondary",
                icon: k.t,
                text: I.intl.string(I.t["8x0jKT"]),
                onClick: function () {
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
        G = (0, f.Q)(s),
        M = (0, A.rb)(s, G),
        { analyticsLocations: V } = (0, d.Ay)([...R, c.A.COLLECTIBLES_COLLECTED_MODAL]),
        { hasRequiredProductItems: B } = (function (e) {
            let {
                    firstProfileEffect: t,
                    firstAvatarDecoration: s,
                    firstNameplate: n,
                    firstProfileFrame: a,
                } = (0, C.f5)(e),
                i = (0, h.aw)(e);
            return {
                firstAvatarDecoration: s,
                firstProfileEffect: t,
                firstNameplate: n,
                isBundle: i,
                firstProfileFrame: a,
                hasRequiredProductItems: i ? (0, b.uh)(e) : null != s || null != t || null != n || null != a,
            };
        })(M),
        K = (0, u.A)({ analyticsLocations: V }),
        $ = I.intl.string(I.t.eZrmtq),
        {
            environment: q,
            modalRef: Q,
            confettiCanvas: z,
            setConfettiCanvas: H,
            customConfettiDisplayOptions: U,
        } = (0, D.mO)(M, O),
        W = (0, g.VG)(M);
    (0, D.$V)(M, V);
    let { handleUseNow: Z, isApplying: J, canUseNow: X } = (0, E.p)({ product: M, onSuccess: a, onError: a }),
        Y = (0, D.$k)({
            product: M,
            overrideTitle: j,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: k,
            productName: W,
        }),
        ee = (0, D.v8)({
            product: M,
            overrideDescription: T,
            productName: W,
            shouldShowPromotionalExperience: k,
            promotionalRewardCollectedText: $,
        }),
        et = (0, D.aG)({
            product: M,
            onClose: a,
            analyticsLocations: V,
            hasRequiredProductItems: B,
            handleUseNow: Z,
            isApplying: J,
            canUseNow: X,
            openProfileSettings: K,
        }),
        es = (0, m.nK)(),
        en = (0, p.O)(),
        ea = x.useConfig({ location: "CollectiblesCollectedModal" }).enabled && O === S.gs.ORB && !es && !en,
        ei = "6/4";
    switch (M.type) {
        case r.R.NAMEPLATE:
        case r.R.AVATAR_DECORATION:
        case r.R.BUNDLE:
            ei = "16/9";
            break;
        case r.R.PROFILE_EFFECT:
        case r.R.PROFILE_FRAME:
        default:
            ei = "6/4";
    }
    let { confettiColors: er } = (0, v.A)(M.styles),
        el = y ?? {
            type: "dynamic",
            component: o.DynamicGraphicComponent.COLLECTIBLES_PREVIEW,
            aspectRatio: ei,
            props: { product: M, forCollectedModal: !0 },
        };
    return (0, n.jsx)(d.f5, {
        value: V,
        children: (0, n.jsxs)("div", {
            ref: Q,
            children: [
                (0, n.jsx)(i.Fk, { ref: H, className: w.L, environment: q }),
                (0, n.jsx)(l.k, {
                    graphic: el,
                    title: Y,
                    subtitle: ee ?? void 0,
                    onClose: a,
                    transitionState: t,
                    actions: et,
                    gradientColor: _ ?? void 0,
                    children: ea && (0, n.jsx)(N, {}),
                }),
                null != U
                    ? (0, n.jsx)(P.K, { options: U })
                    : (0, n.jsx)(L.A, {
                          confettiTarget: Q.current,
                          confettiCanvas: z,
                          sprites: (0, F.rA)(M.categorySkuId),
                          colors: er?.map((e) => e.toHexString()),
                      }),
            ],
        }),
    });
};
