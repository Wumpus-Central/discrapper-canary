n.d(t, { Z: () => x }), n(47120), n(230036);
var r = n(200651),
    i = n(192379),
    a = n(392711),
    l = n.n(a),
    o = n(442837),
    s = n(570140),
    c = n(45114),
    u = n(404616),
    d = n(470623),
    p = n(344185),
    m = n(488131),
    f = n(592125),
    h = n(823379),
    g = n(709054),
    _ = n(124368),
    b = n(572198);
function x(e) {
    let { channel: t, channelRecord: n, deleteChannel: a } = e,
        x = (0, o.Wu)(
            [p.Z, f.Z],
            () =>
                l()(p.Z.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return g.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return f.Z.getChannel(t);
                    })
                    .filter(h.lm)
                    .sort((e, t) => g.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id]
        ),
        y = i.useCallback((e, t) => {
            (0, m.ok)(e, t, _.on.INBOX);
        }, []);
    return (
        i.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== x.length ||
                s.Z.wait(() => {
                    (0, c.In)(t.channelId, !0), a(t.channelId);
                });
        }),
        (0, r.jsx)('div', {
            className: b.container,
            children: x.map((e) =>
                (0, r.jsx)(
                    d.oL,
                    {
                        channel: n,
                        children: (0, r.jsx)(u.ZP, {
                            className: b.forumPost,
                            threadId: e.id,
                            goToThread: y
                        })
                    },
                    e.id
                )
            )
        })
    );
}
