n.d(t, {
    FO: () => N,
    nA: () => p,
    qQ: () => b,
    r7: () => Z
}),
    n(47120),
    n(230036),
    n(978209);
var r = n(192379),
    a = n(392711),
    l = n.n(a),
    s = n(442837),
    i = n(883429),
    o = n(592125),
    c = n(496675),
    d = n(306680),
    u = n(823379),
    h = n(709054),
    g = n(344185),
    m = n(920303),
    f = n(569471),
    x = n(346479),
    j = n(91159),
    v = n(231338);
function Z() {
    r.useEffect(() => {
        (0, j.A_)();
    }, []);
}
function N(e) {
    let t = (function (e) {
            let t = (0, s.Wu)(
                [c.Z, g.Z, o.Z],
                () =>
                    l()(g.Z.getThreadsForParent(e.guild_id, e.id))
                        .values()
                        .map((e) => {
                            let { id: t } = e;
                            return o.Z.getChannel(t);
                        })
                        .filter(u.lm)
                        .filter((e) => c.Z.can(v.Pl.VIEW_CHANNEL, e))
                        .map((e) => e.id)
                        .value(),
                [e.guild_id, e.id]
            );
            return r.useMemo(
                () =>
                    l()(t)
                        .sort((e, t) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(t)))
                        .reverse()
                        .value(),
                [t]
            );
        })(e),
        [n, a] = (0, s.e7)([f.Z], () => l().partition(t, (e) => f.Z.hasJoined(e)), [t], s.pF);
    return {
        joinedThreadIds: n,
        unjoinedThreadIds: a
    };
}
function p(e) {
    let t = (0, s.Wu)(
        [c.Z, g.Z, o.Z],
        () =>
            l()(g.Z.getThreadsForGuild(e))
                .values()
                .map((e) => l().values(e))
                .flatten()
                .map((e) => {
                    let { id: t } = e;
                    return o.Z.getChannel(t);
                })
                .filter(u.lm)
                .filter((e) => c.Z.can(v.Pl.VIEW_CHANNEL, e))
                .map((e) => e.id)
                .value(),
        [e]
    );
    return r.useMemo(
        () =>
            l()(t)
                .sort((e, t) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(t)))
                .reverse()
                .value(),
        [t]
    );
}
function b(e, t, n) {
    let {
            canLoadMore: a,
            loading: d,
            nextOffset: u,
            isInitialLoad: h
        } = (0, s.cj)([m.Z], () => ({
            loading: m.Z.isLoading(e.id, t, n),
            isInitialLoad: m.Z.isInitialLoad,
            canLoadMore: m.Z.canLoadMore,
            nextOffset: m.Z.nextOffset
        })),
        g = r.useCallback(() => {
            c.Z.can(v.Pl.READ_MESSAGE_HISTORY, e) && x.Z.loadArchivedThreads(e.guild_id, e.id, t, n, u);
        }, [e, t, n, u]),
        f = r.useRef(g);
    return (
        r.useEffect(() => {
            f.current = g;
        }),
        r.useEffect(() => {
            h && f.current();
        }, [e.id, t, n, h]),
        r.useEffect(() => {
            i.Z.resort(e.id);
        }, [e.id]),
        {
            threadIds: (0, s.Wu)([m.Z, o.Z, c.Z], () =>
                l()(m.Z.getThreads(e.id, t, n))
                    .filter((e) => {
                        let t = o.Z.getChannel(e);
                        return null != t && c.Z.can(v.Pl.VIEW_CHANNEL, t);
                    })
                    .value()
            ),
            canLoadMore: a,
            loading: d || h,
            loadMore: g
        }
    );
}
