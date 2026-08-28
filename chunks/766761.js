n.d(t, { A: () => p });
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
    g = n(903209),
    E = n(652215),
    f = n(996988),
    b = n(621647);
let p = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: l,
            userId: c,
            guildId: p,
            pulseSpeakingIndicator: C = !1,
            speaking: S = !1,
            ...v
        } = e,
        _ = l ?? n,
        O = (0, u.Ay)(_, a.A.unsafe_rawColors.PRIMARY_800.css),
        T = (0, h.Ay)(c ?? E.dJq, p),
        x = (0, A.tM)(T?.themeColors?.[0]) ?? E.NJ8.DARK,
        { profileThemeStyle: y, profileThemeClassName: j } = (0, m.A)({
            theme: x,
            themeType: f.d.VIDEO_TILE_BACKGROUND,
            primaryColor: T?.themeColors?.[0] ?? null,
            secondaryColor: T?.themeColors?.[1] ?? null,
        }),
        R = T?.themeColors?.[0] != null && T?.themeColors?.[1] != null;
    if (
        (r.useEffect(() => {
            null != c && (0, g.A)(c, void 0, { guildId: p, dispatchWait: !0 });
        }, [c, p]),
        null == n)
    )
        return null;
    let I = (0, i.jsx)(o.eu, { className: b.R, src: n, ...v }),
        N = { ...t, backgroundColor: O };
    return (0, i.jsx)("div", {
        style: R ? { ...t, ...y } : { ...N },
        className: s()(b.T, { [j]: R }),
        children: C ? (0, i.jsx)(d, { shouldAnimate: S, children: I }) : I,
    });
};
