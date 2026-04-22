n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(192308),
    o = n(687966),
    d = n(777666),
    c = n(932001),
    u = n(652793),
    h = n(361158),
    A = n(976860),
    _ = n(186111),
    m = n(249584),
    g = n(652215),
    p = n(746080),
    f = n(49999),
    E = n(76660),
    x = n(985018),
    I = n(263097);
let C = l.memo(function (e) {
    let { guildId: t, selected: n } = e,
        C = (0, r.useHasAnyModalOpen)(),
        b = (0, s.bG)([_.A], () => _.A.hasLayers()),
        N = (0, h.xr)((e) => e.fullScreenLayers.length > 0),
        [S, v] = (0, c.ww)([a.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        T = S === a.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [y, R] = (0, c.ww)(C || b || N || !T ? [] : [a.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        j = l.useCallback(
            (e) => {
                v(e), R(e);
            },
            [v, R],
        ),
        L = l.useCallback(() => {
            j(f.i.USER_DISMISS), (0, A.pX)(g.BVt.CHANNEL(t, p.VV.GAME_SERVERS));
        }, [t, j]),
        O = l.useRef(null),
        G = y === a.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        D = l.useCallback(() => (0, i.jsx)(m.mn, { channelRowRef: O, guildId: t, markAsDismissed: j }), [t, j]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.G, {
                ref: O,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, i.jsx)(o._, { size: "md", className: e, color: "currentColor" }),
                text: x.intl.string(E.default.vCzwM7),
                selected: n,
                onClick: L,
                trailing: T
                    ? (0, i.jsx)(d.Lp, { disableColor: !0, text: x.intl.string(x.t.y2b7CA), className: I.q })
                    : null,
            }),
            G && D(),
        ],
    });
});
