"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(661531),
    l = n(97808),
    u = n(654107),
    c = n(977132);
let d = (e) => {
        let { children: t, shouldAnimate: n } = e;
        return n
            ? (0, i.jsx)("div", { className: c.nw, children: (0, i.jsx)("div", { className: c.WH, children: t }) })
            : t;
    },
    _ = (0, n(240921).Ay)({
        kind: "user",
        name: "2026-02-mobile-visual-refresh",
        defaultConfig: { enabled: !1, chatInputFloating: !1, chatInputLegacySendButton: !1 },
        variations: {
            0: { enabled: !1, chatInputFloating: !1, chatInputLegacySendButton: !1 },
            1: { enabled: !0, chatInputFloating: !1, chatInputLegacySendButton: !1 },
            2: { enabled: !0, chatInputFloating: !0, chatInputLegacySendButton: !1 },
            3: { enabled: !0, chatInputFloating: !0, chatInputLegacySendButton: !1 },
            4: { enabled: !0, chatInputFloating: !0, chatInputLegacySendButton: !0 },
        },
    });
var h = n(543699),
    f = n(999291),
    p = n(920601),
    E = n(903209),
    m = n(652215),
    g = n(996988),
    A = n(564548);
let I = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: s,
            userId: c,
            guildId: I,
            pulseSpeakingIndicator: T = !1,
            speaking: S = !1,
            ...y
        } = e,
        C = s ?? n,
        N = (0, u.Ay)(C, o.A.unsafe_rawColors.PRIMARY_800.css),
        v = (0, f.Ay)(c ?? m.dJq, I),
        R = (0, h.tM)(v?.themeColors?.[0]) ?? m.NJ8.DARK,
        { profileThemeStyle: O, profileThemeClassName: b } = (0, p.A)({
            theme: R,
            themeType: g.d.VIDEO_TILE_BACKGROUND,
            primaryColor: v?.themeColors?.[0] ?? null,
            secondaryColor: v?.themeColors?.[1] ?? null,
        }),
        D = _.useConfig({ location: "VideoBackground-web" }).enabled,
        L = v?.themeColors?.[0] != null && v?.themeColors?.[1] != null,
        w = D && L;
    if (
        (r.useEffect(() => {
            null != c && D && (0, E.A)(c, void 0, { guildId: I, dispatchWait: !0 });
        }, [D, c, I]),
        null == n)
    )
        return null;
    let M = (0, i.jsx)(l.eu, { className: A.R, src: n, ...y }),
        P = { ...t, backgroundColor: N };
    return (0, i.jsx)("div", {
        style: w ? { ...t, ...O } : { ...P },
        className: a()(A.T, { [b]: w }),
        children: T ? (0, i.jsx)(d, { shouldAnimate: S, children: M }) : M,
    });
};
