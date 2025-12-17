n.d(t, { Z: () => v }), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(570140),
    c = n(45114),
    u = n(404616),
    d = n(470623),
    f = n(344185),
    h = n(488131),
    p = n(592125),
    g = n(823379),
    b = n(709054),
    m = n(981631),
    y = n(124368),
    O = n(392261);
function v(e) {
    let { channel: t, channelRecord: n, deleteChannel: l } = e,
        v = (0, o.Wu)(
            [f.Z, p.Z],
            () =>
                a()(f.Z.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return b.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return p.Z.getChannel(t);
                    })
                    .filter(g.lm)
                    .sort((e, t) => b.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        j = i.useCallback((e, t) => {
            (0, h.ok)(e, t, y.on.INBOX);
        }, []);
    return (
        i.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== v.length ||
                s.Z.wait(() => {
                    (0, c.ack)(
                        t.channelId,
                        {
                            section: m.jXE.INBOX,
                            object: m.qAy.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: m.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        l(t.channelId);
                });
        }),
        (0, r.jsx)("div", {
            className: O.container,
            children: v.map((e) =>
                (0, r.jsx)(
                    d.oL,
                    {
                        channel: n,
                        children: (0, r.jsx)(u.ZP, {
                            className: O.forumPost,
                            threadId: e.id,
                            goToThread: j,
                        }),
                    },
                    e.id,
                ),
            ),
        })
    );
}
