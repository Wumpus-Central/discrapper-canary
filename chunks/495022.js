n.d(t, { A: () => Y });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(736653),
    r = n(793574),
    o = n(688810),
    c = n(531260),
    d = n(720462),
    u = n(206835),
    _ = n(976860),
    m = n(780964),
    A = n(358776),
    g = n(840065),
    h = n(102815),
    x = n(17307),
    p = n(788868),
    E = n(652215),
    C = n(355097),
    T = n(985018),
    S = n(574268),
    I = n(561852),
    f = n(522799),
    N = n(795710),
    b = n(484813),
    j = n(659980),
    v = n(881784),
    O = n(8330),
    R = n(992186),
    y = n(159312),
    P = n(629139),
    L = n(499309),
    D = n(866223),
    M = n(330290),
    G = n(260972),
    U = n(899225),
    k = n(106731),
    V = n(20462),
    H = n(307966),
    w = n(864579);
let B = [
    { id: "bestof", label: () => T.intl.string(T.t.q1u7nQ) },
    { id: "appearance", label: () => T.intl.string(T.t.CUnZkZ) },
    { id: "upgrades", label: () => T.intl.string(T.t.KC5q8v) },
    { id: "vip", label: () => T.intl.string(T.t.DjEAcv) },
];
function Y(e) {
    let { glowingPerkId: t = null } = e,
        { analyticsLocations: n } = (0, o.Ay)(r.A.PREMIUM_MARKETING_PERK_CARD),
        Y = (0, l.Ay)(),
        { fractionalState: F } = (0, c.A)(),
        z = (0, u.A)({ scrollPosition: C._F.TRY_IT_OUT, analyticsLocations: n }),
        W = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(m.X.APPEARANCE_PANEL, { section: E.nc_.APPEARANCE, analyticsLocations: n });
        }, [n]),
        K = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(m.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                section: E.nc_.GUILD_BOOSTING,
                analyticsLocations: n,
            });
        }, [n]),
        Z = (0, s.useCallback)(() => {
            let e = (0, A.WJ)("openCustomAppSettings");
            (0, g.openUserSettings)(e ? m.X.APPEARANCE_IN_APP_ICON : m.X.APPEARANCE_PANEL, {
                section: E.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : C.kq.CUSTOM_APP_ICONS,
                analyticsLocations: n,
            });
        }, [n]),
        q = (0, s.useCallback)(() => {
            (0, _.pX)(E.BVt.COLLECTIBLES_SHOP);
        }, []),
        X = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(m.X.SOUNDBOARD_CATEGORY, {
                section: E.nc_.VOICE,
                subsection: C.MJ,
                analyticsLocations: n,
            });
        }, [n]),
        J = F === p.xc.FP_ONLY,
        Q = (0, s.useMemo)(
            () => [
                {
                    id: "serverBoosts",
                    title: T.intl.formatToPlainString(T.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                    description: J
                        ? void 0
                        : T.intl.formatToPlainString(T.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                    caption: J ? T.intl.string(T.t["/VzCKE"]) : void 0,
                    ctaText: J ? void 0 : T.intl.string(T.t.jVcuVY),
                    onCtaClick: J ? void 0 : K,
                    primaryAsset: J ? V.A : O,
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "profiles",
                    title: T.intl.string(T.t.xDRab3),
                    description: T.intl.string(T.t.yn6fWA),
                    ctaText: T.intl.string(T.t.jVcuVY),
                    onCtaClick: z,
                    primaryAsset: v,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: "hdVideo",
                    title: T.intl.string(T.t["/mQ5gg"]),
                    description: T.intl.string(T.t["7WwAXh"]),
                    primaryAsset: G,
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "clientThemes",
                    title: T.intl.string(T.t.acc6h6),
                    description: T.intl.formatToPlainString(T.t.WQazjs, { themeCount: 20 }),
                    ctaText: T.intl.string(T.t.jVcuVY),
                    onCtaClick: W,
                    primaryAsset: j,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: "moreEmojis",
                    title: T.intl.string(T.t.D8vIDT),
                    description: T.intl.string(T.t.DRMecB),
                    primaryAsset: P,
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "largeUploads",
                    title: T.intl.string(T.t.nL1WZV),
                    description: T.intl.formatToPlainString(T.t.k8LC1w, { maxSizeMb: 500 }),
                    primaryAsset: k,
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "customAppIcons",
                    title: T.intl.string(T.t.rkb1vA),
                    description: T.intl.string(T.t["1uPk1Z"]),
                    ctaText: T.intl.string(T.t.jVcuVY),
                    onCtaClick: Z,
                    primaryAsset: R,
                    categories: ["appearance"],
                },
                {
                    id: "entranceSounds",
                    title: T.intl.string(T.t.WJfCPi),
                    description: T.intl.string(T.t.liQKJR),
                    ctaText: T.intl.string(T.t.jVcuVY),
                    onCtaClick: X,
                    primaryAsset: L,
                    categories: ["appearance"],
                },
                {
                    id: "customSounds",
                    title: T.intl.string(T.t["Cu/oFd"]),
                    description: T.intl.string(T.t.czj2aa),
                    primaryAsset: (0, x.t4)(Y, f, N),
                    categories: ["upgrades"],
                },
                {
                    id: "specialStickers",
                    title: T.intl.string(T.t.MQoVeb),
                    description: T.intl.string(T.t.HGCLZX),
                    primaryAsset: (0, x.t4)(Y, b, M),
                    categories: ["upgrades"],
                },
                {
                    id: "superReactions",
                    title: T.intl.string(T.t.qERvAA),
                    description: T.intl.string(T.t.WkUWzx),
                    primaryAsset: U,
                    categories: ["upgrades"],
                },
                {
                    id: "videoBackgrounds",
                    title: T.intl.string(T.t.ssVDYQ),
                    description: T.intl.string(T.t.aUSRMa),
                    categories: ["upgrades"],
                },
                {
                    id: "earlyAccess",
                    title: T.intl.string(T.t["g/KRY6"]),
                    description: T.intl.string(T.t.JzAmJc),
                    primaryAsset: y,
                    categories: ["vip"],
                },
                {
                    id: "badge",
                    title: T.intl.string(T.t.Bn3CtB),
                    description: T.intl.string(T.t.n26Vcu),
                    primaryAsset: J ? H.A : I,
                    categories: ["vip"],
                },
                {
                    id: "specialMemberPricing",
                    title: T.intl.string(T.t["MTD+7w"]),
                    description: T.intl.string(T.t.Bhs0s6),
                    ctaText: T.intl.string(T.t.dBJVnZ),
                    onCtaClick: q,
                    primaryAsset: D,
                    categories: ["vip"],
                },
                {
                    id: "permadecos",
                    title: T.intl.string(T.t.L14NZN),
                    description: T.intl.string(T.t.eCZkAI),
                    primaryAsset: w.A,
                    categories: ["vip"],
                },
            ],
            [Y, J, z, W, K, Z, q, X],
        ),
        $ = null != t ? Q.find((e) => e?.id === t) : null,
        [ee, et] = (0, s.useState)($?.categories[0] ?? "bestof"),
        en = (0, s.useMemo)(() => Q.filter((e) => null != e && e.categories.includes(ee)), [Q, ee]);
    return (0, i.jsxs)("div", {
        className: S.uW,
        children: [
            (0, i.jsx)(a.Heading, { variant: "display-sm", className: S.R_, children: T.intl.string(T.t["Uh3+CA"]) }),
            (0, i.jsx)(a.VQ0, {
                type: "top-pill",
                look: "custom",
                selectedItem: ee,
                onItemSelect: et,
                className: S.Lq,
                "aria-label": T.intl.string(T.t["Uh3+CA"]),
                children: B.map((e) =>
                    (0, i.jsx)(a.VQ0.Item, { id: e.id, className: S.IC, children: e.label() }, e.id),
                ),
            }),
            (0, i.jsx)(
                d.A,
                {
                    children: en.map((e) => {
                        if (null != e)
                            return (0, i.jsx)(
                                "div",
                                { id: e.id, className: S.Nr, children: (0, i.jsx)(h.S, { ...e, glowing: t === e.id }) },
                                e.id,
                            );
                    }),
                },
                ee,
            ),
        ],
    });
}
