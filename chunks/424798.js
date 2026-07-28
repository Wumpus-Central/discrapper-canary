a.d(t, { Fr: () => p, Kk: () => j, Mu: () => S, jO: () => w });
var s = a(582128),
    l = a(435558),
    n = a.n(l),
    r = a(17928),
    i = a(919577),
    d = a(212007),
    o = a(734057),
    u = a(576705),
    c = a(568548),
    g = a(403362),
    h = a(935208),
    m = a(970278),
    A = a(45494),
    f = a(152007),
    x = a(867455),
    v = a(707539),
    I = a(818348);
function j() {
    s.useEffect(() => {
        (0, v.ju)();
    }, []);
}
function w(e) {
    let t,
        a =
            ((t = (0, r.yK)(
                [u.A, m.A, o.A],
                () =>
                    n()(m.A.getThreadsForParent(e.guild_id, e.id))
                        .values()
                        .map((e) => {
                            let { id: t } = e;
                            return o.A.getChannel(t);
                        })
                        .filter(g.Vq)
                        .filter((e) => u.A.can(I.xB.VIEW_CHANNEL, e))
                        .map((e) => e.id)
                        .value(),
                [e.guild_id, e.id],
            )),
            s.useMemo(
                () =>
                    n()(t)
                        .sort((e, t) => h.default.compare(c.Ay.lastMessageId(e), c.Ay.lastMessageId(t)))
                        .reverse()
                        .value(),
                [t],
            )),
        [l, i] = (0, r.bG)([f.A], () => n().partition(a, (e) => f.A.hasJoined(e)), [a], r.My);
    return { joinedThreadIds: l, unjoinedThreadIds: i };
}
function S(e) {
    let t = (0, r.yK)(
        [u.A, m.A, o.A],
        () =>
            n()(m.A.getThreadsForGuild(e))
                .values()
                .map((e) => n().values(e))
                .flatten()
                .map((e) => {
                    let { id: t } = e;
                    return o.A.getChannel(t);
                })
                .filter(g.Vq)
                .filter((e) => u.A.can(I.xB.VIEW_CHANNEL, e))
                .map((e) => e.id)
                .value(),
        [e],
    );
    return s.useMemo(
        () =>
            n()(t)
                .sort((e, t) => h.default.compare(c.Ay.lastMessageId(e), c.Ay.lastMessageId(t)))
                .reverse()
                .value(),
        [t],
    );
}
function p(e, t, a, l) {
    let c = e.isModeratorReportChannel(),
        { showResolvedFlags: g } = (0, d.T)(e.id),
        {
            canLoadMore: h,
            loading: m,
            nextOffset: f,
            isInitialLoad: v,
        } = (0, r.cf)([A.A], () => ({
            loading: A.A.isLoading(e.id, t, a, l),
            isInitialLoad: A.A.getIsInitialLoad(e.id, t, a, l),
            canLoadMore: A.A.getCanLoadMore(e.id, t, a, l),
            nextOffset: A.A.getNextOffset(e.id, t, a, l),
        })),
        j = s.useCallback(() => {
            u.A.can(I.xB.READ_MESSAGE_HISTORY, e) &&
                (!c || g) &&
                x.A.loadArchivedThreads({
                    guildId: e.guild_id,
                    channelId: e.id,
                    sortOrder: t,
                    tagFilter: a,
                    tagSetting: l,
                    offset: f,
                });
        }, [e, t, a, l, f, g, c]),
        w = s.useRef(j);
    return (
        s.useEffect(() => {
            w.current = j;
        }),
        s.useEffect(() => {
            v && w.current();
        }, [e.id, t, a, v, g]),
        s.useEffect(() => {
            i.A.resort(e.id);
        }, [e.id, g]),
        {
            threadIds: (0, r.yK)([A.A, o.A, u.A], () =>
                n()(A.A.getThreads(e.id, t, a, l))
                    .filter((e) => {
                        if (c && !g) return !1;
                        let t = o.A.getChannel(e);
                        return null != t && u.A.can(I.xB.VIEW_CHANNEL, t) && !t.isMediaThread();
                    })
                    .value(),
            ),
            canLoadMore: h,
            loading: (m || v) && g && u.A.can(I.xB.READ_MESSAGE_HISTORY, e),
            loadMore: j,
        }
    );
}
