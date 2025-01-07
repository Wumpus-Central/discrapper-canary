n.d(t, {
    FO: function () {
        return N;
    },
    nA: function () {
        return T;
    },
    qQ: function () {
        return I;
    },
    r7: function () {
        return j;
    }
}),
    n(47120);
var a = n(192379),
    l = n(392711),
    r = n.n(l),
    s = n(442837),
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
    v = n(91159),
    Z = n(231338);
function j() {
    a.useEffect(() => {
        (0, v.A_)();
    }, []);
}
function N(e) {
    let t = (function (e) {
            let t = (0, s.Wu)(
                [c.Z, m.Z, o.Z],
                () =>
                    r()(m.Z.getThreadsForParent(e.guild_id, e.id))
                        .values()
                        .map((e) => {
                            let { id: t } = e;
                            return o.Z.getChannel(t);
                        })
                        .filter(u.lm)
                        .filter((e) => c.Z.can(Z.Pl.VIEW_CHANNEL, e))
                        .map((e) => e.id)
                        .value(),
                [e.guild_id, e.id]
            );
            return a.useMemo(
                () =>
                    r()(t)
                        .sort((e, t) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(t)))
                        .reverse()
                        .value(),
                [t]
            );
        })(e),
        [n, l] = (0, s.e7)([f.Z], () => r().partition(t, (e) => f.Z.hasJoined(e)), [t], s.pF);
    return {
        joinedThreadIds: n,
        unjoinedThreadIds: l
    };
}
function T(e) {
    let t = (0, s.Wu)(
        [c.Z, m.Z, o.Z],
        () =>
            r()(m.Z.getThreadsForGuild(e))
                .values()
                .map((e) => r().values(e))
                .flatten()
                .map((e) => {
                    let { id: t } = e;
                    return o.Z.getChannel(t);
                })
                .filter(u.lm)
                .filter((e) => c.Z.can(Z.Pl.VIEW_CHANNEL, e))
                .map((e) => e.id)
                .value(),
        [e]
    );
    return a.useMemo(
        () =>
            r()(t)
                .sort((e, t) => h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(t)))
                .reverse()
                .value(),
        [t]
    );
}
function I(e, t, n) {
    let {
            canLoadMore: l,
            loading: d,
            nextOffset: u,
            isInitialLoad: h
        } = (0, s.cj)([g.Z], () => ({
            loading: g.Z.isLoading(e.id, t, n),
            isInitialLoad: g.Z.isInitialLoad,
            canLoadMore: g.Z.canLoadMore,
            nextOffset: g.Z.nextOffset
        })),
        m = a.useCallback(() => {
            c.Z.can(Z.Pl.READ_MESSAGE_HISTORY, e) && x.Z.loadArchivedThreads(e.guild_id, e.id, t, n, u);
        }, [e, t, n, u]),
        f = a.useRef(m);
    return (
        a.useEffect(() => {
            f.current = m;
        }),
        a.useEffect(() => {
            h && f.current();
        }, [e.id, t, n, h]),
        a.useEffect(() => {
            i.Z.resort(e.id);
        }, [e.id]),
        {
            threadIds: (0, s.Wu)([g.Z, o.Z, c.Z], () =>
                r()(g.Z.getThreads(e.id, t, n))
                    .filter((e) => {
                        let t = o.Z.getChannel(e);
                        return null != t && c.Z.can(Z.Pl.VIEW_CHANNEL, t);
                    })
                    .value()
            ),
            canLoadMore: l,
            loading: d || h,
            loadMore: m
        }
    );
}
