n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(704215),
    o = n(952265),
    s = n(481060),
    c = n(243778),
    u = n(434479),
    d = n(703656),
    f = n(819640),
    h = n(933104),
    p = n(981631),
    g = n(176505),
    b = n(921944),
    m = n(914820),
    y = n(388032),
    O = n(498374);
let v = i.memo(function (e) {
    let { guildId: t, selected: n } = e,
        v = (0, o.useHasAnyModalOpen)(),
        j = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        [C, x] = (0, c.ZT)([a.z.GAME_SERVER_HOSTING_NEW_BADGE], t),
        E = C === a.z.GAME_SERVER_HOSTING_NEW_BADGE,
        [S, I] = (0, c.ZT)(v || j || !E ? [] : [a.z.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        _ = i.useCallback(
            (e) => {
                x(e), I(e);
            },
            [x, I],
        ),
        P = i.useCallback(() => {
            _(b.L.USER_DISMISS), (0, d.uL)(p.Z5c.CHANNEL(t, g.oC.GAME_SERVERS));
        }, [t, _]),
        N = i.useRef(null),
        Z = S === a.z.GAME_SERVER_HOSTING_NEW_COACHMARK,
        w = i.useCallback(
            () =>
                (0, r.jsx)(h.En, {
                    channelRowRef: N,
                    guildId: t,
                    markAsDismissed: _,
                }),
            [t, _],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.m, {
                ref: N,
                id: "game-server-".concat(t),
                renderIcon: (e) =>
                    (0, r.jsx)(s.iWm, {
                        size: "md",
                        className: e,
                        color: "currentColor",
                    }),
                text: y.intl.string(m.default.vCzwM7),
                selected: n,
                onClick: P,
                trailing: E
                    ? (0, r.jsx)(s.IGR, {
                          disableColor: !0,
                          text: y.intl.string(y.t.y2b7CA),
                          className: O.badge,
                      })
                    : null,
            }),
            Z && w(),
        ],
    });
});
