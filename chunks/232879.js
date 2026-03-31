n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(199285),
    o = n(347951),
    c = n(366811),
    d = n(919638),
    u = n(458294),
    h = n(71393),
    A = n(531685),
    _ = n(131494),
    m = n(330465),
    g = n(975376);
let p = l.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        p = t.id,
        f = (0, s.bG)([h.A], () => h.A.getGuild(p)),
        x = (0, r.a)(f),
        E = (0, s.bG)([A.A], () => A.A.isFocused()),
        I = (0, s.bG)([d.A], () => d.A.isUnavailable(p)),
        C = (0, c.A)((e) => e.guildId),
        N = (0, _.A)(p),
        {
            badge: T,
            unread: S,
            isMentionLowImportance: b,
        } = (0, s.cf)([u.default], () => ({
            badge: u.default.getMentionCount(p),
            isMentionLowImportance: u.default.getIsMentionLowImportance(p),
            unread: u.default.hasUnread(p),
        })),
        y = (0, o.Ig)(f) && 0 === T,
        v = l.useMemo(
            () =>
                null != n
                    ? n
                    : y
                      ? (0, i.jsx)("div", {
                            className: g.j,
                            children: (0, i.jsx)(a.E$n, {
                                size: "custom",
                                color: "currentColor",
                                className: g.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, y],
        );
    return (0, i.jsx)(m.A, {
        ...e,
        guild: f,
        unavailable: I,
        animatable: E,
        selected: C === p,
        badge: T,
        isMentionLowImportance: b,
        lowerBadge: v,
        unread: S,
        mediaState: N,
        guildJoinRequestStatus: x,
    });
});
