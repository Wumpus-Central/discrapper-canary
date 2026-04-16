n.d(t, { Ay: () => L, jW: () => O, w1: () => D });
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
    g = n(591179),
    A = n(462463),
    f = n(780964),
    h = n(858897),
    b = n(112848),
    x = n(149757),
    C = n(920050),
    N = n(189024),
    R = n(652215),
    v = n(355097),
    E = n(985018),
    I = n(64514),
    T = n(121818),
    j = n(419455),
    S = n(288604),
    M = n(163635),
    y = n(345362),
    P = n(509442),
    O =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let D = [
    { id: "bestof", label: () => E.intl.string(E.t.q1u7nQ) },
    { id: "appearance", label: () => E.intl.string(E.t.CUnZkZ) },
    { id: "upgrades", label: () => E.intl.string(E.t.KC5q8v) },
    { id: "vip", label: () => E.intl.string(E.t.DjEAcv) },
];
function L() {
    let e = (0, c.DP)(),
        t = (0, g.X)("useFavoritesPerkCards"),
        n = (0, b.Lh)(),
        i = (0, x.N)(n)?.standard ?? null,
        { analyticsLocations: O } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        D = (0, m.A)({ scrollPosition: v._F.TRY_IT_OUT, analyticsLocations: O }),
        L = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(f.X.DISPLAY_THEME_CATEGORY, { analyticsLocations: O });
        }, [O]),
        U = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(f.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: O });
        }, [O]),
        k = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(f.X.DISPLAY_IN_APP_ICON_CATEGORY, { analyticsLocations: O });
        }, [O]),
        B = (0, a.useCallback)(() => {
            (0, p.pX)(R.BVt.COLLECTIBLES_SHOP);
        }, []),
        G = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(f.X.SOUNDBOARD_CATEGORY, { analyticsLocations: O });
        }, [O]),
        w = (0, A.A)({ analyticsLocations: O }),
        V = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(f.X.PROFILE_PANEL, { analyticsLocations: O }, () =>
                (0, _.L)({ analyticsLocations: O }),
            );
        }, [O]),
        H = (0, N.A)(),
        W = (0, a.useMemo)(() => H.map((e) => e?.id), [H]),
        F = (0, a.useMemo)(
            () => [
                {
                    id: C.SERVER_BOOSTS_CARD_ID,
                    title: E.intl.formatToPlainString(E.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                    description: E.intl.formatToPlainString(E.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                    subscriptionRequired: !0,
                    ctaText: E.intl.string(E.t.jVcuVY),
                    onCtaClick: U,
                    primaryAsset: (0, r.jsx)(s.CIt, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: C.PROFILES_CARD_ID,
                    title: E.intl.string(E.t.xDRab3),
                    description: E.intl.string(E.t.yn6fWA),
                    ctaText: E.intl.string(E.t.jVcuVY),
                    onCtaClick: t ? w : D,
                    primaryAsset: (0, r.jsx)(s.R$P, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "appearance"],
                },
                {
                    id: C.HD_VIDEO_CARD_ID,
                    title: E.intl.string(E.t["/mQ5gg"]),
                    description: E.intl.string(E.t["7WwAXh"]),
                    primaryAsset: (0, r.jsx)(s.TMU, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: C.CLIENT_THEMES_CARD_ID,
                    title: E.intl.string(E.t.acc6h6),
                    description: E.intl.formatToPlainString(E.t.WQazjs, { themeCount: 20 }),
                    ctaText: E.intl.string(E.t.jVcuVY),
                    onCtaClick: L,
                    primaryAsset: P.A,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: C.MORE_EMOJIS_CARD_ID,
                    title: E.intl.string(E.t.D8vIDT),
                    description: E.intl.string(E.t.DRMecB),
                    primaryAsset: (0, r.jsx)(s.nT5, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: C.LARGE_UPLOADS_CARD_ID,
                    title: E.intl.string(E.t.nL1WZV),
                    description: E.intl.formatToPlainString(E.t.k8LC1w, { maxSizeMb: 500 }),
                    primaryAsset: (0, r.jsx)(s.oYh, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: C.CUSTOM_APP_ICONS_CARD_ID,
                    title: E.intl.string(E.t["GU+wqh"]),
                    description: E.intl.string(E.t["1uPk1Z"]),
                    ctaText: E.intl.string(E.t.jVcuVY),
                    onCtaClick: k,
                    primaryAsset: S.A,
                    categories: ["appearance"],
                },
                {
                    id: C.ENTRANCE_SOUNDS_CARD_ID,
                    title: E.intl.string(E.t.WJfCPi),
                    description: E.intl.string(E.t.liQKJR),
                    ctaText: E.intl.string(E.t.jVcuVY),
                    onCtaClick: G,
                    primaryAsset: M.A,
                    categories: ["appearance"],
                },
                {
                    id: C.DISPLAY_NAME_STYLES_CARD_ID,
                    title: E.intl.string(E.t.OLtTrt),
                    description: E.intl.string(E.t["di/pXR"]),
                    onCtaClick: t ? w : V,
                    ctaText: E.intl.string(E.t.jVcuVY),
                    primaryAsset: j.A,
                    categories: ["appearance"],
                },
                {
                    id: C.CUSTOM_SOUNDS_CARD_ID,
                    title: E.intl.string(E.t["Cu/oFd"]),
                    description: E.intl.string(E.t.czj2aa),
                    primaryAsset: (0, r.jsx)(s.WPL, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: C.SPECIAL_STICKERS_CARD_ID,
                    title: E.intl.string(E.t.MQoVeb),
                    description: E.intl.string(E.t.HGCLZX),
                    primaryAsset: y.A,
                    categories: ["upgrades"],
                },
                {
                    id: C.SUPER_REACTIONS_CARD_ID,
                    title: E.intl.string(E.t.qERvAA),
                    description: E.intl.string(E.t.WkUWzx),
                    primaryAsset: (0, r.jsx)(s.Z8w, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: C.VIDEO_BACKGROUNDS_CARD_ID,
                    title: E.intl.string(E.t.ssVDYQ),
                    description: E.intl.string(E.t.aUSRMa),
                    primaryAsset: (0, o.Mw)(e) ? I : T,
                    categories: ["upgrades"],
                },
                {
                    id: C.EARLY_ACCESS_CARD_ID,
                    title: E.intl.string(E.t["g/KRY6"]),
                    description: E.intl.string(E.t.JzAmJc),
                    primaryAsset: (0, r.jsx)(s.AxI, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: C.BADGE_CARD_ID,
                    title: E.intl.string(E.t.Bn3CtB),
                    description: E.intl.string(E.t.LmENwu),
                    subscriptionRequired: !0,
                    primaryAsset:
                        null != i
                            ? (0, r.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                            : (0, r.jsx)(s.vXC, { color: l.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                    categories: ["vip"],
                },
                {
                    id: C.SPECIAL_MEMBER_PRICING_CARD_ID,
                    title: E.intl.string(E.t["MTD+7w"]),
                    description: E.intl.string(E.t.Bhs0s6),
                    ctaText: E.intl.string(E.t.dBJVnZ),
                    onCtaClick: B,
                    primaryAsset: (0, r.jsx)(s.D8b, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: C.PERMADECOS_CARD_ID,
                    title: E.intl.string(E.t.L14NZN),
                    description: E.intl.string(E.t.eCZkAI),
                    primaryAsset: (0, r.jsx)(s.u7P, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
            ],
            [e, i, D, L, U, k, B, G, V, w, t],
        );
    return (0, a.useMemo)(() => F.filter((e) => null != e && !W.includes(e.id)), [F, W]);
}
