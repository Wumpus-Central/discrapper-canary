(n.d(t, { Z: () => y }), n(388685), n(642613));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    o = n.n(l),
    s = n(442837),
    a = n(570140),
    c = n(45114),
    u = n(404616),
    d = n(470623),
    h = n(344185),
    p = n(488131),
    f = n(592125),
    g = n(823379),
    m = n(709054),
    b = n(981631),
    _ = n(124368),
    O = n(572198);
function y(e) {
    let { channel: t, channelRecord: n, deleteChannel: l } = e,
        y = (0, s.Wu)(
            [h.Z, f.Z],
            () =>
                o()(h.Z.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return m.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return f.Z.getChannel(t);
                    })
                    .filter(g.lm)
                    .sort((e, t) => m.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id]
        ),
        v = i.useCallback((e, t) => {
            (0, p.ok)(e, t, _.on.INBOX);
        }, []);
    return (
        i.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== y.length ||
                a.Z.wait(() => {
                    ((0, c.In)(
                        t.channelId,
                        {
                            section: b.jXE.INBOX,
                            object: b.qAy.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: b.Qqv.ACK_AUTOMATIC
                        },
                        !0
                    ),
                        l(t.channelId));
                });
        }),
        (0, r.jsx)('div', {
            className: O.container,
            children: y.map((e) =>
                (0, r.jsx)(
                    d.oL,
                    {
                        channel: n,
                        children: (0, r.jsx)(u.ZP, {
                            className: O.forumPost,
                            threadId: e.id,
                            goToThread: v
                        })
                    },
                    e.id
                )
            )
        })
    );
}
