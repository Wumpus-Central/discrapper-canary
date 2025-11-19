n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(704215),
    a = n(952265),
    s = n(481060),
    c = n(243778),
    u = n(434479),
    d = n(703656),
    p = n(819640),
    h = n(933104),
    f = n(981631),
    g = n(176505),
    m = n(921944),
    b = n(719662),
    _ = n(388032),
    y = n(878055);
let O = i.memo(function (e) {
    let { guildId: t, selected: n } = e,
        O = (0, a.f9)(),
        v = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        [j, C] = (0, c.ZT)([o.z.GAME_SERVER_HOSTING_NEW_BADGE], t),
        x = j === o.z.GAME_SERVER_HOSTING_NEW_BADGE,
        [E, S] = (0, c.ZT)(O || v || !x ? [] : [o.z.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        I = i.useCallback(
            (e) => {
                C(e), S(e);
            },
            [C, S],
        ),
        P = i.useCallback(() => {
            I(m.L.USER_DISMISS), (0, d.uL)(f.Z5c.CHANNEL(t, g.oC.GAME_SERVERS));
        }, [t, I]),
        N = i.useRef(null),
        Z = E === o.z.GAME_SERVER_HOSTING_NEW_COACHMARK,
        w = i.useCallback(
            () =>
                (0, r.jsx)(h.En, {
                    channelRowRef: N,
                    guildId: t,
                    markAsDismissed: I,
                }),
            [t, I],
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
                text: _.intl.string(b.default.vCzwM7),
                selected: n,
                onClick: P,
                trailing: x
                    ? (0, r.jsx)(s.IGR, {
                          disableColor: !0,
                          text: _.intl.string(_.t.y2b7CA),
                          className: y.badge,
                      })
                    : null,
            }),
            Z && w(),
        ],
    });
});
