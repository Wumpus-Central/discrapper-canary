"use strict";
n.d(t, { A: () => k });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(827734),
    u = n(462887),
    c = n(306471),
    d = n(478016),
    _ = n(565787),
    f = n(332837),
    p = n(998445),
    h = n(834730),
    E = n(781696),
    m = n(939249),
    g = n(404374),
    A = n(509536),
    I = n(496885),
    T = n(544028),
    S = n(696451),
    y = n(287809),
    N = n(816166),
    v = n(813098),
    C = n(473145),
    O = n(426983),
    R = n(176128),
    b = n(981883),
    D = n(652215),
    L = n(985018),
    w = n(40544);
let M = {
    [O._.STAFF]: {
        IconComponent: c.V,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [O._.VERIFIED_AND_PARTNERED]: {
        IconComponent: d.U,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [O._.VERIFIED]: {
        IconComponent: d.U,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [O._.PARTNERED]: {
        IconComponent: (0, _.k)(N.A),
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.A.unsafe_rawColors.BRAND_500.css,
    },
    [O._.COMMUNITY]: {
        IconComponent: f.f,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: g.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [O._.DISCOVERABLE]: {
        IconComponent: p.L,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: g.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [O._.NONE]: {},
};
function P(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)("div", {
        className: w.V8,
        children: [
            (0, r.jsxs)("div", {
                className: a()(w.f, w.N5),
                children: [
                    (0, r.jsx)(v.A, { width: 18, height: 18, className: w.F8 }),
                    (0, r.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: C.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: w.f,
                children: (0, r.jsx)(h.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: L.intl.format(L.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function x(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: s, tooltipDescription: a } = (0, b.V)(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: w.Rf,
                children: [
                    (0, r.jsx)(h.E, { color: "interactive-text-active", variant: "text-xs/bold", children: i }),
                    null != s ? (0, r.jsx)(h.E, { color: "text-muted", variant: "text-xs/medium", children: s }) : null,
                    null != a ? (0, r.jsx)(h.E, { color: "text-muted", variant: "text-xs/medium", children: a }) : null,
                ],
            }),
            n.premium ? (0, r.jsx)(P, { guildTraits: n }) : null,
        ],
    });
}
function k(e) {
    let t,
        n,
        {
            guild: s,
            tooltipColor: a = E.ST.Colors.BRAND,
            tooltipPosition: l,
            className: c,
            flowerStarClassName: d,
            iconClassName: _,
            badgeStrokeColor: f,
            badgeColor: p,
            disableBoostClick: h,
            "aria-label": g = !1,
            ...N
        } = e,
        v = N.size ?? 18,
        C = (0, o.bG)([y.default, S.Ay], () => {
            let e = y.default.getCurrentUser();
            return S.Ay.isMember(s?.id, e?.id);
        }),
        b = (0, o.bG)([T.A], () => T.A.theme),
        L = (0, R.Jp)(s),
        P = (0, O.K)(L),
        k = i.useMemo(() => L.premium && C && !h, [h, L.premium, C]),
        U = i.useCallback(
            (e) => {
                k &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, A.K4)({
                        guildId: s.id,
                        location: { section: D.JJy.GUILD_HEADER, object: D.ZSU.BOOST_GEM_ICON },
                    }));
            },
            [k, s.id],
        );
    if (P === O._.NONE) return null;
    let {
        IconComponent: G,
        backgroundDarkColor: F,
        backgroundLightColor: V,
        foregroundDarkColor: B,
        foregroundLightColor: H,
        premiumBackgroundColor: j,
        premiumForegroundColor: Y,
        sizeAdjustment: W,
    } = M[P];
    if (null == G) return null;
    L.premium && ((t = Y), (n = j));
    let K = (0, u.M)(b) ? B : H,
        $ = (0, u.M)(b) ? F : V;
    (t = t ?? K), (n = n ?? $);
    let z = Math.floor(0.75 * v) - (W ?? 0);
    return (0, r.jsx)(E.ST, {
        color: a,
        position: l,
        "aria-label": g,
        text: (0, r.jsx)(x, { badgeType: P, guildTraits: L }),
        tooltipContentClassName: w.Hj,
        children: (e) =>
            (0, r.jsx)(m.D, {
                onClick: U,
                tabIndex: k ? 0 : -1,
                children: (0, r.jsx)(I.A, {
                    ...e,
                    className: c,
                    flowerStarClassName: d,
                    allowFullSizedIcon: !0,
                    color: n ?? p,
                    stroke: f,
                    size: v,
                    children: (0, r.jsx)(G, {
                        size: "custom",
                        width: z,
                        height: z,
                        className: _,
                        color: t ?? "currentColor",
                    }),
                }),
            }),
    });
}
