n.d(t, {
    FO: () => Z,
    nA: () => w,
    qQ: () => y,
    r7: () => b,
}),
    n(388685),
    n(642613),
    n(583741);
var r = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(883429),
    i = n(869382),
    c = n(592125),
    d = n(496675),
    u = n(306680),
    h = n(823379),
    g = n(709054),
    m = n(344185),
    f = n(920303),
    j = n(569471),
    v = n(346479),
    x = n(91159),
    p = n(231338);
function b() {
    r.useEffect(() => {
        (0, x.A_)();
    }, []);
}
function Z(e) {
    let t = (function (e) {
            let t = (0, s.Wu)(
                [d.Z, m.Z, c.Z],
                () =>
                    a()(m.Z.getThreadsForParent(e.guild_id, e.id))
                        .values()
                        .map((e) => {
                            let { id: t } = e;
                            return c.Z.getChannel(t);
                        })
                        .filter(h.lm)
                        .filter((e) => d.Z.can(p.Pl.VIEW_CHANNEL, e))
                        .map((e) => e.id)
                        .value(),
                [e.guild_id, e.id],
            );
            return r.useMemo(
                () =>
                    a()(t)
                        .sort((e, t) => g.default.compare(u.ZP.lastMessageId(e), u.ZP.lastMessageId(t)))
                        .reverse()
                        .value(),
                [t],
            );
        })(e),
        [n, l] = (0, s.e7)([j.Z], () => a().partition(t, (e) => j.Z.hasJoined(e)), [t], s.pF);
    return {
        joinedThreadIds: n,
        unjoinedThreadIds: l,
    };
}
function w(e) {
    let t = (0, s.Wu)(
        [d.Z, m.Z, c.Z],
        () =>
            a()(m.Z.getThreadsForGuild(e))
                .values()
                .map((e) => a().values(e))
                .flatten()
                .map((e) => {
                    let { id: t } = e;
                    return c.Z.getChannel(t);
                })
                .filter(h.lm)
                .filter((e) => d.Z.can(p.Pl.VIEW_CHANNEL, e))
                .map((e) => e.id)
                .value(),
        [e],
    );
    return r.useMemo(
        () =>
            a()(t)
                .sort((e, t) => g.default.compare(u.ZP.lastMessageId(e), u.ZP.lastMessageId(t)))
                .reverse()
                .value(),
        [t],
    );
}
function y(e, t, n, l) {
    let u = e.isModeratorReportChannel(),
        { showResolvedFlags: h } = (0, i.N)(e.id),
        {
            canLoadMore: g,
            loading: m,
            nextOffset: j,
            isInitialLoad: x,
        } = (0, s.cj)([f.Z], () => ({
            loading: f.Z.isLoading(e.id, t, n, l),
            isInitialLoad: f.Z.isInitialLoad,
            canLoadMore: f.Z.canLoadMore,
            nextOffset: f.Z.nextOffset,
        })),
        b = r.useCallback(() => {
            d.Z.can(p.Pl.READ_MESSAGE_HISTORY, e) &&
                (!u || h) &&
                v.Z.loadArchivedThreads({
                    guildId: e.guild_id,
                    channelId: e.id,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: l,
                    offset: j,
                });
        }, [e, t, n, l, j, h, u]),
        Z = r.useRef(b);
    return (
        r.useEffect(() => {
            Z.current = b;
        }),
        r.useEffect(() => {
            x && Z.current();
        }, [e.id, t, n, x, h]),
        r.useEffect(() => {
            o.Z.resort(e.id);
        }, [e.id, h]),
        {
            threadIds: (0, s.Wu)([f.Z, c.Z, d.Z], () =>
                a()(f.Z.getThreads(e.id, t, n, l))
                    .filter((e) => {
                        if (u && !h) return !1;
                        let t = c.Z.getChannel(e);
                        return null != t && d.Z.can(p.Pl.VIEW_CHANNEL, t);
                    })
                    .value(),
            ),
            canLoadMore: g,
            loading: (m || x) && h,
            loadMore: b,
        }
    );
}
