s.d(t, { Fr: () => N, Kk: () => S, Mu: () => w, jO: () => T });
var l = s(64700),
    n = s(735438),
    a = s.n(n),
    r = s(17928),
    i = s(919577),
    o = s(212007),
    d = s(734057),
    c = s(576705),
    u = s(222823),
    h = s(403362),
    g = s(935208),
    m = s(970278),
    x = s(45494),
    A = s(152007),
    f = s(867455),
    j = s(707539),
    v = s(818348);
function S() {
    l.useEffect(() => {
        (0, j.ju)();
    }, []);
}
function T(e) {
    let t,
        s =
            ((t = (0, r.yK)(
                [c.A, m.A, d.A],
                () =>
                    a()(m.A.getThreadsForParent(e.guild_id, e.id))
                        .values()
                        .map((e) => {
                            let { id: t } = e;
                            return d.A.getChannel(t);
                        })
                        .filter(h.Vq)
                        .filter((e) => c.A.can(v.xB.VIEW_CHANNEL, e))
                        .map((e) => e.id)
                        .value(),
                [e.guild_id, e.id],
            )),
            l.useMemo(
                () =>
                    a()(t)
                        .sort((e, t) => g.default.compare(u.Ay.lastMessageId(e), u.Ay.lastMessageId(t)))
                        .reverse()
                        .value(),
                [t],
            )),
        [n, i] = (0, r.bG)([A.A], () => a().partition(s, (e) => A.A.hasJoined(e)), [s], r.My);
    return { joinedThreadIds: n, unjoinedThreadIds: i };
}
function w(e) {
    let t = (0, r.yK)(
        [c.A, m.A, d.A],
        () =>
            a()(m.A.getThreadsForGuild(e))
                .values()
                .map((e) => a().values(e))
                .flatten()
                .map((e) => {
                    let { id: t } = e;
                    return d.A.getChannel(t);
                })
                .filter(h.Vq)
                .filter((e) => c.A.can(v.xB.VIEW_CHANNEL, e))
                .map((e) => e.id)
                .value(),
        [e],
    );
    return l.useMemo(
        () =>
            a()(t)
                .sort((e, t) => g.default.compare(u.Ay.lastMessageId(e), u.Ay.lastMessageId(t)))
                .reverse()
                .value(),
        [t],
    );
}
function N(e, t, s, n) {
    let u = e.isModeratorReportChannel(),
        { showResolvedFlags: h } = (0, o.T)(e.id),
        {
            canLoadMore: g,
            loading: m,
            nextOffset: A,
            isInitialLoad: j,
        } = (0, r.cf)([x.A], () => ({
            loading: x.A.isLoading(e.id, t, s, n),
            isInitialLoad: x.A.isInitialLoad,
            canLoadMore: x.A.canLoadMore,
            nextOffset: x.A.nextOffset,
        })),
        S = l.useCallback(() => {
            c.A.can(v.xB.READ_MESSAGE_HISTORY, e) &&
                (!u || h) &&
                f.A.loadArchivedThreads({
                    guildId: e.guild_id,
                    channelId: e.id,
                    sortOrder: t,
                    tagFilter: s,
                    tagSetting: n,
                    offset: A,
                });
        }, [e, t, s, n, A, h, u]),
        T = l.useRef(S);
    return (
        l.useEffect(() => {
            T.current = S;
        }),
        l.useEffect(() => {
            j && T.current();
        }, [e.id, t, s, j, h]),
        l.useEffect(() => {
            i.A.resort(e.id);
        }, [e.id, h]),
        {
            threadIds: (0, r.yK)([x.A, d.A, c.A], () =>
                a()(x.A.getThreads(e.id, t, s, n))
                    .filter((e) => {
                        if (u && !h) return !1;
                        let t = d.A.getChannel(e);
                        return null != t && c.A.can(v.xB.VIEW_CHANNEL, t);
                    })
                    .value(),
            ),
            canLoadMore: g,
            loading: (m || j) && h && c.A.can(v.xB.READ_MESSAGE_HISTORY, e),
            loadMore: S,
        }
    );
}
