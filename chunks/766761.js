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
var A = n(458024),
    h = n(543699),
    m = n(999291),
    g = n(920601),
    E = n(903209),
    f = n(652215),
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
        x = (0, m.Ay)(c ?? f.dJq, C),
        y = (0, h.tM)(x?.themeColors?.[0]) ?? f.NJ8.DARK,
        { profileThemeStyle: j, profileThemeClassName: R } = (0, g.A)({
            theme: y,
            themeType: b.d.VIDEO_TILE_BACKGROUND,
            primaryColor: x?.themeColors?.[0] ?? null,
            secondaryColor: x?.themeColors?.[1] ?? null,
        }),
        I = (0, A.Ay)("VideoBackground-web"),
        N = x?.themeColors?.[0] != null && x?.themeColors?.[1] != null,
        M = I && N;
    if (
        (r.useEffect(() => {
            null != c && I && (0, E.A)(c, void 0, { guildId: C, dispatchWait: !0 });
        }, [I, c, C]),
        null == n)
    )
        return null;
    let L = (0, i.jsx)(o.eu, { className: p.R, src: n, ..._ }),
        D = { ...t, backgroundColor: T };
    return (0, i.jsx)("div", {
        style: M ? { ...t, ...j } : { ...D },
        className: s()(p.T, { [R]: M }),
        children: S ? (0, i.jsx)(d, { shouldAnimate: v, children: L }) : L,
    });
};
