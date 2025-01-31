n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(442837),
    o = n(570140),
    c = n(45114),
    d = n(404616),
    u = n(470623),
    m = n(344185),
    h = n(488131),
    _ = n(592125),
    p = n(823379),
    g = n(709054),
    f = n(124368),
    x = n(838503);
function E(e) {
    let { channel: t, channelRecord: n, deleteChannel: a } = e,
        E = (0, s.Wu)(
            [m.Z, _.Z],
            () =>
                r()(m.Z.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return g.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return _.Z.getChannel(t);
                    })
                    .filter(p.lm)
                    .sort((e, t) => g.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id]
        ),
        C = l.useCallback((e, t) => {
            (0, h.ok)(e, t, f.on.INBOX);
        }, []);
    return (
        l.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== E.length ||
                o.Z.wait(() => {
                    (0, c.In)(t.channelId, !0), a(t.channelId);
                });
        }),
        (0, i.jsx)('div', {
            className: x.container,
            children: E.map((e) =>
                (0, i.jsx)(
                    u.oL,
                    {
                        channel: n,
                        children: (0, i.jsx)(d.ZP, {
                            className: x.forumPost,
                            threadId: e.id,
                            goToThread: C
                        })
                    },
                    e.id
                )
            )
        })
    );
}
