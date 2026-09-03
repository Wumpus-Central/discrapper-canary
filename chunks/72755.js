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
var A = n(543699),
    h = n(999291),
    m = n(920601),
    g = n(903209);
let f = (0, n(945810).mj)({
    name: "2026-09-video-background-profile-fetch",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var E = n(652215),
    b = n(996988),
    p = n(621647);
let C = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: l,
            userId: c,
            guildId: C,
            pulseSpeakingIndicator: S = !1,
            speaking: v = !1,
            ..._
        } = e,
        O = l ?? n,
        T = (0, u.Ay)(O, a.A.unsafe_rawColors.PRIMARY_800.css),
        x = f.useConfig({ location: "VideoBackground" }).enabled,
        y = (0, h.Ay)(c ?? E.dJq, C),
        j = (0, A.tM)(y?.themeColors?.[0]) ?? E.NJ8.DARK,
        { profileThemeStyle: R, profileThemeClassName: I } = (0, m.A)({
            theme: j,
            themeType: b.d.VIDEO_TILE_BACKGROUND,
            primaryColor: y?.themeColors?.[0] ?? null,
            secondaryColor: y?.themeColors?.[1] ?? null,
        }),
        N = y?.themeColors?.[0] != null && y?.themeColors?.[1] != null;
    if (
        (r.useEffect(() => {
            null != c && x && (0, g.A)(c, void 0, { guildId: C, dispatchWait: !0 });
        }, [x, c, C]),
        null == n)
    )
        return null;
    let M = (0, i.jsx)(o.eu, { className: p.R, src: n, ..._ }),
        L = { ...t, backgroundColor: T };
    return (0, i.jsx)("div", {
        style: N ? { ...t, ...R } : { ...L },
        className: s()(p.T, { [I]: N }),
        children: S ? (0, i.jsx)(d, { shouldAnimate: v, children: M }) : M,
    });
};
