"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(192308),
    o = n(397927),
    c = n(932001),
    d = n(652793),
    u = n(361158),
    h = n(976860),
    A = n(186111),
    m = n(249584),
    _ = n(652215),
    p = n(746080),
    g = n(49999),
    f = n(738072),
    x = n(985018),
    E = n(64668);
let C = s.memo(function (e) {
    let { guildId: t, selected: n } = e,
        C = (0, a.useHasAnyModalOpen)(),
        I = (0, l.bG)([A.A], () => A.A.hasLayers()),
        N = (0, u.xr)((e) => e.fullScreenLayers.length > 0),
        [b, S] = (0, c.ww)([r.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        T = b === r.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [v, y] = (0, c.ww)(C || I || N || !T ? [] : [r.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        j = s.useCallback(
            (e) => {
                S(e), y(e);
            },
            [S, y],
        ),
        R = s.useCallback(() => {
            j(g.i.USER_DISMISS), (0, h.pX)(_.BVt.CHANNEL(t, p.VV.GAME_SERVERS));
        }, [t, j]),
        O = s.useRef(null),
        L = v === r.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        M = s.useCallback(() => (0, i.jsx)(m.mn, { channelRowRef: O, guildId: t, markAsDismissed: j }), [t, j]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.G, {
                ref: O,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, i.jsx)(o._xR, { size: "md", className: e, color: "currentColor" }),
                text: x.intl.string(f.default.vCzwM7),
                selected: n,
                onClick: R,
                trailing: T
                    ? (0, i.jsx)(o.LpS, { disableColor: !0, text: x.intl.string(x.t.y2b7CA), className: E.q })
                    : null,
            }),
            L && M(),
        ],
    });
});
