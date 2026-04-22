n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(113494),
    r = n(199285),
    o = n(347951),
    d = n(366811),
    c = n(919638),
    u = n(458294),
    h = n(71393),
    A = n(531685),
    _ = n(131494),
    m = n(330465),
    g = n(182240);
let p = l.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        p = t.id,
        f = (0, s.bG)([h.A], () => h.A.getGuild(p)),
        E = (0, r.a)(f),
        x = (0, s.bG)([A.A], () => A.A.isFocused()),
        I = (0, s.bG)([c.A], () => c.A.isUnavailable(p)),
        C = (0, d.A)((e) => e.guildId),
        b = (0, _.A)(p),
        {
            badge: N,
            unread: S,
            isMentionLowImportance: v,
        } = (0, s.cf)([u.default], () => ({
            badge: u.default.getMentionCount(p),
            isMentionLowImportance: u.default.getIsMentionLowImportance(p),
            unread: u.default.hasUnread(p),
        })),
        T = (0, o.Ig)(f) && 0 === N,
        y = l.useMemo(
            () =>
                null != n
                    ? n
                    : T
                      ? (0, i.jsx)("div", {
                            className: g.j,
                            children: (0, i.jsx)(a.E, {
                                size: "custom",
                                color: "currentColor",
                                className: g.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, T],
        );
    return (0, i.jsx)(m.A, {
        ...e,
        guild: f,
        unavailable: I,
        animatable: x,
        selected: C === p,
        badge: N,
        isMentionLowImportance: v,
        lowerBadge: y,
        unread: S,
        mediaState: b,
        guildJoinRequestStatus: E,
    });
});
