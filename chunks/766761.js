n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(661531),
    o = n(97808),
    c = n(654107),
    u = n(977132);
let d = function (e) {
    let { children: t, shouldAnimate: n } = e;
    return n
        ? (0, i.jsx)("div", { className: u.nw, children: (0, i.jsx)("div", { className: u.WH, children: t }) })
        : t;
};
var A = n(458024),
    h = n(543699),
    m = n(999291),
    g = n(920601),
    p = n(903209),
    f = n(652215),
    E = n(996988),
    b = n(564548);
let C = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: l,
            userId: u,
            guildId: C,
            pulseSpeakingIndicator: v = !1,
            speaking: S = !1,
            ...y
        } = e,
        T = l ?? n,
        x = (0, c.Ay)(T, a.A.unsafe_rawColors.PRIMARY_800.css),
        O = (0, m.Ay)(u ?? f.dJq, C),
        _ = (0, h.tM)(O?.themeColors?.[0]) ?? f.NJ8.DARK,
        { profileThemeStyle: j, profileThemeClassName: I } = (0, g.A)({
            theme: _,
            themeType: E.d.VIDEO_TILE_BACKGROUND,
            primaryColor: O?.themeColors?.[0] ?? null,
            secondaryColor: O?.themeColors?.[1] ?? null,
        }),
        R = (0, A.Ay)("VideoBackground-web"),
        D = O?.themeColors?.[0] != null && O?.themeColors?.[1] != null,
        N = R && D;
    if (
        (r.useEffect(() => {
            null != u && R && (0, p.A)(u, void 0, { guildId: C, dispatchWait: !0 });
        }, [R, u, C]),
        null == n)
    )
        return null;
    let M = (0, i.jsx)(o.eu, { className: b.R, src: n, ...y }),
        L = { ...t, backgroundColor: x };
    return (0, i.jsx)("div", {
        style: N ? { ...t, ...j } : { ...L },
        className: s()(b.T, { [I]: N }),
        children: v ? (0, i.jsx)(d, { shouldAnimate: S, children: M }) : M,
    });
};
