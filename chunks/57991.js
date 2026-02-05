"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    u = n(582754),
    c = n(397927),
    d = n(404374),
    _ = n(509536),
    f = n(496885),
    p = n(544028),
    h = n(696451),
    m = n(287809),
    g = n(816166),
    E = n(813098),
    A = n(473145),
    I = n(426983),
    T = n(176128),
    y = n(981883),
    S = n(652215),
    v = n(985018),
    C = n(106967);
let b = {
    [I._.STAFF]: {
        IconComponent: c.VaJ,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [I._.VERIFIED_AND_PARTNERED]: {
        IconComponent: c.Uzd,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [I._.VERIFIED]: {
        IconComponent: c.Uzd,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [I._.PARTNERED]: {
        IconComponent: (0, c.kHD)(g.A),
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.A.unsafe_rawColors.BRAND_500.css,
    },
    [I._.COMMUNITY]: {
        IconComponent: c.fAJ,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [I._.DISCOVERABLE]: {
        IconComponent: c.L_e,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [I._.NONE]: {},
};
function N(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)("div", {
        className: C.V8,
        children: [
            (0, r.jsxs)("div", {
                className: s()(C.f, C.N5),
                children: [
                    (0, r.jsx)(E.A, { width: 18, height: 18, className: C.F8 }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: A.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: C.f,
                children: (0, r.jsx)(c.Text, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: v.intl.format(v.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function R(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: a, tooltipDescription: s } = (0, y.V)(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: C.Rf,
                children: [
                    (0, r.jsx)(c.Text, { color: "interactive-text-active", variant: "text-xs/bold", children: i }),
                    null != a
                        ? (0, r.jsx)(c.Text, { color: "text-muted", variant: "text-xs/medium", children: a })
                        : null,
                    null != s
                        ? (0, r.jsx)(c.Text, { color: "text-muted", variant: "text-xs/medium", children: s })
                        : null,
                ],
            }),
            n.premium ? (0, r.jsx)(N, { guildTraits: n }) : null,
        ],
    });
}
function O(e) {
    let t,
        n,
        {
            guild: a,
            tooltipColor: s = c.STz.Colors.BRAND,
            tooltipPosition: l,
            className: d,
            flowerStarClassName: g,
            iconClassName: E,
            badgeStrokeColor: A,
            badgeColor: y,
            disableBoostClick: v,
            "aria-label": N = !1,
            ...O
        } = e,
        D = O.size ?? 18,
        L = (0, o.bG)([m.default, h.Ay], () => {
            let e = m.default.getCurrentUser();
            return h.Ay.isMember(a?.id, e?.id);
        }),
        w = (0, o.bG)([p.A], () => p.A.theme),
        x = (0, T.Jp)(a),
        P = (0, I.K)(x),
        M = i.useMemo(() => x.premium && L && !v, [v, x.premium, L]),
        k = i.useCallback(
            (e) => {
                M &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, _.K)({
                        guildId: a.id,
                        location: { section: S.JJy.GUILD_HEADER, object: S.ZSU.BOOST_GEM_ICON },
                    }));
            },
            [M, a.id],
        );
    if (P === I._.NONE) return null;
    let {
        IconComponent: U,
        backgroundDarkColor: G,
        backgroundLightColor: V,
        foregroundDarkColor: F,
        foregroundLightColor: B,
        premiumBackgroundColor: j,
        premiumForegroundColor: H,
        sizeAdjustment: Y,
    } = b[P];
    if (null == U) return null;
    x.premium && ((t = H), (n = j));
    let W = (0, u.Mw)(w) ? F : B,
        K = (0, u.Mw)(w) ? G : V;
    (t = t ?? W), (n = n ?? K);
    let z = Math.floor(0.75 * D) - (Y ?? 0);
    return (0, r.jsx)(c.STz, {
        color: s,
        position: l,
        "aria-label": N,
        text: (0, r.jsx)(R, { badgeType: P, guildTraits: x }),
        tooltipContentClassName: C.Hj,
        children: (e) =>
            (0, r.jsx)(c.DUT, {
                onClick: k,
                tabIndex: M ? 0 : -1,
                children: (0, r.jsx)(f.A, {
                    ...e,
                    className: d,
                    flowerStarClassName: g,
                    allowFullSizedIcon: !0,
                    color: n ?? y,
                    stroke: A,
                    size: D,
                    children: (0, r.jsx)(U, {
                        size: "custom",
                        width: z,
                        height: z,
                        className: E,
                        color: t ?? "currentColor",
                    }),
                }),
            }),
    });
}
