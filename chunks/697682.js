n.d(t, { A: () => b });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(646514),
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
    h = n(527212),
    f = n(991988),
    g = n(917445);
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
            speaking: I = !1,
            ..._
        } = e,
        T = l ?? n,
        y = (0, u.Ay)(T, a.A.unsafe_rawColors.PRIMARY_800.css),
        R = A.useConfig({ location: "VideoBackground" }).enabled,
        S = (0, h.Ay)(c ?? "", b),
        x = (0, m.tM)(S?.themeColors?.[0]) ?? p.NJ8.DARK,
        { profileThemeStyle: O, profileThemeClassName: P } = (0, f.A)({
            theme: x,
            themeType: E.d.VIDEO_TILE_BACKGROUND,
            primaryColor: S?.themeColors?.[0] ?? null,
            secondaryColor: S?.themeColors?.[1] ?? null,
        }),
        N = S?.themeColors?.[0] != null && S?.themeColors?.[1] != null;
    if (
        (r.useEffect(() => {
            null != c && R && (0, g.A)(c, void 0, { guildId: b });
        }, [R, c, b]),
        null == n)
    )
        return null;
    let k = (0, i.jsx)(o.eu, { className: C.R, src: n, ..._ }),
        M = { ...t, backgroundColor: y };
    return (0, i.jsx)("div", {
        style: N ? { ...t, ...O } : { ...M },
        className: s()(C.T, { [P]: N }),
        children: v ? (0, i.jsx)(d, { shouldAnimate: I, children: k }) : k,
    });
};
