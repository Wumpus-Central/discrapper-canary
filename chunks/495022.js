n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    a = n(367622),
    l = n(397927),
    r = n(793574),
    o = n(688810),
    c = n(720462),
    d = n(206835),
    u = n(976860),
    _ = n(780964),
    m = n(358776),
    A = n(840065),
    g = n(102815),
    h = n(652215),
    x = n(355097),
    p = n(985018),
    E = n(574268),
    C = n(561852),
    T = n(288604),
    S = n(163635),
    I = n(771363),
    f = n(986126),
    N = n(345362),
    b = n(509442);
let j = [
    { id: "bestof", label: () => p.intl.string(p.t.q1u7nQ) },
    { id: "appearance", label: () => p.intl.string(p.t.CUnZkZ) },
    { id: "upgrades", label: () => p.intl.string(p.t.KC5q8v) },
    { id: "vip", label: () => p.intl.string(p.t.DjEAcv) },
];
function v(e) {
    let { glowingPerkId: t = null } = e,
        { analyticsLocations: n } = (0, o.Ay)(r.A.PREMIUM_MARKETING_PERK_CARD),
        v = (0, d.A)({ scrollPosition: x._F.TRY_IT_OUT, analyticsLocations: n }),
        O = (0, s.useCallback)(() => {
            (0, A.openUserSettings)(_.X.APPEARANCE_PANEL, { section: h.nc_.APPEARANCE, analyticsLocations: n });
        }, [n]),
        R = (0, s.useCallback)(() => {
            (0, A.openUserSettings)(_.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                section: h.nc_.GUILD_BOOSTING,
                analyticsLocations: n,
            });
        }, [n]),
        y = (0, s.useCallback)(() => {
            let e = (0, m.WJ)("openCustomAppSettings");
            (0, A.openUserSettings)(e ? _.X.APPEARANCE_IN_APP_ICON : _.X.APPEARANCE_PANEL, {
                section: h.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : x.kq.CUSTOM_APP_ICONS,
                analyticsLocations: n,
            });
        }, [n]),
        P = (0, s.useCallback)(() => {
            (0, u.pX)(h.BVt.COLLECTIBLES_SHOP);
        }, []),
        L = (0, s.useCallback)(() => {
            (0, A.openUserSettings)(_.X.SOUNDBOARD_CATEGORY, {
                section: h.nc_.VOICE,
                subsection: x.MJ,
                analyticsLocations: n,
            });
        }, [n]),
        D = (0, s.useMemo)(
            () => [
                {
                    id: "serverBoosts",
                    title: p.intl.formatToPlainString(p.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                    description: p.intl.formatToPlainString(p.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                    subscriptionRequired: !0,
                    ctaText: p.intl.string(p.t.jVcuVY),
                    onCtaClick: R,
                    primaryAsset: (0, i.jsx)(a.CIt, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "profiles",
                    title: p.intl.string(p.t.xDRab3),
                    description: p.intl.string(p.t.yn6fWA),
                    ctaText: p.intl.string(p.t.jVcuVY),
                    onCtaClick: v,
                    primaryAsset: I.A,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: "hdVideo",
                    title: p.intl.string(p.t["/mQ5gg"]),
                    description: p.intl.string(p.t["7WwAXh"]),
                    primaryAsset: (0, i.jsx)(a.TMU, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "clientThemes",
                    title: p.intl.string(p.t.acc6h6),
                    description: p.intl.formatToPlainString(p.t.WQazjs, { themeCount: 20 }),
                    ctaText: p.intl.string(p.t.jVcuVY),
                    onCtaClick: O,
                    primaryAsset: b.A,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: "moreEmojis",
                    title: p.intl.string(p.t.D8vIDT),
                    description: p.intl.string(p.t.DRMecB),
                    primaryAsset: (0, i.jsx)(a.nT5, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "largeUploads",
                    title: p.intl.string(p.t.nL1WZV),
                    description: p.intl.formatToPlainString(p.t.k8LC1w, { maxSizeMb: 500 }),
                    primaryAsset: (0, i.jsx)(a.oYh, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: "customAppIcons",
                    title: p.intl.string(p.t.rkb1vA),
                    description: p.intl.string(p.t["1uPk1Z"]),
                    ctaText: p.intl.string(p.t.jVcuVY),
                    onCtaClick: y,
                    primaryAsset: T.A,
                    categories: ["appearance"],
                },
                {
                    id: "entranceSounds",
                    title: p.intl.string(p.t.WJfCPi),
                    description: p.intl.string(p.t.liQKJR),
                    ctaText: p.intl.string(p.t.jVcuVY),
                    onCtaClick: L,
                    primaryAsset: S.A,
                    categories: ["appearance"],
                },
                {
                    id: "customSounds",
                    title: p.intl.string(p.t["Cu/oFd"]),
                    description: p.intl.string(p.t.czj2aa),
                    primaryAsset: (0, i.jsx)(a.WPL, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: "specialStickers",
                    title: p.intl.string(p.t.MQoVeb),
                    description: p.intl.string(p.t.HGCLZX),
                    primaryAsset: N.A,
                    categories: ["upgrades"],
                },
                {
                    id: "superReactions",
                    title: p.intl.string(p.t.qERvAA),
                    description: p.intl.string(p.t.WkUWzx),
                    primaryAsset: (0, i.jsx)(a.Z8w, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: "videoBackgrounds",
                    title: p.intl.string(p.t.ssVDYQ),
                    description: p.intl.string(p.t.aUSRMa),
                    categories: ["upgrades"],
                },
                {
                    id: "earlyAccess",
                    title: p.intl.string(p.t["g/KRY6"]),
                    description: p.intl.string(p.t.JzAmJc),
                    primaryAsset: (0, i.jsx)(a.AxI, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: "badge",
                    title: p.intl.string(p.t.Bn3CtB),
                    description: p.intl.string(p.t.n26Vcu),
                    subscriptionRequired: !0,
                    primaryAsset: C,
                    categories: ["vip"],
                },
                {
                    id: "specialMemberPricing",
                    title: p.intl.string(p.t["MTD+7w"]),
                    description: p.intl.string(p.t.Bhs0s6),
                    ctaText: p.intl.string(p.t.dBJVnZ),
                    onCtaClick: P,
                    primaryAsset: f.A,
                    categories: ["vip"],
                },
                {
                    id: "permadecos",
                    title: p.intl.string(p.t.L14NZN),
                    description: p.intl.string(p.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(a.u7P, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
            ],
            [v, O, R, y, P, L],
        ),
        G = null != t ? D.find((e) => e?.id === t) : null,
        [M, U] = (0, s.useState)(G?.categories[0] ?? "bestof"),
        k = (0, s.useMemo)(() => D.filter((e) => null != e && e.categories.includes(M)), [D, M]);
    return (0, i.jsxs)("div", {
        className: E.uW,
        children: [
            (0, i.jsx)(l.Heading, { variant: "display-sm", className: E.R_, children: p.intl.string(p.t["Uh3+CA"]) }),
            (0, i.jsx)(l.VQ0, {
                type: "top-pill",
                look: "custom",
                selectedItem: M,
                onItemSelect: U,
                className: E.Lq,
                "aria-label": p.intl.string(p.t["Uh3+CA"]),
                children: j.map((e) =>
                    (0, i.jsx)(l.VQ0.Item, { id: e.id, className: E.IC, children: e.label() }, e.id),
                ),
            }),
            (0, i.jsx)(
                c.A,
                {
                    gap: 20,
                    children: k.map((e) => {
                        if (null != e)
                            return (0, i.jsx)(
                                "div",
                                { id: e.id, className: E.Nr, children: (0, i.jsx)(g.S, { ...e, glowing: t === e.id }) },
                                e.id,
                            );
                    }),
                },
                M,
            ),
        ],
    });
}
