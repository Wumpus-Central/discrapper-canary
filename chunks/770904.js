n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(192308),
    o = n(397927),
    d = n(932001),
    c = n(652793),
    u = n(361158),
    h = n(976860),
    A = n(186111),
    _ = n(249584),
    m = n(652215),
    g = n(746080),
    p = n(49999),
    f = n(294726),
    x = n(985018),
    E = n(866153);
let I = l.memo(function (e) {
    let { guildId: t, selected: n } = e,
        I = (0, r.useHasAnyModalOpen)(),
        C = (0, s.bG)([A.A], () => A.A.hasLayers()),
        N = (0, u.xr)((e) => e.fullScreenLayers.length > 0),
        [T, S] = (0, d.ww)([a.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        b = T === a.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [y, v] = (0, d.ww)(I || C || N || !b ? [] : [a.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        j = l.useCallback(
            (e) => {
                S(e), v(e);
            },
            [S, v],
        ),
        R = l.useCallback(() => {
            j(p.i.USER_DISMISS), (0, h.pX)(m.BVt.CHANNEL(t, g.VV.GAME_SERVERS));
        }, [t, j]),
        O = l.useRef(null),
        L = y === a.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        M = l.useCallback(() => (0, i.jsx)(_.mn, { channelRowRef: O, guildId: t, markAsDismissed: j }), [t, j]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.G, {
                ref: O,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, i.jsx)(o._xR, { size: "md", className: e, color: "currentColor" }),
                text: x.intl.string(f.default.vCzwM7),
                selected: n,
                onClick: R,
                trailing: b
                    ? (0, i.jsx)(o.LpS, { disableColor: !0, text: x.intl.string(x.t.y2b7CA), className: E.q })
                    : null,
            }),
            L && M(),
        ],
    });
});
