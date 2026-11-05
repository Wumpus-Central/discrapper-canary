var s = t(582128),
    l = t(435558),
    n = t.n(l),
    r = t(855986),
    i = t(919577),
    d = t(212007),
    o = t(734057),
    u = t(576705),
    c = t(218461),
    g = t(403362),
    h = t(811091),
    m = t(970278),
    A = t(45494),
    f = t(152007),
    x = t(7909),
    v = t(707539),
    I = t(818348);
t.d(
    a,
    {},
    {
        Fr: function (e, a, t, l) {
            let c = e.isModeratorReportChannel(),
                { showResolvedFlags: g } = (0, d.T)(e.id),
                {
                    canLoadMore: h,
                    loading: m,
                    nextOffset: f,
                    isInitialLoad: v,
                } = (0, r.cf)([A.A], () => ({
                    loading: A.A.isLoading(e.id, a, t, l),
                    isInitialLoad: A.A.getIsInitialLoad(e.id, a, t, l),
                    canLoadMore: A.A.getCanLoadMore(e.id, a, t, l),
                    nextOffset: A.A.getNextOffset(e.id, a, t, l),
                })),
                j = s.useCallback(() => {
                    u.A.can(I.xB.READ_MESSAGE_HISTORY, e) &&
                        (!c || g) &&
                        x.A.loadArchivedThreads({
                            guildId: e.guild_id,
                            channelId: e.id,
                            sortOrder: a,
                            tagFilter: t,
                            tagSetting: l,
                            offset: f,
                        });
                }, [e, a, t, l, f, g, c]),
                w = s.useRef(j);
            return (
                s.useEffect(() => {
                    w.current = j;
                }),
                s.useEffect(() => {
                    v && w.current();
                }, [e.id, a, t, v, g]),
                s.useEffect(() => {
                    i.A.resort(e.id);
                }, [e.id, g]),
                {
                    threadIds: (0, r.yK)([A.A, o.A, u.A], () =>
                        n()(A.A.getThreads(e.id, a, t, l))
                            .filter((e) => {
                                if (c && !g) return !1;
                                let a = o.A.getChannel(e);
                                return null != a && u.A.can(I.xB.VIEW_CHANNEL, a) && !a.isMediaThread();
                            })
                            .value(),
                    ),
                    canLoadMore: h,
                    loading: (m || v) && g && u.A.can(I.xB.READ_MESSAGE_HISTORY, e),
                    loadMore: j,
                }
            );
        },
        Kk: function () {
            s.useEffect(() => {
                (0, v.ju)();
            }, []);
        },
        Mu: function (e) {
            let a = (0, r.yK)(
                [u.A, m.A, o.A],
                () =>
                    n()(m.A.getThreadsForGuild(e))
                        .values()
                        .map((e) => n().values(e))
                        .flatten()
                        .map((e) => {
                            let { id: a } = e;
                            return o.A.getChannel(a);
                        })
                        .filter(g.Vq)
                        .filter((e) => u.A.can(I.xB.VIEW_CHANNEL, e))
                        .map((e) => e.id)
                        .value(),
                [e],
            );
            return s.useMemo(
                () =>
                    n()(a)
                        .sort((e, a) => h.default.compare(c.Ay.lastMessageId(e), c.Ay.lastMessageId(a)))
                        .reverse()
                        .value(),
                [a],
            );
        },
        jO: function (e) {
            let a,
                t =
                    ((a = (0, r.yK)(
                        [u.A, m.A, o.A],
                        () =>
                            n()(m.A.getThreadsForParent(e.guild_id, e.id))
                                .values()
                                .map((e) => {
                                    let { id: a } = e;
                                    return o.A.getChannel(a);
                                })
                                .filter(g.Vq)
                                .filter((e) => u.A.can(I.xB.VIEW_CHANNEL, e))
                                .map((e) => e.id)
                                .value(),
                        [e.guild_id, e.id],
                    )),
                    s.useMemo(
                        () =>
                            n()(a)
                                .sort((e, a) => h.default.compare(c.Ay.lastMessageId(e), c.Ay.lastMessageId(a)))
                                .reverse()
                                .value(),
                        [a],
                    )),
                [l, i] = (0, r.bG)([f.A], () => n().partition(t, (e) => f.A.hasJoined(e)), [t], r.My);
            return { joinedThreadIds: l, unjoinedThreadIds: i };
        },
    },
);
