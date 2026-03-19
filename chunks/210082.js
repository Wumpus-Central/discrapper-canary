"use strict";
n.d(t, { A: () => h });
var i = n(311907),
    s = n(873298),
    l = n(863005),
    a = n(734057),
    r = n(576705),
    o = n(222823),
    c = n(543465),
    d = n(661191),
    u = n(818348);
function h(e) {
    return (0, i.cf)([l.A, a.A, o.Ay, c.Ay, r.A], () =>
        d.default.keys(e).reduce(
            (t, n) => {
                if (e[n]?.type === s.Ip.CATEGORY) return t;
                let i = a.A.getChannel(n),
                    h = i?.getGuildId(),
                    A = i?.isGuildVocal();
                if (
                    ((t.badge = t.badge + o.Ay.getMentionCount(n)),
                    (t.unread =
                        t.unread ||
                        (!A && r.A.can(u.xB.VIEW_CHANNEL, i) && o.Ay.hasUnread(n) && !c.Ay.isChannelMuted(h, n))),
                    null != h)
                ) {
                    let e = l.A.getActiveJoinedRelevantThreadsForParent(h, n),
                        i = l.A.getActiveJoinedUnreadThreadsForParent(h, n);
                    for (let n in ((t.unread = t.unread || d.default.keys(i).some((t) => t in e)), e))
                        t.badge += o.Ay.getMentionCount(n);
                }
                return t;
            },
            { badge: 0, unread: !1 },
        ),
    );
}
