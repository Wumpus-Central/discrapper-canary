n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(704215),
    o = n(481060),
    a = n(243778),
    s = n(434479),
    c = n(703656),
    u = n(981631),
    d = n(176505),
    p = n(921944),
    h = n(948208),
    f = n(388032),
    g = n(990963);
let m = i.memo(function (e) {
    let { guildId: t, selected: n } = e,
        [m, b] = (0, a.ZT)([l.z.GAME_SERVER_HOSTING_NEW_BADGE], t),
        _ = i.useCallback(() => {
            m === l.z.GAME_SERVER_HOSTING_NEW_BADGE && b(p.L.USER_DISMISS),
                (0, c.uL)(u.Z5c.CHANNEL(t, d.oC.GAME_SERVERS));
        }, [t, m, b]);
    return (0, r.jsx)(s.m, {
        id: "game-server-".concat(t),
        renderIcon: (e) =>
            (0, r.jsx)(o.iWm, {
                size: "md",
                className: e,
                color: "currentColor",
            }),
        text: f.intl.string(h.default.vCzwMz),
        selected: n,
        onClick: _,
        trailing:
            m === l.z.GAME_SERVER_HOSTING_NEW_BADGE
                ? (0, r.jsx)(o.IGR, {
                      disableColor: !0,
                      text: f.intl.string(f.t.y2b7CA),
                      className: g.badge,
                  })
                : null,
    });
});
