n.d(t, { Ay: () => L, jW: () => P, w1: () => D });
var i,
    r = n(627968),
    a = n(64700),
    s = n(367622),
    l = n(827734),
    o = n(582754),
    c = n(736653),
    d = n(793574),
    u = n(688810),
    _ = n(259065),
    m = n(206835),
    p = n(976860),
    A = n(591179),
    g = n(462463),
    f = n(780964),
    h = n(858897),
    b = n(112848),
    x = n(149757),
    R = n(920050),
    C = n(189024),
    N = n(652215),
    E = n(355097),
    v = n(985018),
    T = n(64514),
    j = n(121818),
    I = n(419455),
    S = n(288604),
    y = n(163635),
    M = n(345362),
    O = n(509442),
    P =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let D = [
    { id: "bestof", label: () => v.intl.string(v.t.q1u7nQ) },
    { id: "appearance", label: () => v.intl.string(v.t.CUnZkZ) },
    { id: "upgrades", label: () => v.intl.string(v.t.KC5q8v) },
    { id: "vip", label: () => v.intl.string(v.t.DjEAcv) },
];
function L() {
    let e = (0, c.DP)(),
        t = (0, A.X)("useFavoritesPerkCards"),
        n = (0, b.Lh)(),
        i = (0, x.N)(n)?.standard ?? null,
        { analyticsLocations: P } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        D = (0, m.A)({ scrollPosition: E._F.TRY_IT_OUT, analyticsLocations: P }),
        L = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(f.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: P });
        }, [P]),
        U = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(f.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: P });
        }, [P]),
        k = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(f.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: P });
        }, [P]),
        B = (0, a.useCallback)(() => {
            (0, p.pX)(N.BVt.COLLECTIBLES_SHOP);
        }, []),
        w = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(f.X.SOUNDBOARD_CATEGORY, { analyticsLocations: P });
        }, [P]),
        G = (0, g.A)({ analyticsLocations: P }),
        V = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(f.X.PROFILE_PANEL, { analyticsLocations: P }, () =>
                (0, _.L)({ analyticsLocations: P }),
            );
        }, [P]),
        H = (0, C.A)(),
        z = (0, a.useMemo)(() => H.map((e) => e?.id), [H]),
        F = (0, a.useMemo)(
            () => [
                {
                    id: R.SERVER_BOOSTS_CARD_ID,
                    title: v.intl.formatToPlainString(v.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                    description: v.intl.formatToPlainString(v.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                    subscriptionRequired: !0,
                    ctaText: v.intl.string(v.t.jVcuVY),
                    onCtaClick: U,
                    primaryAsset: (0, r.jsx)(s.CIt, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: R.PROFILES_CARD_ID,
                    title: v.intl.string(v.t.xDRab3),
                    description: v.intl.string(v.t.yn6fWA),
                    ctaText: v.intl.string(v.t.jVcuVY),
                    onCtaClick: t ? G : D,
                    primaryAsset: (0, r.jsx)(s.R$P, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "appearance"],
                },
                {
                    id: R.HD_VIDEO_CARD_ID,
                    title: v.intl.string(v.t["/mQ5gg"]),
                    description: v.intl.string(v.t["7WwAXh"]),
                    primaryAsset: (0, r.jsx)(s.TMU, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: R.CLIENT_THEMES_CARD_ID,
                    title: v.intl.string(v.t.acc6h6),
                    description: v.intl.formatToPlainString(v.t.WQazjs, { themeCount: 20 }),
                    ctaText: v.intl.string(v.t.jVcuVY),
                    onCtaClick: L,
                    primaryAsset: O.A,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: R.MORE_EMOJIS_CARD_ID,
                    title: v.intl.string(v.t.D8vIDT),
                    description: v.intl.string(v.t.DRMecB),
                    primaryAsset: (0, r.jsx)(s.nT5, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: R.LARGE_UPLOADS_CARD_ID,
                    title: v.intl.string(v.t.nL1WZV),
                    description: v.intl.formatToPlainString(v.t.k8LC1w, { maxSizeMb: 500 }),
                    primaryAsset: (0, r.jsx)(s.oYh, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: R.CUSTOM_APP_ICONS_CARD_ID,
                    title: v.intl.string(v.t["GU+wqh"]),
                    description: v.intl.string(v.t["1uPk1Z"]),
                    ctaText: v.intl.string(v.t.jVcuVY),
                    onCtaClick: k,
                    primaryAsset: S.A,
                    categories: ["appearance"],
                },
                {
                    id: R.ENTRANCE_SOUNDS_CARD_ID,
                    title: v.intl.string(v.t.WJfCPi),
                    description: v.intl.string(v.t.liQKJR),
                    ctaText: v.intl.string(v.t.jVcuVY),
                    onCtaClick: w,
                    primaryAsset: y.A,
                    categories: ["appearance"],
                },
                {
                    id: R.DISPLAY_NAME_STYLES_CARD_ID,
                    title: v.intl.string(v.t.OLtTrt),
                    description: v.intl.string(v.t["di/pXR"]),
                    onCtaClick: t ? G : V,
                    ctaText: v.intl.string(v.t.jVcuVY),
                    primaryAsset: I.A,
                    categories: ["appearance"],
                },
                {
                    id: R.CUSTOM_SOUNDS_CARD_ID,
                    title: v.intl.string(v.t["Cu/oFd"]),
                    description: v.intl.string(v.t.czj2aa),
                    primaryAsset: (0, r.jsx)(s.WPL, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: R.SPECIAL_STICKERS_CARD_ID,
                    title: v.intl.string(v.t.MQoVeb),
                    description: v.intl.string(v.t.HGCLZX),
                    primaryAsset: M.A,
                    categories: ["upgrades"],
                },
                {
                    id: R.SUPER_REACTIONS_CARD_ID,
                    title: v.intl.string(v.t.qERvAA),
                    description: v.intl.string(v.t.WkUWzx),
                    primaryAsset: (0, r.jsx)(s.Z8w, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: R.VIDEO_BACKGROUNDS_CARD_ID,
                    title: v.intl.string(v.t.ssVDYQ),
                    description: v.intl.string(v.t.aUSRMa),
                    primaryAsset: (0, o.Mw)(e) ? T : j,
                    categories: ["upgrades"],
                },
                {
                    id: R.EARLY_ACCESS_CARD_ID,
                    title: v.intl.string(v.t["g/KRY6"]),
                    description: v.intl.string(v.t.JzAmJc),
                    primaryAsset: (0, r.jsx)(s.AxI, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: R.BADGE_CARD_ID,
                    title: v.intl.string(v.t.Bn3CtB),
                    description: v.intl.string(v.t.LmENwu),
                    subscriptionRequired: !0,
                    primaryAsset:
                        null != i
                            ? (0, r.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                            : (0, r.jsx)(s.vXC, { color: l.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                    categories: ["vip"],
                },
                {
                    id: R.SPECIAL_MEMBER_PRICING_CARD_ID,
                    title: v.intl.string(v.t["MTD+7w"]),
                    description: v.intl.string(v.t.Bhs0s6),
                    ctaText: v.intl.string(v.t.dBJVnZ),
                    onCtaClick: B,
                    primaryAsset: (0, r.jsx)(s.D8b, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: R.PERMADECOS_CARD_ID,
                    title: v.intl.string(v.t.L14NZN),
                    description: v.intl.string(v.t.eCZkAI),
                    primaryAsset: (0, r.jsx)(s.u7P, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
            ],
            [e, i, D, L, U, k, B, w, V, G, t],
        );
    return (0, a.useMemo)(() => F.filter((e) => null != e && !z.includes(e.id)), [F, z]);
}
