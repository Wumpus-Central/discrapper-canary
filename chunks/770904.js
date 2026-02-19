n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(192308),
    o = n(397927),
    d = n(379848),
    c = n(652793),
    u = n(361158),
    h = n(976860),
    A = n(186111),
    p = n(249584),
    m = n(652215),
    g = n(746080),
    _ = n(49999),
    f = n(294726),
    x = n(985018),
    C = n(838554);
let E = l.memo(function (e) {
    let { guildId: t, selected: n } = e,
        E = (0, r.useHasAnyModalOpen)(),
        I = (0, s.bG)([A.A], () => A.A.hasLayers()),
        b = (0, u.xr)((e) => e.fullScreenLayers.length > 0),
        [N, S] = (0, d.ww)([a.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        T = N === a.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [v, y] = (0, d.ww)(E || I || b || !T ? [] : [a.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        j = l.useCallback(
            (e) => {
                S(e), y(e);
            },
            [S, y],
        ),
        R = l.useCallback(() => {
            j(_.i.USER_DISMISS), (0, h.pX)(m.BVt.CHANNEL(t, g.VV.GAME_SERVERS));
        }, [t, j]),
        O = l.useRef(null),
        L = v === a.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        M = l.useCallback(() => (0, i.jsx)(p.mn, { channelRowRef: O, guildId: t, markAsDismissed: j }), [t, j]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.G, {
                ref: O,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, i.jsx)(o._xR, { size: "md", className: e, color: "currentColor" }),
                text: x.intl.string(f.default.vCzwM7),
                selected: n,
                onClick: R,
                trailing: T
                    ? (0, i.jsx)(o.LpS, { disableColor: !0, text: x.intl.string(x.t.y2b7CA), className: C.q })
                    : null,
            }),
            L && M(),
        ],
    });
});
