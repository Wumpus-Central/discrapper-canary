"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(816166),
    g = n(813098),
    A = n(473145),
    I = n(426983),
    T = n(176128),
    S = n(981883),
    y = n(652215),
    v = n(985018),
    N = n(85168);
let C = {
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
        IconComponent: (0, c.kHD)(E.A),
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
function R(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)("div", {
        className: N.V8,
        children: [
            (0, r.jsxs)("div", {
                className: a()(N.f, N.N5),
                children: [
                    (0, r.jsx)(g.A, { width: 18, height: 18, className: N.F8 }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: A.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: N.f,
                children: (0, r.jsx)(c.Text, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: v.intl.format(v.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function O(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: s, tooltipDescription: a } = (0, S.V)(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: N.Rf,
                children: [
                    (0, r.jsx)(c.Text, { color: "interactive-text-active", variant: "text-xs/bold", children: i }),
                    null != s
                        ? (0, r.jsx)(c.Text, { color: "text-muted", variant: "text-xs/medium", children: s })
                        : null,
                    null != a
                        ? (0, r.jsx)(c.Text, { color: "text-muted", variant: "text-xs/medium", children: a })
                        : null,
                ],
            }),
            n.premium ? (0, r.jsx)(R, { guildTraits: n }) : null,
        ],
    });
}
function b(e) {
    let t,
        n,
        {
            guild: s,
            tooltipColor: a = c.STz.Colors.BRAND,
            tooltipPosition: l,
            className: d,
            flowerStarClassName: E,
            iconClassName: g,
            badgeStrokeColor: A,
            badgeColor: S,
            disableBoostClick: v,
            "aria-label": R = !1,
            ...b
        } = e,
        D = b.size ?? 18,
        L = (0, o.bG)([m.default, h.Ay], () => {
            let e = m.default.getCurrentUser();
            return h.Ay.isMember(s?.id, e?.id);
        }),
        w = (0, o.bG)([p.A], () => p.A.theme),
        M = (0, T.Jp)(s),
        x = (0, I.K)(M),
        P = i.useMemo(() => M.premium && L && !v, [v, M.premium, L]),
        k = i.useCallback(
            (e) => {
                P &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, _.K)({
                        guildId: s.id,
                        location: { section: y.JJy.GUILD_HEADER, object: y.ZSU.BOOST_GEM_ICON },
                    }));
            },
            [P, s.id],
        );
    if (x === I._.NONE) return null;
    let {
        IconComponent: U,
        backgroundDarkColor: G,
        backgroundLightColor: F,
        foregroundDarkColor: V,
        foregroundLightColor: B,
        premiumBackgroundColor: H,
        premiumForegroundColor: j,
        sizeAdjustment: Y,
    } = C[x];
    if (null == U) return null;
    M.premium && ((t = j), (n = H));
    let W = (0, u.Mw)(w) ? V : B,
        K = (0, u.Mw)(w) ? G : F;
    (t = t ?? W), (n = n ?? K);
    let $ = Math.floor(0.75 * D) - (Y ?? 0);
    return (0, r.jsx)(c.STz, {
        color: a,
        position: l,
        "aria-label": R,
        text: (0, r.jsx)(O, { badgeType: x, guildTraits: M }),
        tooltipContentClassName: N.Hj,
        children: (e) =>
            (0, r.jsx)(c.DUT, {
                onClick: k,
                tabIndex: P ? 0 : -1,
                children: (0, r.jsx)(f.A, {
                    ...e,
                    className: d,
                    flowerStarClassName: E,
                    allowFullSizedIcon: !0,
                    color: n ?? S,
                    stroke: A,
                    size: D,
                    children: (0, r.jsx)(U, {
                        size: "custom",
                        width: $,
                        height: $,
                        className: g,
                        color: t ?? "currentColor",
                    }),
                }),
            }),
    });
}
