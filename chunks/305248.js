n.d(t, { Z: () => O }), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    o = n.n(l),
    a = n(442837),
    s = n(570140),
    c = n(45114),
    u = n(404616),
    d = n(470623),
    p = n(344185),
    f = n(488131),
    h = n(592125),
    g = n(823379),
    m = n(709054),
    b = n(981631),
    _ = n(124368),
    y = n(479014);
function O(e) {
    let { channel: t, channelRecord: n, deleteChannel: l } = e,
        O = (0, a.Wu)(
            [p.Z, h.Z],
            () =>
                o()(p.Z.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return m.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return h.Z.getChannel(t);
                    })
                    .filter(g.lm)
                    .sort((e, t) => m.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        v = i.useCallback((e, t) => {
            (0, f.ok)(e, t, _.on.INBOX);
        }, []);
    return (
        i.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== O.length ||
                s.Z.wait(() => {
                    (0, c.ack)(
                        t.channelId,
                        {
                            section: b.jXE.INBOX,
                            object: b.qAy.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: b.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        l(t.channelId);
                });
        }),
        (0, r.jsx)("div", {
            className: y.container,
            children: O.map((e) =>
                (0, r.jsx)(
                    d.oL,
                    {
                        channel: n,
                        children: (0, r.jsx)(u.ZP, {
                            className: y.forumPost,
                            threadId: e.id,
                            goToThread: v,
                        }),
                    },
                    e.id,
                ),
            ),
        })
    );
}
