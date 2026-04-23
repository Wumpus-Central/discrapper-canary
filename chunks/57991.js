i.d(t, { A: () => O });
var r = i(627968),
    n = i(64700),
    s = i(503698),
    o = i.n(s),
    l = i(311907),
    a = i(827734),
    c = i(462887),
    d = i(306471),
    _ = i(478016),
    u = i(565787),
    h = i(332837),
    p = i(998445),
    g = i(834730),
    m = i(781696),
    f = i(939249),
    A = i(404374),
    E = i(509536),
    v = i(496885),
    b = i(544028),
    x = i(696451),
    C = i(287809),
    I = i(816166),
    w = i(813098),
    R = i(473145),
    T = i(426983),
    N = i(176128),
    L = i(981883),
    j = i(652215),
    y = i(985018),
    M = i(40544);
let P = {
    [T._.STAFF]: {
        IconComponent: d.V,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [T._.VERIFIED_AND_PARTNERED]: {
        IconComponent: _.U,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [T._.VERIFIED]: {
        IconComponent: _.U,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [T._.PARTNERED]: {
        IconComponent: (0, u.k)(I.A),
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: a.A.unsafe_rawColors.BRAND_500.css,
    },
    [T._.COMMUNITY]: {
        IconComponent: h.f,
        foregroundDarkColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: A.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: a.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [T._.DISCOVERABLE]: {
        IconComponent: p.L,
        foregroundDarkColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: A.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: a.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [T._.NONE]: {},
};
function S(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)("div", {
        className: M.V8,
        children: [
            (0, r.jsxs)("div", {
                className: o()(M.f, M.N5),
                children: [
                    (0, r.jsx)(w.A, { width: 18, height: 18, className: M.F8 }),
                    (0, r.jsx)(g.E, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: R.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: M.f,
                children: (0, r.jsx)(g.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: y.intl.format(y.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function D(e) {
    let { badgeType: t, guildTraits: i } = e,
        { tooltipTitle: n, tooltipSubtitle: s, tooltipDescription: o } = (0, L.V)(t, i.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: M.Rf,
                children: [
                    (0, r.jsx)(g.E, { color: "interactive-text-active", variant: "text-xs/bold", children: n }),
                    null != s ? (0, r.jsx)(g.E, { color: "text-muted", variant: "text-xs/medium", children: s }) : null,
                    null != o ? (0, r.jsx)(g.E, { color: "text-muted", variant: "text-xs/medium", children: o }) : null,
                ],
            }),
            i.premium ? (0, r.jsx)(S, { guildTraits: i }) : null,
        ],
    });
}
function O(e) {
    let t,
        i,
        {
            guild: s,
            tooltipColor: o = m.ST.Colors.BRAND,
            tooltipPosition: a,
            className: d,
            flowerStarClassName: _,
            iconClassName: u,
            badgeStrokeColor: h,
            badgeColor: p,
            disableBoostClick: g,
            "aria-label": A = !1,
            ...I
        } = e,
        w = I.size ?? 18,
        R = (0, l.bG)([C.default, x.Ay], () => {
            let e = C.default.getCurrentUser();
            return x.Ay.isMember(s?.id, e?.id);
        }),
        L = (0, l.bG)([b.A], () => b.A.theme),
        y = (0, N.Jp)(s),
        S = (0, T.K)(y),
        O = n.useMemo(() => y.premium && R && !g, [g, y.premium, R]),
        B = n.useCallback(
            (e) => {
                O &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, E.K4)({
                        guildId: s.id,
                        location: { section: j.JJy.GUILD_HEADER, object: j.ZSU.BOOST_GEM_ICON },
                    }));
            },
            [O, s.id],
        );
    if (S === T._.NONE) return null;
    let {
        IconComponent: V,
        backgroundDarkColor: U,
        backgroundLightColor: k,
        foregroundDarkColor: G,
        foregroundLightColor: F,
        premiumBackgroundColor: H,
        premiumForegroundColor: W,
        sizeAdjustment: K,
    } = P[S];
    if (null == V) return null;
    y.premium && ((t = W), (i = H));
    let z = (0, c.M)(L) ? G : F,
        Y = (0, c.M)(L) ? U : k;
    (t = t ?? z), (i = i ?? Y);
    let Z = Math.floor(0.75 * w) - (K ?? 0);
    return (0, r.jsx)(m.ST, {
        color: o,
        position: a,
        "aria-label": A,
        text: (0, r.jsx)(D, { badgeType: S, guildTraits: y }),
        tooltipContentClassName: M.Hj,
        children: (e) =>
            (0, r.jsx)(f.D, {
                onClick: B,
                tabIndex: O ? 0 : -1,
                children: (0, r.jsx)(v.A, {
                    ...e,
                    className: d,
                    flowerStarClassName: _,
                    allowFullSizedIcon: !0,
                    color: i ?? p,
                    stroke: h,
                    size: w,
                    children: (0, r.jsx)(V, {
                        size: "custom",
                        width: Z,
                        height: Z,
                        className: u,
                        color: t ?? "currentColor",
                    }),
                }),
            }),
    });
}
