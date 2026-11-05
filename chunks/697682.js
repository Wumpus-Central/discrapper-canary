n.d(t, { A: () => C });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(646514),
    o = n(97808),
    c = n(654107),
    u = n(707683);
let d = function (e) {
    let { children: t, shouldAnimate: n } = e;
    return n
        ? (0, i.jsx)("div", { className: u.nw, children: (0, i.jsx)("div", { className: u.WH, children: t }) })
        : t;
};
var m = n(543699),
    h = n(527212),
    g = n(991988),
    f = n(917445);
let A = (0, n(945810).mj)({
    name: "2026-09-video-background-profile-fetch",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var p = n(652215),
    E = n(996988),
    b = n(621647);
let C = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: l,
            userId: u,
            guildId: C,
            pulseSpeakingIndicator: v = !1,
            speaking: y = !1,
            ...I
        } = e,
        T = l ?? n,
        _ = (0, c.Ay)(T, a.A.unsafe_rawColors.PRIMARY_800.css),
        R = A.useConfig({ location: "VideoBackground" }).enabled,
        x = (0, h.Ay)(u ?? "", C),
        S = (0, m.tM)(x?.themeColors?.[0]) ?? p.NJ8.DARK,
        { profileThemeStyle: O, profileThemeClassName: k } = (0, g.A)({
            theme: S,
            themeType: E.d.VIDEO_TILE_BACKGROUND,
            primaryColor: x?.themeColors?.[0] ?? null,
            secondaryColor: x?.themeColors?.[1] ?? null,
        }),
        N = x?.themeColors?.[0] != null && x?.themeColors?.[1] != null;
    if (
        (r.useEffect(() => {
            null != u && R && (0, f.A)(u, void 0, { guildId: C });
        }, [R, u, C]),
        null == n)
    )
        return null;
    let M = (0, i.jsx)(o.eu, { className: b.R, src: n, ...I }),
        P = { ...t, backgroundColor: _ };
    return (0, i.jsx)("div", {
        style: N ? { ...t, ...O } : { ...P },
        className: s()(b.T, { [k]: N }),
        children: v ? (0, i.jsx)(d, { shouldAnimate: y, children: M }) : M,
    });
};
