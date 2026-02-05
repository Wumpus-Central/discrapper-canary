n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(199285),
    o = n(347951),
    d = n(366811),
    c = n(919638),
    u = n(458294),
    h = n(71393),
    A = n(531685),
    g = n(131494),
    m = n(330465),
    p = n(605611);
let _ = l.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        _ = t.id,
        x = (0, s.bG)([h.A], () => h.A.getGuild(_)),
        f = (0, r.a)(x),
        E = (0, s.bG)([A.A], () => A.A.isFocused()),
        C = (0, s.bG)([c.A], () => c.A.isUnavailable(_)),
        I = (0, d.A)((e) => e.guildId),
        S = (0, g.A)(_),
        {
            badge: b,
            unread: N,
            isMentionLowImportance: T,
        } = (0, s.cf)([u.default], () => ({
            badge: u.default.getMentionCount(_),
            isMentionLowImportance: u.default.getIsMentionLowImportance(_),
            unread: u.default.hasUnread(_),
        })),
        j = (0, o.Ig)(x) && 0 === b,
        v = l.useMemo(
            () =>
                null != n
                    ? n
                    : j
                      ? (0, i.jsx)("div", {
                            className: p.j,
                            children: (0, i.jsx)(a.E$n, {
                                size: "custom",
                                color: "currentColor",
                                className: p.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, j],
        );
    return (0, i.jsx)(m.A, {
        ...e,
        guild: x,
        unavailable: C,
        animatable: E,
        selected: I === _,
        badge: b,
        isMentionLowImportance: T,
        lowerBadge: v,
        unread: N,
        mediaState: S,
        guildJoinRequestStatus: f,
    });
});
