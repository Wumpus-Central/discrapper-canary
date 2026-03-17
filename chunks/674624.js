n.d(t, { Ay: () => L, jW: () => P, w1: () => D });
var i,
    s = n(627968),
    l = n(64700),
    a = n(367622),
    r = n(827734),
    o = n(582754),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    _ = n(259065),
    m = n(206835),
    g = n(976860),
    A = n(780964),
    h = n(358776),
    x = n(840065),
    p = n(112848),
    T = n(149757),
    E = n(920050),
    S = n(189024),
    C = n(652215),
    f = n(355097),
    b = n(985018),
    N = n(64514),
    I = n(121818),
    v = n(419455),
    j = n(288604),
    y = n(163635),
    R = n(345362),
    O = n(509442),
    P =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let D = [
    { id: "bestof", label: () => b.intl.string(b.t.q1u7nQ) },
    { id: "appearance", label: () => b.intl.string(b.t.CUnZkZ) },
    { id: "upgrades", label: () => b.intl.string(b.t.KC5q8v) },
    { id: "vip", label: () => b.intl.string(b.t.DjEAcv) },
];
function L() {
    let e = (0, d.DP)(),
        t = (0, p.Lh)(),
        n = (0, T.N)(t)?.standard ?? null,
        { analyticsLocations: i } = (0, u.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD),
        P = (0, m.A)({ scrollPosition: f._F.TRY_IT_OUT, analyticsLocations: i }),
        D = (0, l.useCallback)(() => {
            let e = (0, h.Ci)("openClientThemes");
            (0, x.openUserSettings)(e ? A.X.DISPLAY_THEME_CATEGORY : A.X.APPEARANCE_PANEL, { analyticsLocations: i });
        }, [i]),
        L = (0, l.useCallback)(() => {
            (0, x.openUserSettings)(A.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: i });
        }, [i]),
        G = (0, l.useCallback)(() => {
            let e = (0, h.Ci)("openCustomAppSettings") ? A.X.DISPLAY_IN_APP_ICON_CATEGORY : A.X.APPEARANCE_IN_APP_ICON;
            (0, x.openUserSettings)(e, { analyticsLocations: i });
        }, [i]),
        M = (0, l.useCallback)(() => {
            (0, g.pX)(C.BVt.COLLECTIBLES_SHOP);
        }, []),
        U = (0, l.useCallback)(() => {
            (0, x.openUserSettings)(A.X.SOUNDBOARD_CATEGORY, { analyticsLocations: i });
        }, [i]),
        k = (0, l.useCallback)(() => {
            (0, x.openUserSettings)(A.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, _.L)({ analyticsLocations: i }),
            );
        }, [i]),
        V = (0, S.A)(),
        w = (0, l.useMemo)(() => V.map((e) => e?.id), [V]),
        B = (0, l.useMemo)(
            () => [
                {
                    id: E.SERVER_BOOSTS_CARD_ID,
                    title: b.intl.formatToPlainString(b.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                    description: b.intl.formatToPlainString(b.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                    subscriptionRequired: !0,
                    ctaText: b.intl.string(b.t.jVcuVY),
                    onCtaClick: L,
                    primaryAsset: (0, s.jsx)(a.CIt, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.PROFILES_CARD_ID,
                    title: b.intl.string(b.t.xDRab3),
                    description: b.intl.string(b.t.yn6fWA),
                    ctaText: b.intl.string(b.t.jVcuVY),
                    onCtaClick: P,
                    primaryAsset: (0, s.jsx)(a.R$P, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "appearance"],
                },
                {
                    id: E.HD_VIDEO_CARD_ID,
                    title: b.intl.string(b.t["/mQ5gg"]),
                    description: b.intl.string(b.t["7WwAXh"]),
                    primaryAsset: (0, s.jsx)(a.TMU, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.CLIENT_THEMES_CARD_ID,
                    title: b.intl.string(b.t.acc6h6),
                    description: b.intl.formatToPlainString(b.t.WQazjs, { themeCount: 20 }),
                    ctaText: b.intl.string(b.t.jVcuVY),
                    onCtaClick: D,
                    primaryAsset: O.A,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: E.MORE_EMOJIS_CARD_ID,
                    title: b.intl.string(b.t.D8vIDT),
                    description: b.intl.string(b.t.DRMecB),
                    primaryAsset: (0, s.jsx)(a.nT5, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.LARGE_UPLOADS_CARD_ID,
                    title: b.intl.string(b.t.nL1WZV),
                    description: b.intl.formatToPlainString(b.t.k8LC1w, { maxSizeMb: 500 }),
                    primaryAsset: (0, s.jsx)(a.oYh, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.CUSTOM_APP_ICONS_CARD_ID,
                    title: b.intl.string(b.t["GU+wqh"]),
                    description: b.intl.string(b.t["1uPk1Z"]),
                    ctaText: b.intl.string(b.t.jVcuVY),
                    onCtaClick: G,
                    primaryAsset: j.A,
                    categories: ["appearance"],
                },
                {
                    id: E.ENTRANCE_SOUNDS_CARD_ID,
                    title: b.intl.string(b.t.WJfCPi),
                    description: b.intl.string(b.t.liQKJR),
                    ctaText: b.intl.string(b.t.jVcuVY),
                    onCtaClick: U,
                    primaryAsset: y.A,
                    categories: ["appearance"],
                },
                {
                    id: E.DISPLAY_NAME_STYLES_CARD_ID,
                    title: b.intl.string(b.t.OLtTrt),
                    description: b.intl.string(b.t["di/pXR"]),
                    onCtaClick: k,
                    primaryAsset: v.A,
                    ctaText: b.intl.string(b.t.jVcuVY),
                    categories: ["appearance"],
                },
                {
                    id: E.CUSTOM_SOUNDS_CARD_ID,
                    title: b.intl.string(b.t["Cu/oFd"]),
                    description: b.intl.string(b.t.czj2aa),
                    primaryAsset: (0, s.jsx)(a.WPL, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: E.SPECIAL_STICKERS_CARD_ID,
                    title: b.intl.string(b.t.MQoVeb),
                    description: b.intl.string(b.t.HGCLZX),
                    primaryAsset: R.A,
                    categories: ["upgrades"],
                },
                {
                    id: E.SUPER_REACTIONS_CARD_ID,
                    title: b.intl.string(b.t.qERvAA),
                    description: b.intl.string(b.t.WkUWzx),
                    primaryAsset: (0, s.jsx)(a.Z8w, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: E.VIDEO_BACKGROUNDS_CARD_ID,
                    title: b.intl.string(b.t.ssVDYQ),
                    description: b.intl.string(b.t.aUSRMa),
                    primaryAsset: (0, o.Mw)(e) ? N : I,
                    categories: ["upgrades"],
                },
                {
                    id: E.EARLY_ACCESS_CARD_ID,
                    title: b.intl.string(b.t["g/KRY6"]),
                    description: b.intl.string(b.t.JzAmJc),
                    primaryAsset: (0, s.jsx)(a.AxI, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: E.BADGE_CARD_ID,
                    title: b.intl.string(b.t.Bn3CtB),
                    description: b.intl.string(b.t.LmENwu),
                    subscriptionRequired: !0,
                    primaryAsset:
                        null != n
                            ? (0, s.jsx)("img", { src: n, alt: "", width: 160, draggable: "false" })
                            : (0, s.jsx)(a.vXC, { color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                    categories: ["vip"],
                },
                {
                    id: E.SPECIAL_MEMBER_PRICING_CARD_ID,
                    title: b.intl.string(b.t["MTD+7w"]),
                    description: b.intl.string(b.t.Bhs0s6),
                    ctaText: b.intl.string(b.t.dBJVnZ),
                    onCtaClick: M,
                    primaryAsset: (0, s.jsx)(a.D8b, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: E.PERMADECOS_CARD_ID,
                    title: b.intl.string(b.t.L14NZN),
                    description: b.intl.string(b.t.eCZkAI),
                    primaryAsset: (0, s.jsx)(a.u7P, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
            ],
            [e, n, P, D, L, G, M, U, k],
        );
    return (0, l.useMemo)(() => B.filter((e) => null != e && !w.includes(e.id)), [B, w]);
}
