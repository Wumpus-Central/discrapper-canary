n.d(t, { A: () => c });
var i = n(311907),
    l = n(734057),
    s = n(576705),
    a = n(222823),
    r = n(543465),
    o = n(661191),
    d = n(818348);
function c(e) {
    return (0, i.cf)([l.A, a.Ay, r.Ay, s.A], () =>
        o.default.keys(e).reduce(
            (e, t) => {
                let n = l.A.getChannel(t),
                    i = n?.isGuildVocal();
                return (
                    (e.badge = e.badge + a.Ay.getMentionCount(t)),
                    (e.unread =
                        e.unread ||
                        (!i &&
                            s.A.can(d.xB.VIEW_CHANNEL, n) &&
                            a.Ay.hasUnread(t) &&
                            !r.Ay.isChannelMuted(n?.getGuildId(), t))),
                    e
                );
            },
            { badge: 0, unread: !1 },
        ),
    );
}
