n.d(t, { A: () => C });
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
var m = n(543699),
    h = n(999291),
    g = n(920601),
    f = n(903209);
let p = (0, n(945810).mj)({
    name: "2026-09-video-background-profile-fetch",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var A = n(652215),
    E = n(996988),
    b = n(621647);
let C = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: l,
            userId: c,
            guildId: C,
            pulseSpeakingIndicator: v = !1,
            speaking: y = !1,
            ...T
        } = e,
        _ = l ?? n,
        I = (0, u.Ay)(_, a.A.unsafe_rawColors.PRIMARY_800.css),
        R = p.useConfig({ location: "VideoBackground" }).enabled,
        x = (0, h.Ay)(c ?? A.dJq, C),
        S = (0, m.tM)(x?.themeColors?.[0]) ?? A.NJ8.DARK,
        { profileThemeStyle: O, profileThemeClassName: k } = (0, g.A)({
            theme: S,
            themeType: E.d.VIDEO_TILE_BACKGROUND,
            primaryColor: x?.themeColors?.[0] ?? null,
            secondaryColor: x?.themeColors?.[1] ?? null,
        }),
        N = x?.themeColors?.[0] != null && x?.themeColors?.[1] != null;
    if (
        (r.useEffect(() => {
            null != c && R && (0, f.A)(c, void 0, { guildId: C });
        }, [R, c, C]),
        null == n)
    )
        return null;
    let M = (0, i.jsx)(o.eu, { className: b.R, src: n, ...T }),
        P = { ...t, backgroundColor: I };
    return (0, i.jsx)("div", {
        style: N ? { ...t, ...O } : { ...P },
        className: s()(b.T, { [k]: N }),
        children: v ? (0, i.jsx)(d, { shouldAnimate: y, children: M }) : M,
    });
};
