i.d(t, { A: () => U });
var n = i(627968),
    l = i(64700),
    r = i(503698),
    a = i.n(r),
    s = i(311907),
    o = i(827734),
    d = i(462887),
    c = i(306471),
    _ = i(478016),
    u = i(565787),
    p = i(332837),
    h = i(998445),
    m = i(834730),
    g = i(781696),
    E = i(939249),
    f = i(404374),
    I = i(509536),
    A = i(496885),
    v = i(544028),
    C = i(696451),
    T = i(287809),
    b = i(816166),
    N = i(813098),
    x = i(473145),
    R = i(426983),
    w = i(176128),
    D = i(981883),
    S = i(652215),
    L = i(985018),
    y = i(40544);
let j = {
    [R._.STAFF]: {
        IconComponent: c.V,
        foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: o.A.unsafe_rawColors.GREEN_360.css,
    },
    [R._.VERIFIED_AND_PARTNERED]: {
        IconComponent: _.U,
        foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: o.A.unsafe_rawColors.GREEN_360.css,
    },
    [R._.VERIFIED]: {
        IconComponent: _.U,
        foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: o.A.unsafe_rawColors.GREEN_360.css,
    },
    [R._.PARTNERED]: {
        IconComponent: (0, u.k)(b.A),
        foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: o.A.unsafe_rawColors.BRAND_500.css,
    },
    [R._.COMMUNITY]: {
        IconComponent: p.f,
        foregroundDarkColor: o.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: o.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: f.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: o.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [R._.DISCOVERABLE]: {
        IconComponent: h.L,
        foregroundDarkColor: o.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: o.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: f.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: o.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [R._.NONE]: {},
};
function M(e) {
    let { guildTraits: t } = e;
    return (0, n.jsxs)("div", {
        className: y.V8,
        children: [
            (0, n.jsxs)("div", {
                className: a()(y.f, y.N5),
                children: [
                    (0, n.jsx)(N.A, { width: 18, height: 18, className: y.F8 }),
                    (0, n.jsx)(m.E, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: x.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: y.f,
                children: (0, n.jsx)(m.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: L.intl.format(L.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function O(e) {
    let { badgeType: t, guildTraits: i } = e,
        { tooltipTitle: l, tooltipSubtitle: r, tooltipDescription: a } = (0, D.V)(t, i.visibility);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: y.Rf,
                children: [
                    (0, n.jsx)(m.E, { color: "interactive-text-active", variant: "text-xs/bold", children: l }),
                    null != r ? (0, n.jsx)(m.E, { color: "text-muted", variant: "text-xs/medium", children: r }) : null,
                    null != a ? (0, n.jsx)(m.E, { color: "text-muted", variant: "text-xs/medium", children: a }) : null,
                ],
            }),
            i.premium ? (0, n.jsx)(M, { guildTraits: i }) : null,
        ],
    });
}
function U(e) {
    let t,
        i,
        {
            guild: r,
            tooltipColor: a = g.ST.Colors.BRAND,
            tooltipPosition: o,
            className: c,
            flowerStarClassName: _,
            iconClassName: u,
            badgeStrokeColor: p,
            badgeColor: h,
            disableBoostClick: m,
            "aria-label": f = !1,
            ...b
        } = e,
        N = b.size ?? 18,
        x = (0, s.bG)([T.default, C.Ay], () => {
            let e = T.default.getCurrentUser();
            return C.Ay.isMember(r?.id, e?.id);
        }),
        D = (0, s.bG)([v.A], () => v.A.theme),
        L = (0, w.Jp)(r),
        M = (0, R.K)(L),
        U = l.useMemo(() => L.premium && x && !m, [m, L.premium, x]),
        P = l.useCallback(
            (e) => {
                U &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, I.K4)({
                        guildId: r.id,
                        location: { section: S.JJy.GUILD_HEADER, object: S.ZSU.BOOST_GEM_ICON },
                    }));
            },
            [U, r.id],
        );
    if (M === R._.NONE) return null;
    let {
        IconComponent: k,
        backgroundDarkColor: F,
        backgroundLightColor: G,
        foregroundDarkColor: B,
        foregroundLightColor: V,
        premiumBackgroundColor: H,
        premiumForegroundColor: W,
        sizeAdjustment: Y,
    } = j[M];
    if (null == k) return null;
    L.premium && ((t = W), (i = H));
    let Z = (0, d.M)(D) ? B : V,
        J = (0, d.M)(D) ? F : G;
    (t = t ?? Z), (i = i ?? J);
    let K = Math.floor(0.75 * N) - (Y ?? 0);
    return (0, n.jsx)(g.ST, {
        color: a,
        position: o,
        "aria-label": f,
        text: (0, n.jsx)(O, { badgeType: M, guildTraits: L }),
        tooltipContentClassName: y.Hj,
        children: (e) =>
            (0, n.jsx)(E.D, {
                onClick: P,
                tabIndex: U ? 0 : -1,
                children: (0, n.jsx)(A.A, {
                    ...e,
                    className: c,
                    flowerStarClassName: _,
                    allowFullSizedIcon: !0,
                    color: i ?? h,
                    stroke: p,
                    size: N,
                    children: (0, n.jsx)(k, {
                        size: "custom",
                        width: K,
                        height: K,
                        className: u,
                        color: t ?? "currentColor",
                    }),
                }),
            }),
    });
}
