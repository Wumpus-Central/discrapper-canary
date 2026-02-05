n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(192308),
    o = n(397927),
    d = n(379848),
    c = n(652793),
    u = n(976860),
    h = n(186111),
    A = n(249584),
    g = n(652215),
    m = n(746080),
    p = n(49999),
    _ = n(294726),
    x = n(985018),
    f = n(838554);
let E = l.memo(function (e) {
    let { guildId: t, selected: n } = e,
        E = (0, r.useHasAnyModalOpen)(),
        C = (0, s.bG)([h.A], () => h.A.hasLayers()),
        [I, S] = (0, d.ww)([a.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        b = I === a.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [N, T] = (0, d.ww)(E || C || !b ? [] : [a.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        j = l.useCallback(
            (e) => {
                S(e), T(e);
            },
            [S, T],
        ),
        v = l.useCallback(() => {
            j(p.i.USER_DISMISS), (0, u.pX)(g.BVt.CHANNEL(t, m.VV.GAME_SERVERS));
        }, [t, j]),
        y = l.useRef(null),
        R = N === a.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        O = l.useCallback(() => (0, i.jsx)(A.mn, { channelRowRef: y, guildId: t, markAsDismissed: j }), [t, j]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.G, {
                ref: y,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, i.jsx)(o._xR, { size: "md", className: e, color: "currentColor" }),
                text: x.intl.string(_.default.vCzwM7),
                selected: n,
                onClick: v,
                trailing: b
                    ? (0, i.jsx)(o.LpS, { disableColor: !0, text: x.intl.string(x.t.y2b7CA), className: f.q })
                    : null,
            }),
            R && O(),
        ],
    });
});
