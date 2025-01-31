n.d(t, {
    FO: () => N,
    nA: () => T,
    qQ: () => C,
    r7: () => j
}),
    n(47120);
var a = n(192379),
    l = n(392711),
    s = n.n(l),
    r = n(442837),
    i = n(883429),
    o = n(592125),
    c = n(496675),
    d = n(306680),
    u = n(823379),
    h = n(709054),
    m = n(344185),
    g = n(920303),
    x = n(569471),
    f = n(346479),
    Z = n(91159),
    v = n(231338);
function j() {
    a.useEffect(() => {
        (0, Z.A_)();
    }, []);
}
function N(e) {
    let t = (function (e) {
            let t = (0, r.Wu)(
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
            return a.useMemo(
                () =>
                    s()(t)
                        .sort((e, t) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(t)))
                        .reverse()
                        .value(),
                [t]
            );
        })(e),
        [n, l] = (0, r.e7)([x.Z], () => s().partition(t, (e) => x.Z.hasJoined(e)), [t], r.pF);
    return {
        joinedThreadIds: n,
        unjoinedThreadIds: l
    };
}
function T(e) {
    let t = (0, r.Wu)(
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
    return a.useMemo(
        () =>
            s()(t)
                .sort((e, t) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(t)))
                .reverse()
                .value(),
        [t]
    );
}
function C(e, t, n) {
    let {
            canLoadMore: l,
            loading: d,
            nextOffset: u,
            isInitialLoad: h
        } = (0, r.cj)([g.Z], () => ({
            loading: g.Z.isLoading(e.id, t, n),
            isInitialLoad: g.Z.isInitialLoad,
            canLoadMore: g.Z.canLoadMore,
            nextOffset: g.Z.nextOffset
        })),
        m = a.useCallback(() => {
            c.Z.can(v.Pl.READ_MESSAGE_HISTORY, e) && f.Z.loadArchivedThreads(e.guild_id, e.id, t, n, u);
        }, [e, t, n, u]),
        x = a.useRef(m);
    return (
        a.useEffect(() => {
            x.current = m;
        }),
        a.useEffect(() => {
            h && x.current();
        }, [e.id, t, n, h]),
        a.useEffect(() => {
            i.Z.resort(e.id);
        }, [e.id]),
        {
            threadIds: (0, r.Wu)([g.Z, o.Z, c.Z], () =>
                s()(g.Z.getThreads(e.id, t, n))
                    .filter((e) => {
                        let t = o.Z.getChannel(e);
                        return null != t && c.Z.can(v.Pl.VIEW_CHANNEL, t);
                    })
                    .value()
            ),
            canLoadMore: l,
            loading: d || h,
            loadMore: m
        }
    );
}
