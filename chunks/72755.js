n.d(t, { A: () => C });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(661531),
    o = n(97808),
    c = n(654107),
    u = n(707683);
let d = function (e) {
    let { children: t, shouldAnimate: n } = e;
    return n
        ? (0, i.jsx)("div", { className: u.nw, children: (0, i.jsx)("div", { className: u.WH, children: t }) })
        : t;
};
var h = n(543699),
    m = n(999291),
    A = n(920601),
    g = n(903209);
let f = (0, n(945810).mj)({
    name: "2026-09-video-background-profile-fetch",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var b = n(652215),
    E = n(996988),
    p = n(621647);
let C = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: l,
            userId: u,
            guildId: C,
            pulseSpeakingIndicator: S = !1,
            speaking: v = !1,
            ..._
        } = e,
        y = l ?? n,
        O = (0, c.Ay)(y, a.A.unsafe_rawColors.PRIMARY_800.css),
        T = f.useConfig({ location: "VideoBackground" }).enabled,
        x = (0, m.Ay)(u ?? b.dJq, C),
        j = (0, h.tM)(x?.themeColors?.[0]) ?? b.NJ8.DARK,
        { profileThemeStyle: I, profileThemeClassName: R } = (0, A.A)({
            theme: j,
            themeType: E.d.VIDEO_TILE_BACKGROUND,
            primaryColor: x?.themeColors?.[0] ?? null,
            secondaryColor: x?.themeColors?.[1] ?? null,
        }),
        M = x?.themeColors?.[0] != null && x?.themeColors?.[1] != null;
    if (
        (r.useEffect(() => {
            null != u && T && (0, g.A)(u, void 0, { guildId: C, dispatchWait: !0 });
        }, [T, u, C]),
        null == n)
    )
        return null;
    let N = (0, i.jsx)(o.eu, { className: p.R, src: n, ..._ }),
        L = { ...t, backgroundColor: O };
    return (0, i.jsx)("div", {
        style: M ? { ...t, ...I } : { ...L },
        className: s()(p.T, { [R]: M }),
        children: S ? (0, i.jsx)(d, { shouldAnimate: v, children: N }) : N,
    });
};
