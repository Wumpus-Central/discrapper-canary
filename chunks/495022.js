n.d(t, { A: () => z });
var i,
    s = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(736653),
    o = n(793574),
    c = n(688810),
    d = n(531260),
    u = n(720462),
    _ = n(206835),
    m = n(976860),
    A = n(780964),
    g = n(358776),
    h = n(840065),
    x = n(255438),
    p = n(102815),
    E = n(17307),
    C = n(788868),
    T = n(652215),
    S = n(355097),
    I = n(985018),
    f = n(574268),
    N = n(561852),
    b = n(522799),
    j = n(795710),
    v = n(484813),
    O = n(659980),
    R = n(881784),
    y = n(8330),
    P = n(992186),
    L = n(159312),
    D = n(629139),
    M = n(499309),
    G = n(866223),
    U = n(330290),
    k = n(260972),
    V = n(899225),
    H = n(106731),
    w = n(20462),
    B = n(307966),
    Y =
        (((i = Y || {}).NITRO_FAVORITES = "favorites"),
        (i.CUSTOMIZATIONS = "customizations"),
        (i.LEVEL_UPS = "level-ups"),
        (i.SHOW_UP_YOUR_WAY = "your-way"),
        i);
let F = [
    { id: "favorites", label: () => I.intl.string(I.t.BFzgxd) },
    { id: "customizations", label: () => I.intl.string(I.t.sUr1ow) },
    { id: "level-ups", label: () => I.intl.string(I.t.k8qEkR) },
    { id: "your-way", label: () => I.intl.string(I.t["9y2Lfu"]) },
];
function z(e) {
    let { glowingPerkId: t = null } = e,
        { analyticsLocations: n } = (0, c.Ay)(o.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, r.Ay)(),
        { fractionalState: z } = (0, d.A)(),
        W = (0, x.Xq)(C.f3 / 1024, { useKibibytes: !0 }),
        K = (0, _.A)({ scrollPosition: S._F.TRY_IT_OUT, analyticsLocations: n }),
        Z = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(A.X.APPEARANCE_PANEL, { section: T.nc_.APPEARANCE, analyticsLocations: n });
        }, [n]),
        q = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(A.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                section: T.nc_.GUILD_BOOSTING,
                analyticsLocations: n,
            });
        }, [n]),
        X = (0, a.useCallback)(() => {
            let e = (0, g.WJ)("openCustomAppSettings");
            (0, h.openUserSettings)(e ? A.X.APPEARANCE_IN_APP_ICON : A.X.APPEARANCE_PANEL, {
                section: T.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : S.kq.CUSTOM_APP_ICONS,
                analyticsLocations: n,
            });
        }, [n]),
        J = (0, a.useCallback)(() => {
            (0, m.pX)(T.BVt.COLLECTIBLES_SHOP);
        }, []),
        Q = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(A.X.SOUNDBOARD_CATEGORY, {
                section: T.nc_.VOICE,
                subsection: S.MJ,
                analyticsLocations: n,
            });
        }, [n]),
        $ = z === C.xc.FP_ONLY,
        ee = (0, a.useMemo)(() => {
            let { NITRO_FAVORITES: e, CUSTOMIZATIONS: t, LEVEL_UPS: n, SHOW_UP_YOUR_WAY: s } = Y;
            return [
                {
                    id: "serverBoosts",
                    title: I.intl.string(I.t["NyDu/6"]),
                    description: $ ? void 0 : I.intl.string(I.t["4pEwXL"]),
                    caption: $ ? I.intl.string(I.t["/VzCKE"]) : void 0,
                    ctaText: $ ? void 0 : I.intl.string(I.t.jVcuVY),
                    onCtaClick: $ ? void 0 : q,
                    primaryAsset: $ ? w.A : y,
                    categories: [e],
                },
                {
                    id: "profiles",
                    title: I.intl.string(I.t.KcyDwF),
                    description: I.intl.string(I.t.Mt3U1W),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: K,
                    primaryAsset: R,
                    categories: [e],
                },
                {
                    id: "clientThemes",
                    title: I.intl.string(I.t.kWM48G),
                    description: I.intl.string(I.t.CjRASJ),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: Z,
                    primaryAsset: O,
                    categories: [e],
                },
                {
                    id: "customAppIcons",
                    title: I.intl.string(I.t.OuItFi),
                    description: I.intl.string(I.t.mPyrE6),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: X,
                    primaryAsset: P,
                    categories: [t],
                },
                {
                    id: "moreEmojis",
                    title: I.intl.string(I.t["R2IV/Q"]),
                    description: I.intl.string(I.t.R5Xag2),
                    primaryAsset: D,
                    categories: [t],
                },
                {
                    id: "specialStickers",
                    title: I.intl.string(I.t.tzdIwI),
                    description: I.intl.string(I.t.hJG8ZN),
                    primaryAsset: (0, E.t4)(i, v, U),
                    categories: [t],
                },
                {
                    id: "customSounds",
                    title: I.intl.string(I.t.LWsArT),
                    description: I.intl.string(I.t.bTzbVk),
                    primaryAsset: (0, E.t4)(i, b, j),
                    categories: [t],
                },
                {
                    id: "earlyAccess",
                    title: I.intl.string(I.t.UkLVeJ),
                    description: I.intl.string(I.t.xf9ePm),
                    primaryAsset: L,
                    categories: [n],
                },
                {
                    id: "specialMemberPricing",
                    title: I.intl.string(I.t["0Mykgq"]),
                    description: I.intl.string(I.t.opgqDZ),
                    ctaText: I.intl.string(I.t.dBJVnZ),
                    onCtaClick: J,
                    primaryAsset: G,
                    categories: [n],
                },
                {
                    id: "largeUploads",
                    title: I.intl.formatToPlainString(I.t.jqhAdL, { premiumMaxSize: W }),
                    description: I.intl.formatToPlainString(I.t["HI+cfm"], { premiumMaxSize: W }),
                    primaryAsset: H,
                    categories: [n],
                },
                {
                    id: "hdVideo",
                    title: I.intl.string(I.t.RSXQYO),
                    description: I.intl.string(I.t.ymCPxp),
                    primaryAsset: k,
                    categories: [n],
                },
                {
                    id: "superReactions",
                    title: I.intl.string(I.t["6S7kO7"]),
                    description: I.intl.string(I.t.kN1JRI),
                    primaryAsset: V,
                    categories: [n],
                },
                {
                    id: "entranceSounds",
                    title: I.intl.string(I.t["f4M+H9"]),
                    description: I.intl.string(I.t["7ZCYvC"]),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: Q,
                    primaryAsset: M,
                    categories: [s],
                },
                {
                    id: "badge",
                    title: I.intl.string(I.t.dcFfSJ),
                    description: I.intl.string(I.t["37MFFq"]),
                    primaryAsset: $ ? B.A : N,
                    categories: [s],
                },
            ];
        }, [i, $, W, K, Z, q, X, J, Q]),
        et = null != t ? ee.find((e) => e?.id === t) : null,
        [en, ei] = (0, a.useState)(et?.categories[0] ?? "favorites"),
        es = (0, a.useMemo)(() => ee.filter((e) => null != e && e.categories.includes(en)), [ee, en]);
    return (0, s.jsxs)("div", {
        className: f.uW,
        children: [
            (0, s.jsx)(l.Heading, { variant: "display-sm", className: f.R_, children: I.intl.string(I.t["Uh3+CA"]) }),
            (0, s.jsx)(l.VQ0, {
                type: "top-pill",
                look: "custom",
                selectedItem: en,
                onItemSelect: ei,
                className: f.Lq,
                "aria-label": I.intl.string(I.t["Uh3+CA"]),
                children: F.map((e) =>
                    (0, s.jsx)(l.VQ0.Item, { id: e.id, className: f.IC, children: e.label() }, e.id),
                ),
            }),
            (0, s.jsx)(u.A, {
                children: es.map((e) => {
                    if (null != e)
                        return (0, s.jsx)(
                            "div",
                            { id: e.id, className: f.Nr, children: (0, s.jsx)(p.S, { ...e, glowing: t === e.id }) },
                            e.id,
                        );
                }),
            }),
        ],
    });
}
