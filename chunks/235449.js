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
    s = n.n(a),
    l = n(442837),
    i = n(883429),
    o = n(592125),
    c = n(496675),
    d = n(306680),
    u = n(823379),
    h = n(709054),
    m = n(344185),
    g = n(920303),
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
            let t = (0, l.Wu)(
                [c.Z, m.Z, o.Z],
                () =>
                    s()(m.Z.getThreadsForParent(e.guild_id, e.id))
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
                    s()(t)
                        .sort((e, t) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(t)))
                        .reverse()
                        .value(),
                [t]
            );
        })(e),
        [n, a] = (0, l.e7)([f.Z], () => s().partition(t, (e) => f.Z.hasJoined(e)), [t], l.pF);
    return {
        joinedThreadIds: n,
        unjoinedThreadIds: a
    };
}
function p(e) {
    let t = (0, l.Wu)(
        [c.Z, m.Z, o.Z],
        () =>
            s()(m.Z.getThreadsForGuild(e))
                .values()
                .map((e) => s().values(e))
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
            s()(t)
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
        } = (0, l.cj)([g.Z], () => ({
            loading: g.Z.isLoading(e.id, t, n),
            isInitialLoad: g.Z.isInitialLoad,
            canLoadMore: g.Z.canLoadMore,
            nextOffset: g.Z.nextOffset
        })),
        m = r.useCallback(() => {
            c.Z.can(v.Pl.READ_MESSAGE_HISTORY, e) && x.Z.loadArchivedThreads(e.guild_id, e.id, t, n, u);
        }, [e, t, n, u]),
        f = r.useRef(m);
    return (
        r.useEffect(() => {
            f.current = m;
        }),
        r.useEffect(() => {
            h && f.current();
        }, [e.id, t, n, h]),
        r.useEffect(() => {
            i.Z.resort(e.id);
        }, [e.id]),
        {
            threadIds: (0, l.Wu)([g.Z, o.Z, c.Z], () =>
                s()(g.Z.getThreads(e.id, t, n))
                    .filter((e) => {
                        let t = o.Z.getChannel(e);
                        return null != t && c.Z.can(v.Pl.VIEW_CHANNEL, t);
                    })
                    .value()
            ),
            canLoadMore: a,
            loading: d || h,
            loadMore: m
        }
    );
}
