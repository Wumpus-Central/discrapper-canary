n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(746916),
    s = n(965638),
    c = n(905423),
    d = n(486472),
    u = n(888369),
    h = n(430824),
    p = n(451478),
    m = n(61634),
    g = n(325257),
    f = n(575379);
let _ = l.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        _ = t.id,
        v = (0, r.e7)([h.Z], () => h.Z.getGuild(_)),
        C = (0, a.E)(v),
        x = (0, r.e7)([p.Z], () => p.Z.isFocused()),
        I = (0, r.e7)([d.Z], () => d.Z.isUnavailable(_)),
        Z = (0, c.Z)((e) => e.guildId),
        b = (0, m.Z)(_),
        {
            badge: S,
            unread: N,
            isMentionLowImportance: E
        } = (0, r.cj)([u.default], () => ({
            badge: u.default.getMentionCount(_),
            isMentionLowImportance: u.default.getIsMentionLowImportance(_),
            unread: u.default.hasUnread(_)
        })),
        j = (0, s.I)(v) && 0 === S,
        y = l.useMemo(
            () =>
                null != n
                    ? n
                    : j
                      ? (0, i.jsx)('div', {
                            className: f.pauseBackground,
                            children: (0, i.jsx)(o.fpf, {
                                size: 'custom',
                                color: 'currentColor',
                                className: f.pause,
                                width: 10,
                                height: 10
                            })
                        })
                      : null,
            [n, j]
        );
    return (0, i.jsx)(g.Z, {
        ...e,
        guild: v,
        unavailable: I,
        animatable: x,
        selected: Z === _,
        badge: S,
        isMentionLowImportance: E,
        lowerBadge: y,
        unread: N,
        mediaState: b,
        guildJoinRequestStatus: C
    });
});
