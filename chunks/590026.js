n.d(t, { Z: () => h }), n(388685);
var r = n(192379),
    i = n(876215),
    l = n(442837),
    o = n(676316),
    a = n(146282),
    s = n(442853),
    c = n(520951),
    u = n(897674),
    d = n(206583);
let p = new Set([i.s.PLAYED_GAME, i.s.WATCHED_MEDIA, i.s.TOP_GAME, i.s.TOP_ARTIST, i.s.LISTENED_SESSION, i.s.LAUNCHED_ACTIVITY]);
function h(e) {
    let t = (0, u.Z)(d.YN.GLOBAL_FEED);
    (t = (0, s.Z)({
        entries: t,
        channelId: e
    })),
        (t = r.useMemo(() => (null == t ? void 0 : t.filter((e) => p.has(e.content_type))), [t]));
    let { entries: n, filteredIds: i } = (0, c.Z)(t);
    t = n;
    let { entriesWithLeaderboard: h, hasLeaderboardEntry: f } = (0, o.Z)({
        entries: t,
        channelId: e
    });
    return (
        (t = h),
        {
            requestId: (0, l.e7)([a.Z], () => a.Z.getFeedRequestId(d.YN.GLOBAL_FEED)),
            entries: t,
            impressionCappedEntryIds: i,
            hasLeaderboardEntry: f
        }
    );
}
