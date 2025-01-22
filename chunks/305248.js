n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(570140),
    c = n(45114),
    u = n(404616),
    d = n(470623),
    m = n(344185),
    h = n(488131),
    f = n(592125),
    p = n(823379),
    _ = n(709054),
    g = n(124368),
    E = n(838503);
function C(e) {
    let { channel: t, channelRecord: n, deleteChannel: l } = e,
        C = (0, o.Wu)(
            [m.Z, f.Z],
            () =>
                a()(m.Z.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return _.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return f.Z.getChannel(t);
                    })
                    .filter(p.lm)
                    .sort((e, t) => _.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id]
        ),
        I = r.useCallback((e, t) => {
            (0, h.ok)(e, t, g.on.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null != n &&
                t.isFullyLoaded &&
                !t.hasError &&
                !t.collapsed &&
                0 === C.length &&
                s.Z.wait(() => {
                    (0, c.In)(t.channelId, !0), l(t.channelId);
                });
        }),
        (0, i.jsx)('div', {
            className: E.container,
            children: C.map((e) =>
                (0, i.jsx)(
                    d.oL,
                    {
                        channel: n,
                        children: (0, i.jsx)(u.ZP, {
                            className: E.forumPost,
                            threadId: e.id,
                            goToThread: I
                        })
                    },
                    e.id
                )
            )
        })
    );
}
