n.d(t, { A: () => h });
var i = n(311907),
    l = n(863005),
    s = n(152007),
    a = n(734057),
    r = n(458294),
    o = n(576705),
    d = n(222823),
    c = n(543465),
    u = n(661191);
function h(e) {
    return (0, i.cf)([l.A, a.A, r.default, s.A, o.A, d.Ay, c.Ay], () =>
        u.default.keys(e).reduce(
            (e, t) => {
                let n = a.A.getChannel(t),
                    i = n?.getGuildId(),
                    s = d.Ay.getMentionCount(t);
                if (
                    ((e.badge = e.badge + s),
                    (e.unread = e.unread || (d.Ay.hasUnread(t) && r.default.shouldCountChannelUnread(n, s))),
                    null != i)
                ) {
                    let n = l.A.getActiveJoinedRelevantThreadsForParent(i, t);
                    for (let t in n) {
                        let n = d.Ay.getMentionCount(t);
                        e.badge += n;
                        let i = a.A.getChannel(t);
                        e.unread = e.unread || (d.Ay.hasUnread(t) && r.default.shouldCountChannelUnread(i, n));
                    }
                }
                return e;
            },
            { badge: 0, unread: !1 },
        ),
    );
}
