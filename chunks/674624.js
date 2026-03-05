n.d(t, { Ay: () => D, jW: () => P, w1: () => L });
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
    g = n(206835),
    m = n(976860),
    A = n(780964),
    h = n(358776),
    p = n(840065),
    x = n(112848),
    E = n(149757),
    T = n(920050),
    S = n(189024),
    C = n(652215),
    I = n(355097),
    f = n(985018),
    b = n(64514),
    N = n(121818),
    v = n(419455),
    j = n(288604),
    O = n(163635),
    R = n(345362),
    y = n(509442),
    P =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let L = [
    { id: "bestof", label: () => f.intl.string(f.t.q1u7nQ) },
    { id: "appearance", label: () => f.intl.string(f.t.CUnZkZ) },
    { id: "upgrades", label: () => f.intl.string(f.t.KC5q8v) },
    { id: "vip", label: () => f.intl.string(f.t.DjEAcv) },
];
function D() {
    let e = (0, d.DP)(),
        t = (0, x.Lh)(),
        n = (0, E.N)(t)?.standard ?? null,
        { analyticsLocations: i } = (0, u.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD),
        P = (0, g.A)({ scrollPosition: I._F.TRY_IT_OUT, analyticsLocations: i }),
        L = (0, l.useCallback)(() => {
            let e = (0, h.Ci)("openClientThemes");
            (0, p.openUserSettings)(e ? A.X.DISPLAY_THEME_CATEGORY : A.X.APPEARANCE_PANEL, {
                section: C.nc_.APPEARANCE,
                analyticsLocations: i,
            });
        }, [i]),
        D = (0, l.useCallback)(() => {
            (0, p.openUserSettings)(A.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                section: C.nc_.GUILD_BOOSTING,
                analyticsLocations: i,
            });
        }, [i]),
        G = (0, l.useCallback)(() => {
            let e = (0, h.Ci)("openCustomAppSettings") ? A.X.DISPLAY_IN_APP_ICON_CATEGORY : A.X.APPEARANCE_IN_APP_ICON;
            (0, p.openUserSettings)(e, { section: C.nc_.APPEARANCE, analyticsLocations: i });
        }, [i]),
        M = (0, l.useCallback)(() => {
            (0, m.pX)(C.BVt.COLLECTIBLES_SHOP);
        }, []),
        U = (0, l.useCallback)(() => {
            (0, p.openUserSettings)(A.X.SOUNDBOARD_CATEGORY, {
                section: C.nc_.VOICE,
                subsection: I.MJ,
                analyticsLocations: i,
            });
        }, [i]),
        k = (0, l.useCallback)(() => {
            (0, p.openUserSettings)(
                A.X.PROFILE_PANEL,
                { section: C.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: i },
                () => (0, _.L)({ analyticsLocations: i }),
            );
        }, [i]),
        V = (0, S.A)(),
        w = (0, l.useMemo)(() => V.map((e) => e?.id), [V]),
        H = (0, l.useMemo)(
            () => [
                {
                    id: T.SERVER_BOOSTS_CARD_ID,
                    title: f.intl.formatToPlainString(f.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                    description: f.intl.formatToPlainString(f.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                    subscriptionRequired: !0,
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: D,
                    primaryAsset: (0, s.jsx)(a.CIt, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: T.PROFILES_CARD_ID,
                    title: f.intl.string(f.t.xDRab3),
                    description: f.intl.string(f.t.yn6fWA),
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: P,
                    primaryAsset: (0, s.jsx)(a.R$P, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "appearance"],
                },
                {
                    id: T.HD_VIDEO_CARD_ID,
                    title: f.intl.string(f.t["/mQ5gg"]),
                    description: f.intl.string(f.t["7WwAXh"]),
                    primaryAsset: (0, s.jsx)(a.TMU, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: T.CLIENT_THEMES_CARD_ID,
                    title: f.intl.string(f.t.acc6h6),
                    description: f.intl.formatToPlainString(f.t.WQazjs, { themeCount: 20 }),
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: L,
                    primaryAsset: y.A,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: T.MORE_EMOJIS_CARD_ID,
                    title: f.intl.string(f.t.D8vIDT),
                    description: f.intl.string(f.t.DRMecB),
                    primaryAsset: (0, s.jsx)(a.nT5, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: T.LARGE_UPLOADS_CARD_ID,
                    title: f.intl.string(f.t.nL1WZV),
                    description: f.intl.formatToPlainString(f.t.k8LC1w, { maxSizeMb: 500 }),
                    primaryAsset: (0, s.jsx)(a.oYh, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: T.CUSTOM_APP_ICONS_CARD_ID,
                    title: f.intl.string(f.t.rkb1vA),
                    description: f.intl.string(f.t["1uPk1Z"]),
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: G,
                    primaryAsset: j.A,
                    categories: ["appearance"],
                },
                {
                    id: T.ENTRANCE_SOUNDS_CARD_ID,
                    title: f.intl.string(f.t.WJfCPi),
                    description: f.intl.string(f.t.liQKJR),
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: U,
                    primaryAsset: O.A,
                    categories: ["appearance"],
                },
                {
                    id: T.DISPLAY_NAME_STYLES_CARD_ID,
                    title: f.intl.string(f.t.OLtTrt),
                    description: f.intl.string(f.t["di/pXR"]),
                    onCtaClick: k,
                    primaryAsset: v.A,
                    ctaText: f.intl.string(f.t.jVcuVY),
                    categories: ["appearance"],
                },
                {
                    id: T.CUSTOM_SOUNDS_CARD_ID,
                    title: f.intl.string(f.t["Cu/oFd"]),
                    description: f.intl.string(f.t.czj2aa),
                    primaryAsset: (0, s.jsx)(a.WPL, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: T.SPECIAL_STICKERS_CARD_ID,
                    title: f.intl.string(f.t.MQoVeb),
                    description: f.intl.string(f.t.HGCLZX),
                    primaryAsset: R.A,
                    categories: ["upgrades"],
                },
                {
                    id: T.SUPER_REACTIONS_CARD_ID,
                    title: f.intl.string(f.t.qERvAA),
                    description: f.intl.string(f.t.WkUWzx),
                    primaryAsset: (0, s.jsx)(a.Z8w, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: T.VIDEO_BACKGROUNDS_CARD_ID,
                    title: f.intl.string(f.t.ssVDYQ),
                    description: f.intl.string(f.t.aUSRMa),
                    primaryAsset: (0, o.Mw)(e) ? b : N,
                    categories: ["upgrades"],
                },
                {
                    id: T.EARLY_ACCESS_CARD_ID,
                    title: f.intl.string(f.t["g/KRY6"]),
                    description: f.intl.string(f.t.JzAmJc),
                    primaryAsset: (0, s.jsx)(a.AxI, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: T.BADGE_CARD_ID,
                    title: f.intl.string(f.t.Bn3CtB),
                    description: f.intl.string(f.t.n26Vcu),
                    subscriptionRequired: !0,
                    primaryAsset:
                        null != n
                            ? (0, s.jsx)("img", { src: n, alt: "", width: 160, draggable: "false" })
                            : (0, s.jsx)(a.vXC, { color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                    categories: ["vip"],
                },
                {
                    id: T.SPECIAL_MEMBER_PRICING_CARD_ID,
                    title: f.intl.string(f.t["MTD+7w"]),
                    description: f.intl.string(f.t.Bhs0s6),
                    ctaText: f.intl.string(f.t.dBJVnZ),
                    onCtaClick: M,
                    primaryAsset: (0, s.jsx)(a.D8b, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: T.PERMADECOS_CARD_ID,
                    title: f.intl.string(f.t.L14NZN),
                    description: f.intl.string(f.t.eCZkAI),
                    primaryAsset: (0, s.jsx)(a.u7P, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
            ],
            [e, n, P, L, D, G, M, U, k],
        );
    return (0, l.useMemo)(() => H.filter((e) => null != e && !w.includes(e.id)), [H, w]);
}
