n.d(t, { A: () => y });
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
var h = n(543699),
    m = n(527212),
    p = n(991988),
    f = n(917445);
let g = (0, n(945810).mj)({
    name: "2026-09-video-background-profile-fetch",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var A = n(652215),
    v = n(996988),
    E = n(621647);
let y = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: l,
            userId: c,
            guildId: y,
            pulseSpeakingIndicator: I = !1,
            speaking: C = !1,
            ...b
        } = e,
        S = l ?? n,
        w = (0, u.Ay)(S, a.A.unsafe_rawColors.PRIMARY_800.css),
        x = g.useConfig({ location: "VideoBackground" }).enabled,
        T = (0, m.Ay)(c ?? "", y),
        R = (0, h.tM)(T?.themeColors?.[0]) ?? A.NJ8.DARK,
        { profileThemeStyle: _, profileThemeClassName: k } = (0, p.A)({
            theme: R,
            themeType: v.d.VIDEO_TILE_BACKGROUND,
            primaryColor: T?.themeColors?.[0] ?? null,
            secondaryColor: T?.themeColors?.[1] ?? null,
        }),
        P = T?.themeColors?.[0] != null && T?.themeColors?.[1] != null;
    if (
        (r.useEffect(() => {
            null != c && x && (0, f.A)(c, void 0, { guildId: y });
        }, [x, c, y]),
        null == n)
    )
        return null;
    let M = (0, i.jsx)(o.eu, { className: E.R, src: n, ...b }),
        O = { ...t, backgroundColor: w };
    return (0, i.jsx)("div", {
        style: P ? { ...t, ..._ } : { ...O },
        className: s()(E.T, { [k]: P }),
        children: I ? (0, i.jsx)(d, { shouldAnimate: C, children: M }) : M,
    });
};
