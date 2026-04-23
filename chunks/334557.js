"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(661531),
    l = n(97808),
    d = n(654107),
    _ = n(977132);
let u = (e) => {
        let { children: t, shouldAnimate: n } = e;
        return n
            ? (0, i.jsx)("div", { className: _.nw, children: (0, i.jsx)("div", { className: _.WH, children: t }) })
            : t;
    },
    c = (0, n(250105).Ay)({
        kind: "user",
        name: "2026-02-mobile-visual-refresh",
        defaultConfig: { enabled: !1, chatInputFloating: !1 },
        variations: {
            0: { enabled: !1, chatInputFloating: !1 },
            1: { enabled: !0, chatInputFloating: !1 },
            2: { enabled: !0, chatInputFloating: !0 },
        },
    });
var E = n(543699),
    h = n(999291),
    m = n(920601),
    f = n(576622),
    g = n(652215),
    p = n(996988),
    A = n(564548);
let I = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: s,
            userId: _,
            guildId: I,
            pulseSpeakingIndicator: T = !1,
            speaking: S = !1,
            ...N
        } = e,
        C = s ?? n,
        R = (0, d.Ay)(C, o.A.unsafe_rawColors.PRIMARY_800.css),
        O = (0, h.Ay)(_ ?? g.dJq, I),
        y = (0, E.tM)(O?.themeColors?.[0]) ?? g.NJ8.DARK,
        { profileThemeStyle: v, profileThemeClassName: D } = (0, m.A)({
            theme: y,
            themeType: p.d.VIDEO_TILE_BACKGROUND,
            primaryColor: O?.themeColors?.[0] ?? null,
            secondaryColor: O?.themeColors?.[1] ?? null,
        }),
        L = c.useConfig({ location: "VideoBackground-web" }).enabled,
        b = O?.themeColors?.[0] != null && O?.themeColors?.[1] != null,
        w = L && b;
    if (
        (r.useEffect(() => {
            null != _ && L && (0, f.A)(_, void 0, { guildId: I, dispatchWait: !0 });
        }, [L, _, I]),
        null == n)
    )
        return null;
    let P = (0, i.jsx)(l.eu, { className: A.R, src: n, ...N }),
        k = { ...t, backgroundColor: R };
    return (0, i.jsx)("div", {
        style: w ? { ...t, ...v } : { ...k },
        className: a()(A.T, { [D]: w }),
        children: T ? (0, i.jsx)(u, { shouldAnimate: S, children: P }) : P,
    });
};
