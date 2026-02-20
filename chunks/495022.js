n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    a = n(367622),
    l = n(827734),
    r = n(582754),
    o = n(397927),
    c = n(736653),
    d = n(793574),
    u = n(688810),
    _ = n(720462),
    m = n(206835),
    A = n(976860),
    g = n(780964),
    h = n(358776),
    x = n(840065),
    p = n(102815),
    E = n(112848),
    C = n(149757),
    T = n(652215),
    S = n(355097),
    I = n(985018),
    f = n(574268),
    N = n(64514),
    b = n(121818),
    j = n(288604),
    v = n(163635),
    O = n(345362),
    R = n(509442);
let y = [
    { id: "bestof", label: () => I.intl.string(I.t.q1u7nQ) },
    { id: "appearance", label: () => I.intl.string(I.t.CUnZkZ) },
    { id: "upgrades", label: () => I.intl.string(I.t.KC5q8v) },
    { id: "vip", label: () => I.intl.string(I.t.DjEAcv) },
];
function P(e) {
    let { glowingPerkId: t = null } = e,
        n = (0, c.DP)(),
        P = (0, E.Lh)(),
        L = (0, C.N)(P),
        { analyticsLocations: D } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        G = (0, m.A)({ scrollPosition: S._F.TRY_IT_OUT, analyticsLocations: D }),
        M = (0, s.useCallback)(() => {
            (0, x.openUserSettings)(g.X.APPEARANCE_PANEL, { section: T.nc_.APPEARANCE, analyticsLocations: D });
        }, [D]),
        U = (0, s.useCallback)(() => {
            (0, x.openUserSettings)(g.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                section: T.nc_.GUILD_BOOSTING,
                analyticsLocations: D,
            });
        }, [D]),
        k = (0, s.useCallback)(() => {
            let e = (0, h.WJ)("openCustomAppSettings");
            (0, x.openUserSettings)(e ? g.X.APPEARANCE_IN_APP_ICON : g.X.APPEARANCE_PANEL, {
                section: T.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : S.kq.CUSTOM_APP_ICONS,
                analyticsLocations: D,
            });
        }, [D]),
        V = (0, s.useCallback)(() => {
            (0, A.pX)(T.BVt.COLLECTIBLES_SHOP);
        }, []),
        w = (0, s.useCallback)(() => {
            (0, x.openUserSettings)(g.X.SOUNDBOARD_CATEGORY, {
                section: T.nc_.VOICE,
                subsection: S.MJ,
                analyticsLocations: D,
            });
        }, [D]),
        H = (0, s.useMemo)(
            () => [
                {
                    id: "serverBoosts",
                    title: I.intl.formatToPlainString(I.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                    description: I.intl.formatToPlainString(I.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                    subscriptionRequired: !0,
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: U,
                    primaryAsset: (0, i.jsx)(a.CIt, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "profiles",
                    title: I.intl.string(I.t.xDRab3),
                    description: I.intl.string(I.t.yn6fWA),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: G,
                    primaryAsset: (0, i.jsx)(a.R$P, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "appearance"],
                },
                {
                    id: "hdVideo",
                    title: I.intl.string(I.t["/mQ5gg"]),
                    description: I.intl.string(I.t["7WwAXh"]),
                    primaryAsset: (0, i.jsx)(a.TMU, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "clientThemes",
                    title: I.intl.string(I.t.acc6h6),
                    description: I.intl.formatToPlainString(I.t.WQazjs, { themeCount: 20 }),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: M,
                    primaryAsset: R.A,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: "moreEmojis",
                    title: I.intl.string(I.t.D8vIDT),
                    description: I.intl.string(I.t.DRMecB),
                    primaryAsset: (0, i.jsx)(a.nT5, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "largeUploads",
                    title: I.intl.string(I.t.nL1WZV),
                    description: I.intl.formatToPlainString(I.t.k8LC1w, { maxSizeMb: 500 }),
                    primaryAsset: (0, i.jsx)(a.oYh, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "customAppIcons",
                    title: I.intl.string(I.t.rkb1vA),
                    description: I.intl.string(I.t["1uPk1Z"]),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: k,
                    primaryAsset: j.A,
                    categories: ["appearance"],
                },
                {
                    id: "entranceSounds",
                    title: I.intl.string(I.t.WJfCPi),
                    description: I.intl.string(I.t.liQKJR),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: w,
                    primaryAsset: v.A,
                    categories: ["appearance"],
                },
                {
                    id: "customSounds",
                    title: I.intl.string(I.t["Cu/oFd"]),
                    description: I.intl.string(I.t.czj2aa),
                    primaryAsset: (0, i.jsx)(a.WPL, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: "specialStickers",
                    title: I.intl.string(I.t.MQoVeb),
                    description: I.intl.string(I.t.HGCLZX),
                    primaryAsset: O.A,
                    categories: ["upgrades"],
                },
                {
                    id: "superReactions",
                    title: I.intl.string(I.t.qERvAA),
                    description: I.intl.string(I.t.WkUWzx),
                    primaryAsset: (0, i.jsx)(a.Z8w, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: "videoBackgrounds",
                    title: I.intl.string(I.t.ssVDYQ),
                    description: I.intl.string(I.t.aUSRMa),
                    primaryAsset: (0, r.Mw)(n) ? N : b,
                    categories: ["upgrades"],
                },
                {
                    id: "earlyAccess",
                    title: I.intl.string(I.t["g/KRY6"]),
                    description: I.intl.string(I.t.JzAmJc),
                    primaryAsset: (0, i.jsx)(a.AxI, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: "badge",
                    title: I.intl.string(I.t.Bn3CtB),
                    description: I.intl.string(I.t.n26Vcu),
                    subscriptionRequired: !0,
                    primaryAsset:
                        null != L
                            ? (0, i.jsx)("img", { src: L, alt: "", width: 160 })
                            : (0, i.jsx)(a.vXC, { color: l.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                    categories: ["vip"],
                },
                {
                    id: "specialMemberPricing",
                    title: I.intl.string(I.t["MTD+7w"]),
                    description: I.intl.string(I.t.Bhs0s6),
                    ctaText: I.intl.string(I.t.dBJVnZ),
                    onCtaClick: V,
                    primaryAsset: (0, i.jsx)(a.D8b, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: "permadecos",
                    title: I.intl.string(I.t.L14NZN),
                    description: I.intl.string(I.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(a.u7P, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
            ],
            [n, L, G, M, U, k, V, w],
        ),
        B = null != t ? H.find((e) => e?.id === t) : null,
        [Y, F] = (0, s.useState)(B?.categories[0] ?? "bestof"),
        z = (0, s.useMemo)(() => H.filter((e) => null != e && e.categories.includes(Y)), [H, Y]);
    return (0, i.jsxs)("div", {
        className: f.uW,
        children: [
            (0, i.jsx)(o.Heading, { variant: "display-sm", className: f.R_, children: I.intl.string(I.t["Uh3+CA"]) }),
            (0, i.jsx)(o.VQ0, {
                type: "top-pill",
                look: "custom",
                selectedItem: Y,
                onItemSelect: F,
                className: f.Lq,
                "aria-label": I.intl.string(I.t["Uh3+CA"]),
                children: y.map((e) =>
                    (0, i.jsx)(o.VQ0.Item, { id: e.id, className: f.IC, children: e.label() }, e.id),
                ),
            }),
            (0, i.jsx)(
                _.A,
                {
                    gap: 20,
                    children: z.map((e) => {
                        if (null != e)
                            return (0, i.jsx)(
                                "div",
                                { id: e.id, className: f.Nr, children: (0, i.jsx)(p.S, { ...e, glowing: t === e.id }) },
                                e.id,
                            );
                    }),
                },
                Y,
            ),
        ],
    });
}
