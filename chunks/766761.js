"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(661531),
    o = n(97808),
    d = n(654107),
    c = n(977132);
let u = function (e) {
    let { children: t, shouldAnimate: n } = e;
    return n
        ? (0, i.jsx)("div", { className: c.nw, children: (0, i.jsx)("div", { className: c.WH, children: t }) })
        : t;
};
var _ = n(458024),
    E = n(543699),
    A = n(999291),
    h = n(920601),
    I = n(903209),
    f = n(652215),
    p = n(996988),
    T = n(564548);
let m = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: a,
            userId: c,
            guildId: m,
            pulseSpeakingIndicator: g = !1,
            speaking: S = !1,
            ...N
        } = e,
        C = a ?? n,
        O = (0, d.Ay)(C, l.A.unsafe_rawColors.PRIMARY_800.css),
        R = (0, A.Ay)(c ?? f.dJq, m),
        L = (0, E.tM)(R?.themeColors?.[0]) ?? f.NJ8.DARK,
        { profileThemeStyle: D, profileThemeClassName: y } = (0, h.A)({
            theme: L,
            themeType: p.d.VIDEO_TILE_BACKGROUND,
            primaryColor: R?.themeColors?.[0] ?? null,
            secondaryColor: R?.themeColors?.[1] ?? null,
        }),
        v = (0, _.Ay)("VideoBackground-web"),
        b = R?.themeColors?.[0] != null && R?.themeColors?.[1] != null,
        M = v && b;
    if (
        (r.useEffect(() => {
            null != c && v && (0, I.A)(c, void 0, { guildId: m, dispatchWait: !0 });
        }, [v, c, m]),
        null == n)
    )
        return null;
    let P = (0, i.jsx)(o.eu, { className: T.R, src: n, ...N }),
        U = { ...t, backgroundColor: O };
    return (0, i.jsx)("div", {
        style: M ? { ...t, ...D } : { ...U },
        className: s()(T.T, { [y]: M }),
        children: g ? (0, i.jsx)(u, { shouldAnimate: S, children: P }) : P,
    });
};
