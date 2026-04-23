n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(17928),
    s = n(661531),
    u = n(462887),
    d = n(306471),
    c = n(478016),
    h = n(565787),
    y = n(332837),
    p = n(998445),
    f = n(834730),
    m = n(781696),
    _ = n(939249),
    E = n(404374),
    C = n(509536),
    g = n(496885),
    A = n(363195),
    w = n(696451),
    k = n(287809),
    v = n(816166),
    M = n(813098),
    S = n(473145),
    I = n(426983),
    b = n(176128),
    L = n(981883),
    T = n(652215),
    N = n(985018),
    K = n(40544);
let D = {
    [I._.STAFF]: {
        IconComponent: d.V,
        foregroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: s.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: s.A.unsafe_rawColors.GREEN_360.css,
    },
    [I._.VERIFIED_AND_PARTNERED]: {
        IconComponent: c.U,
        foregroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: s.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: s.A.unsafe_rawColors.GREEN_360.css,
    },
    [I._.VERIFIED]: {
        IconComponent: c.U,
        foregroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: s.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: s.A.unsafe_rawColors.GREEN_360.css,
    },
    [I._.PARTNERED]: {
        IconComponent: (0, h.k)(v.A),
        foregroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: s.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: s.A.unsafe_rawColors.BRAND_500.css,
    },
    [I._.COMMUNITY]: {
        IconComponent: y.f,
        foregroundDarkColor: s.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: s.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: E.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: s.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [I._.DISCOVERABLE]: {
        IconComponent: p.L,
        foregroundDarkColor: s.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: s.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: E.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: s.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [I._.NONE]: {},
};
function O(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)("div", {
        className: K.V8,
        children: [
            (0, r.jsxs)("div", {
                className: l()(K.f, K.N5),
                children: [
                    (0, r.jsx)(M.A, { width: 18, height: 18, className: K.F8 }),
                    (0, r.jsx)(f.E, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: S.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: K.f,
                children: (0, r.jsx)(f.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: N.intl.format(N.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function R(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: a, tooltipDescription: l } = (0, L.V)(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: K.Rf,
                children: [
                    (0, r.jsx)(f.E, { color: "interactive-text-active", variant: "text-xs/bold", children: i }),
                    null != a ? (0, r.jsx)(f.E, { color: "text-muted", variant: "text-xs/medium", children: a }) : null,
                    null != l ? (0, r.jsx)(f.E, { color: "text-muted", variant: "text-xs/medium", children: l }) : null,
                ],
            }),
            n.premium ? (0, r.jsx)(O, { guildTraits: n }) : null,
        ],
    });
}
function x(e) {
    let t,
        n,
        {
            guild: a,
            tooltipColor: l = m.ST.Colors.BRAND,
            tooltipPosition: s,
            className: d,
            flowerStarClassName: c,
            iconClassName: h,
            badgeStrokeColor: y,
            badgeColor: p,
            disableBoostClick: f,
            "aria-label": E = !1,
            ...v
        } = e,
        M = v.size ?? 18,
        S = (0, o.bG)([k.default, w.Ay], () => {
            let e = k.default.getCurrentUser();
            return w.Ay.isMember(a?.id, e?.id);
        }),
        L = (0, o.bG)([A.A], () => A.A.theme),
        N = (0, b.Jp)(a),
        O = (0, I.K)(N),
        x = i.useMemo(() => N.premium && S && !f, [f, N.premium, S]),
        P = i.useCallback(
            (e) => {
                x &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, C.K4)({
                        guildId: a.id,
                        location: { section: T.JJy.GUILD_HEADER, object: T.ZSU.BOOST_GEM_ICON },
                    }));
            },
            [x, a.id],
        );
    if (O === I._.NONE) return null;
    let {
        IconComponent: F,
        backgroundDarkColor: j,
        backgroundLightColor: U,
        foregroundDarkColor: B,
        foregroundLightColor: z,
        premiumBackgroundColor: G,
        premiumForegroundColor: H,
        sizeAdjustment: W,
    } = D[O];
    if (null == F) return null;
    N.premium && ((t = H), (n = G));
    let V = (0, u.M)(L) ? B : z,
        $ = (0, u.M)(L) ? j : U;
    (t = t ?? V), (n = n ?? $);
    let Y = Math.floor(0.75 * M) - (W ?? 0);
    return (0, r.jsx)(m.ST, {
        color: l,
        position: s,
        "aria-label": E,
        text: (0, r.jsx)(R, { badgeType: O, guildTraits: N }),
        tooltipContentClassName: K.Hj,
        children: (e) =>
            (0, r.jsx)(_.D, {
                onClick: P,
                tabIndex: x ? 0 : -1,
                children: (0, r.jsx)(g.A, {
                    ...e,
                    className: d,
                    flowerStarClassName: c,
                    allowFullSizedIcon: !0,
                    color: n ?? p,
                    stroke: y,
                    size: M,
                    children: (0, r.jsx)(F, {
                        size: "custom",
                        width: Y,
                        height: Y,
                        className: h,
                        color: t ?? "currentColor",
                    }),
                }),
            }),
    });
}
