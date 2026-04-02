n.d(t, { Ay: () => M, jW: () => D, w1: () => G });
var i,
    s = n(627968),
    l = n(64700),
    a = n(367622),
    r = n(827734),
    o = n(582754),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    m = n(259065),
    g = n(206835),
    _ = n(976860),
    x = n(591179),
    A = n(462463),
    h = n(780964),
    p = n(358776),
    T = n(840065),
    f = n(112848),
    S = n(149757),
    E = n(920050),
    b = n(189024),
    C = n(652215),
    N = n(355097),
    v = n(985018),
    I = n(64514),
    j = n(121818),
    y = n(419455),
    O = n(288604),
    R = n(163635),
    P = n(345362),
    L = n(509442),
    D =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let G = [
    { id: "bestof", label: () => v.intl.string(v.t.q1u7nQ) },
    { id: "appearance", label: () => v.intl.string(v.t.CUnZkZ) },
    { id: "upgrades", label: () => v.intl.string(v.t.KC5q8v) },
    { id: "vip", label: () => v.intl.string(v.t.DjEAcv) },
];
function M() {
    let e = (0, d.DP)(),
        t = (0, x.X)("useFavoritesPerkCards"),
        n = (0, f.Lh)(),
        i = (0, S.N)(n)?.standard ?? null,
        { analyticsLocations: D } = (0, u.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD),
        G = (0, g.A)({ scrollPosition: N._F.TRY_IT_OUT, analyticsLocations: D }),
        M = (0, l.useCallback)(() => {
            let e = (0, p.Ci)("openClientThemes");
            (0, T.openUserSettings)(e ? h.X.DISPLAY_THEME_CATEGORY : h.X.APPEARANCE_PANEL, { analyticsLocations: D });
        }, [D]),
        k = (0, l.useCallback)(() => {
            (0, T.openUserSettings)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: D });
        }, [D]),
        U = (0, l.useCallback)(() => {
            let e = (0, p.Ci)("openCustomAppSettings") ? h.X.DISPLAY_IN_APP_ICON_CATEGORY : h.X.APPEARANCE_IN_APP_ICON;
            (0, T.openUserSettings)(e, { analyticsLocations: D });
        }, [D]),
        w = (0, l.useCallback)(() => {
            (0, _.pX)(C.BVt.COLLECTIBLES_SHOP);
        }, []),
        V = (0, l.useCallback)(() => {
            (0, T.openUserSettings)(h.X.SOUNDBOARD_CATEGORY, { analyticsLocations: D });
        }, [D]),
        B = (0, A.A)({ analyticsLocations: D }),
        F = (0, l.useCallback)(() => {
            (0, T.openUserSettings)(h.X.PROFILE_PANEL, { analyticsLocations: D }, () =>
                (0, m.L)({ analyticsLocations: D }),
            );
        }, [D]),
        H = (0, b.A)(),
        z = (0, l.useMemo)(() => H.map((e) => e?.id), [H]),
        Y = (0, l.useMemo)(
            () => [
                {
                    id: E.SERVER_BOOSTS_CARD_ID,
                    title: v.intl.formatToPlainString(v.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                    description: v.intl.formatToPlainString(v.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                    subscriptionRequired: !0,
                    ctaText: v.intl.string(v.t.jVcuVY),
                    onCtaClick: k,
                    primaryAsset: (0, s.jsx)(a.CIt, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.PROFILES_CARD_ID,
                    title: v.intl.string(v.t.xDRab3),
                    description: v.intl.string(v.t.yn6fWA),
                    ctaText: v.intl.string(v.t.jVcuVY),
                    onCtaClick: t ? B : G,
                    primaryAsset: (0, s.jsx)(a.R$P, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "appearance"],
                },
                {
                    id: E.HD_VIDEO_CARD_ID,
                    title: v.intl.string(v.t["/mQ5gg"]),
                    description: v.intl.string(v.t["7WwAXh"]),
                    primaryAsset: (0, s.jsx)(a.TMU, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.CLIENT_THEMES_CARD_ID,
                    title: v.intl.string(v.t.acc6h6),
                    description: v.intl.formatToPlainString(v.t.WQazjs, { themeCount: 20 }),
                    ctaText: v.intl.string(v.t.jVcuVY),
                    onCtaClick: M,
                    primaryAsset: L.A,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: E.MORE_EMOJIS_CARD_ID,
                    title: v.intl.string(v.t.D8vIDT),
                    description: v.intl.string(v.t.DRMecB),
                    primaryAsset: (0, s.jsx)(a.nT5, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.LARGE_UPLOADS_CARD_ID,
                    title: v.intl.string(v.t.nL1WZV),
                    description: v.intl.formatToPlainString(v.t.k8LC1w, { maxSizeMb: 500 }),
                    primaryAsset: (0, s.jsx)(a.oYh, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.CUSTOM_APP_ICONS_CARD_ID,
                    title: v.intl.string(v.t["GU+wqh"]),
                    description: v.intl.string(v.t["1uPk1Z"]),
                    ctaText: v.intl.string(v.t.jVcuVY),
                    onCtaClick: U,
                    primaryAsset: O.A,
                    categories: ["appearance"],
                },
                {
                    id: E.ENTRANCE_SOUNDS_CARD_ID,
                    title: v.intl.string(v.t.WJfCPi),
                    description: v.intl.string(v.t.liQKJR),
                    ctaText: v.intl.string(v.t.jVcuVY),
                    onCtaClick: V,
                    primaryAsset: R.A,
                    categories: ["appearance"],
                },
                {
                    id: E.DISPLAY_NAME_STYLES_CARD_ID,
                    title: v.intl.string(v.t.OLtTrt),
                    description: v.intl.string(v.t["di/pXR"]),
                    onCtaClick: t ? B : F,
                    ctaText: v.intl.string(v.t.jVcuVY),
                    primaryAsset: y.A,
                    categories: ["appearance"],
                },
                {
                    id: E.CUSTOM_SOUNDS_CARD_ID,
                    title: v.intl.string(v.t["Cu/oFd"]),
                    description: v.intl.string(v.t.czj2aa),
                    primaryAsset: (0, s.jsx)(a.WPL, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: E.SPECIAL_STICKERS_CARD_ID,
                    title: v.intl.string(v.t.MQoVeb),
                    description: v.intl.string(v.t.HGCLZX),
                    primaryAsset: P.A,
                    categories: ["upgrades"],
                },
                {
                    id: E.SUPER_REACTIONS_CARD_ID,
                    title: v.intl.string(v.t.qERvAA),
                    description: v.intl.string(v.t.WkUWzx),
                    primaryAsset: (0, s.jsx)(a.Z8w, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: E.VIDEO_BACKGROUNDS_CARD_ID,
                    title: v.intl.string(v.t.ssVDYQ),
                    description: v.intl.string(v.t.aUSRMa),
                    primaryAsset: (0, o.Mw)(e) ? I : j,
                    categories: ["upgrades"],
                },
                {
                    id: E.EARLY_ACCESS_CARD_ID,
                    title: v.intl.string(v.t["g/KRY6"]),
                    description: v.intl.string(v.t.JzAmJc),
                    primaryAsset: (0, s.jsx)(a.AxI, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: E.BADGE_CARD_ID,
                    title: v.intl.string(v.t.Bn3CtB),
                    description: v.intl.string(v.t.LmENwu),
                    subscriptionRequired: !0,
                    primaryAsset:
                        null != i
                            ? (0, s.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                            : (0, s.jsx)(a.vXC, { color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                    categories: ["vip"],
                },
                {
                    id: E.SPECIAL_MEMBER_PRICING_CARD_ID,
                    title: v.intl.string(v.t["MTD+7w"]),
                    description: v.intl.string(v.t.Bhs0s6),
                    ctaText: v.intl.string(v.t.dBJVnZ),
                    onCtaClick: w,
                    primaryAsset: (0, s.jsx)(a.D8b, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: E.PERMADECOS_CARD_ID,
                    title: v.intl.string(v.t.L14NZN),
                    description: v.intl.string(v.t.eCZkAI),
                    primaryAsset: (0, s.jsx)(a.u7P, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
            ],
            [e, i, G, M, k, U, w, V, F, B, t],
        );
    return (0, l.useMemo)(() => Y.filter((e) => null != e && !z.includes(e.id)), [Y, z]);
}
