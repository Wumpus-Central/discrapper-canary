n.d(t, { A: () => b });
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
let A = (0, n(945810).mj)({
    name: "2026-09-video-background-profile-fetch",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var p = n(652215),
    E = n(996988),
    C = n(621647);
let b = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: l,
            userId: c,
            guildId: b,
            pulseSpeakingIndicator: v = !1,
            speaking: T = !1,
            ..._
        } = e,
        I = l ?? n,
        y = (0, u.Ay)(I, a.A.unsafe_rawColors.PRIMARY_800.css),
        S = A.useConfig({ location: "VideoBackground" }).enabled,
        R = (0, h.Ay)(c ?? p.dJq, b),
        x = (0, m.tM)(R?.themeColors?.[0]) ?? p.NJ8.DARK,
        { profileThemeStyle: O, profileThemeClassName: N } = (0, g.A)({
            theme: x,
            themeType: E.d.VIDEO_TILE_BACKGROUND,
            primaryColor: R?.themeColors?.[0] ?? null,
            secondaryColor: R?.themeColors?.[1] ?? null,
        }),
        k = R?.themeColors?.[0] != null && R?.themeColors?.[1] != null;
    if (
        (r.useEffect(() => {
            null != c && S && (0, f.A)(c, void 0, { guildId: b });
        }, [S, c, b]),
        null == n)
    )
        return null;
    let M = (0, i.jsx)(o.eu, { className: C.R, src: n, ..._ }),
        P = { ...t, backgroundColor: y };
    return (0, i.jsx)("div", {
        style: k ? { ...t, ...O } : { ...P },
        className: s()(C.T, { [N]: k }),
        children: v ? (0, i.jsx)(d, { shouldAnimate: T, children: M }) : M,
    });
};
