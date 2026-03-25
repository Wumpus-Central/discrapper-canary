"use strict";
n.d(t, { A: () => h });
var i = n(311907),
    s = n(863005),
    l = n(152007),
    a = n(734057),
    r = n(458294),
    o = n(576705),
    c = n(222823),
    d = n(543465),
    u = n(661191);
function h(e) {
    return (0, i.cf)([s.A, a.A, r.default, l.A, o.A, c.Ay, d.Ay], () =>
        u.default.keys(e).reduce(
            (e, t) => {
                let n = a.A.getChannel(t),
                    i = n?.getGuildId(),
                    l = c.Ay.getMentionCount(t);
                if (
                    ((e.badge = e.badge + l),
                    (e.unread = e.unread || (c.Ay.hasUnread(t) && r.default.shouldCountChannelUnread(n, l))),
                    null != i)
                ) {
                    let n = s.A.getActiveJoinedRelevantThreadsForParent(i, t);
                    for (let t in n) {
                        let n = c.Ay.getMentionCount(t);
                        e.badge += n;
                        let i = a.A.getChannel(t);
                        e.unread = e.unread || (c.Ay.hasUnread(t) && r.default.shouldCountChannelUnread(i, n));
                    }
                }
                return e;
            },
            { badge: 0, unread: !1 },
        ),
    );
}
