var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(746916),
    s = n(965638),
    c = n(905423),
    u = n(486472),
    d = n(888369),
    h = n(430824),
    p = n(451478),
    f = n(61634),
    m = n(325257),
    g = n(771557);
t.Z = l.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        v = t.id,
        C = (0, r.e7)([h.Z], () => h.Z.getGuild(v)),
        x = (0, o.E)(C),
        I = (0, r.e7)([p.Z], () => p.Z.isFocused()),
        _ = (0, r.e7)([u.Z], () => u.Z.isUnavailable(v)),
        Z = (0, c.Z)((e) => e.guildId),
        b = (0, f.Z)(v),
        {
            badge: S,
            unread: N,
            isMentionLowImportance: E
        } = (0, r.cj)([d.default], () => ({
            badge: d.default.getMentionCount(v),
            isMentionLowImportance: d.default.getIsMentionLowImportance(v),
            unread: d.default.hasUnread(v)
        })),
        y = (0, s.I)(C) && 0 === S,
        j = l.useMemo(
            () =>
                null != n
                    ? n
                    : y
                      ? (0, i.jsx)('div', {
                            className: g.pauseBackground,
                            children: (0, i.jsx)(a.PauseIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                className: g.pause,
                                width: 10,
                                height: 10
                            })
                        })
                      : null,
            [n, y]
        );
    return (0, i.jsx)(m.Z, {
        ...e,
        guild: C,
        unavailable: _,
        animatable: I,
        selected: Z === v,
        badge: S,
        isMentionLowImportance: E,
        lowerBadge: j,
        unread: N,
        mediaState: b,
        guildJoinRequestStatus: x
    });
});
