n.d(t, {
    FO: () => Z,
    nA: () => w,
    qQ: () => O,
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
    u = n(496675),
    d = n(306680),
    h = n(823379),
    g = n(709054),
    f = n(344185),
    m = n(920303),
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
                [u.Z, f.Z, c.Z],
                () =>
                    a()(f.Z.getThreadsForParent(e.guild_id, e.id))
                        .values()
                        .map((e) => {
                            let { id: t } = e;
                            return c.Z.getChannel(t);
                        })
                        .filter(h.lm)
                        .filter((e) => u.Z.can(p.Pl.VIEW_CHANNEL, e))
                        .map((e) => e.id)
                        .value(),
                [e.guild_id, e.id],
            );
            return r.useMemo(
                () =>
                    a()(t)
                        .sort((e, t) => g.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(t)))
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
        [u.Z, f.Z, c.Z],
        () =>
            a()(f.Z.getThreadsForGuild(e))
                .values()
                .map((e) => a().values(e))
                .flatten()
                .map((e) => {
                    let { id: t } = e;
                    return c.Z.getChannel(t);
                })
                .filter(h.lm)
                .filter((e) => u.Z.can(p.Pl.VIEW_CHANNEL, e))
                .map((e) => e.id)
                .value(),
        [e],
    );
    return r.useMemo(
        () =>
            a()(t)
                .sort((e, t) => g.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(t)))
                .reverse()
                .value(),
        [t],
    );
}
function O(e, t, n, l) {
    let d = e.isModeratorReportChannel(),
        { showResolvedFlags: h } = (0, i.N)(e.id),
        {
            canLoadMore: g,
            loading: f,
            nextOffset: j,
            isInitialLoad: x,
        } = (0, s.cj)([m.Z], () => ({
            loading: m.Z.isLoading(e.id, t, n, l),
            isInitialLoad: m.Z.isInitialLoad,
            canLoadMore: m.Z.canLoadMore,
            nextOffset: m.Z.nextOffset,
        })),
        b = r.useCallback(() => {
            u.Z.can(p.Pl.READ_MESSAGE_HISTORY, e) &&
                (!d || h) &&
                v.Z.loadArchivedThreads({
                    guildId: e.guild_id,
                    channelId: e.id,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: l,
                    offset: j,
                });
        }, [e, t, n, l, j, h, d]),
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
            threadIds: (0, s.Wu)([m.Z, c.Z, u.Z], () =>
                a()(m.Z.getThreads(e.id, t, n, l))
                    .filter((e) => {
                        if (d && !h) return !1;
                        let t = c.Z.getChannel(e);
                        return null != t && u.Z.can(p.Pl.VIEW_CHANNEL, t);
                    })
                    .value(),
            ),
            canLoadMore: g,
            loading: (f || x) && h,
            loadMore: b,
        }
    );
}
