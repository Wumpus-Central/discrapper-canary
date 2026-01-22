n.d(t, { A: () => O }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(554146),
    s = n(192308),
    o = n(397927),
    c = n(379848),
    u = n(652793),
    d = n(976860),
    f = n(186111),
    p = n(249584),
    h = n(652215),
    b = n(746080),
    g = n(49999),
    m = n(294726),
    A = n(985018),
    y = n(838554);
let O = l.memo(function (e) {
    let { guildId: t, selected: n } = e,
        O = (0, s.useHasAnyModalOpen)(),
        j = (0, i.bG)([f.A], () => f.A.hasLayers()),
        [v, x] = (0, c.ww)([a.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        E = v === a.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [_, C] = (0, c.ww)(O || j || !E ? [] : [a.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        S = l.useCallback(
            (e) => {
                x(e), C(e);
            },
            [x, C],
        ),
        I = l.useCallback(() => {
            S(g.i.USER_DISMISS), (0, d.pX)(h.BVt.CHANNEL(t, b.VV.GAME_SERVERS));
        }, [t, S]),
        N = l.useRef(null),
        T = _ === a.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        P = l.useCallback(
            () =>
                (0, r.jsx)(p.mn, {
                    channelRowRef: N,
                    guildId: t,
                    markAsDismissed: S,
                }),
            [t, S],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.G, {
                ref: N,
                id: "game-server-".concat(t),
                renderIcon: (e) =>
                    (0, r.jsx)(o._xR, {
                        size: "md",
                        className: e,
                        color: "currentColor",
                    }),
                text: A.intl.string(m.default.vCzwM7),
                selected: n,
                onClick: I,
                trailing: E
                    ? (0, r.jsx)(o.LpS, {
                          disableColor: !0,
                          text: A.intl.string(A.t.y2b7CA),
                          className: y.q,
                      })
                    : null,
            }),
            T && P(),
        ],
    });
});
