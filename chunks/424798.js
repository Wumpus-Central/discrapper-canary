n.d(t, {
    Fr: () => w,
    Kk: () => A,
    Mu: () => y,
    jO: () => p,
}),
    n(896048),
    n(638769),
    n(264879);
var r = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(311907),
    o = n(919577),
    i = n(212007),
    c = n(734057),
    u = n(576705),
    d = n(222823),
    h = n(403362),
    g = n(661191),
    m = n(970278),
    f = n(45494),
    j = n(152007),
    x = n(867455),
    v = n(707539),
    b = n(818348);

function A() {
    r.useEffect(() => {
        (0, v.ju)();
    }, []);
}

function p(e) {
    let t,
        n =
            ((t = (0, s.yK)(
                [u.A, m.A, c.A],
                () =>
                    a()(m.A.getThreadsForParent(e.guild_id, e.id))
                        .values()
                        .map((e) => {
                            let { id: t } = e;
                            return c.A.getChannel(t);
                        })
                        .filter(h.Vq)
                        .filter((e) => u.A.can(b.xB.VIEW_CHANNEL, e))
                        .map((e) => e.id)
                        .value(),
                [e.guild_id, e.id],
            )),
            r.useMemo(
                () =>
                    a()(t)
                        .sort((e, t) => g.default.compare(d.Ay.lastMessageId(e), d.Ay.lastMessageId(t)))
                        .reverse()
                        .value(),
                [t],
            )),
        [l, o] = (0, s.bG)([j.A], () => a().partition(n, (e) => j.A.hasJoined(e)), [n], s.My);
    return {
        joinedThreadIds: l,
        unjoinedThreadIds: o,
    };
}

function y(e) {
    let t = (0, s.yK)(
        [u.A, m.A, c.A],
        () =>
            a()(m.A.getThreadsForGuild(e))
                .values()
                .map((e) => a().values(e))
                .flatten()
                .map((e) => {
                    let { id: t } = e;
                    return c.A.getChannel(t);
                })
                .filter(h.Vq)
                .filter((e) => u.A.can(b.xB.VIEW_CHANNEL, e))
                .map((e) => e.id)
                .value(),
        [e],
    );
    return r.useMemo(
        () =>
            a()(t)
                .sort((e, t) => g.default.compare(d.Ay.lastMessageId(e), d.Ay.lastMessageId(t)))
                .reverse()
                .value(),
        [t],
    );
}

function w(e, t, n, l) {
    let d = e.isModeratorReportChannel(),
        { showResolvedFlags: h } = (0, i.T)(e.id),
        {
            canLoadMore: g,
            loading: m,
            nextOffset: j,
            isInitialLoad: v,
        } = (0, s.cf)([f.A], () => ({
            loading: f.A.isLoading(e.id, t, n, l),
            isInitialLoad: f.A.isInitialLoad,
            canLoadMore: f.A.canLoadMore,
            nextOffset: f.A.nextOffset,
        })),
        A = r.useCallback(() => {
            u.A.can(b.xB.READ_MESSAGE_HISTORY, e) &&
                (!d || h) &&
                x.A.loadArchivedThreads({
                    guildId: e.guild_id,
                    channelId: e.id,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: l,
                    offset: j,
                });
        }, [e, t, n, l, j, h, d]),
        p = r.useRef(A);
    return (
        r.useEffect(() => {
            p.current = A;
        }),
        r.useEffect(() => {
            v && p.current();
        }, [e.id, t, n, v, h]),
        r.useEffect(() => {
            o.A.resort(e.id);
        }, [e.id, h]),
        {
            threadIds: (0, s.yK)([f.A, c.A, u.A], () =>
                a()(f.A.getThreads(e.id, t, n, l))
                    .filter((e) => {
                        if (d && !h) return !1;
                        let t = c.A.getChannel(e);
                        return null != t && u.A.can(b.xB.VIEW_CHANNEL, t);
                    })
                    .value(),
            ),
            canLoadMore: g,
            loading: (m || v) && h,
            loadMore: A,
        }
    );
}
