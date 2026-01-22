n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(311907),
    l = n(734057),
    i = n(576705),
    a = n(222823),
    s = n(543465),
    o = n(661191),
    c = n(818348);

function u(e) {
    return (0, r.cf)([l.A, a.Ay, s.Ay, i.A], () =>
        o.default.keys(e).reduce(
            (e, t) => {
                let n = l.A.getChannel(t),
                    r = null == n ? void 0 : n.isGuildVocal();
                return (
                    (e.badge = e.badge + a.Ay.getMentionCount(t)),
                    (e.unread =
                        e.unread ||
                        (!r &&
                            i.A.can(c.xB.VIEW_CHANNEL, n) &&
                            a.Ay.hasUnread(t) &&
                            !s.Ay.isChannelMuted(null == n ? void 0 : n.getGuildId(), t))),
                    e
                );
            },
            {
                badge: 0,
                unread: !1,
            },
        ),
    );
}
