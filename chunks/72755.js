n.d(t, { A: () => _ });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(661531),
    o = n(97808),
    u = n(654107),
    c = n(707683);
let d = function (e) {
    let { children: t, shouldAnimate: n } = e;
    return n
        ? (0, i.jsx)("div", { className: c.nw, children: (0, i.jsx)("div", { className: c.WH, children: t }) })
        : t;
};
var h = n(543699),
    m = n(999291),
    A = n(920601),
    E = n(903209);
let f = (0, n(945810).mj)({
    name: "2026-09-video-background-profile-fetch",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var g = n(652215),
    p = n(996988),
    C = n(621647);
let _ = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: l,
            userId: c,
            guildId: _,
            pulseSpeakingIndicator: b = !1,
            speaking: S = !1,
            ...T
        } = e,
        I = l ?? n,
        v = (0, u.Ay)(I, a.A.unsafe_rawColors.PRIMARY_800.css),
        O = f.useConfig({ location: "VideoBackground" }).enabled,
        y = (0, m.Ay)(c ?? g.dJq, _),
        R = (0, h.tM)(y?.themeColors?.[0]) ?? g.NJ8.DARK,
        { profileThemeStyle: x, profileThemeClassName: N } = (0, A.A)({
            theme: R,
            themeType: p.d.VIDEO_TILE_BACKGROUND,
            primaryColor: y?.themeColors?.[0] ?? null,
            secondaryColor: y?.themeColors?.[1] ?? null,
        }),
        M = y?.themeColors?.[0] != null && y?.themeColors?.[1] != null;
    if (
        (r.useEffect(() => {
            null != c && O && (0, E.A)(c, void 0, { guildId: _ });
        }, [O, c, _]),
        null == n)
    )
        return null;
    let j = (0, i.jsx)(o.eu, { className: C.R, src: n, ...T }),
        D = { ...t, backgroundColor: v };
    return (0, i.jsx)("div", {
        style: M ? { ...t, ...x } : { ...D },
        className: s()(C.T, { [N]: M }),
        children: b ? (0, i.jsx)(d, { shouldAnimate: S, children: j }) : j,
    });
};
