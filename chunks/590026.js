(n.d(t, { Z: () => m }), n(388685));
var r = n(73800),
    i = n(876215),
    l = n(442837),
    a = n(676316),
    o = n(592125),
    s = n(146282),
    c = n(442853),
    u = n(520951),
    d = n(567493),
    p = n(897674),
    h = n(206583);
let f = new Set([i.s.PLAYED_GAME, i.s.WATCHED_MEDIA, i.s.TOP_GAME, i.s.TOP_ARTIST, i.s.LISTENED_SESSION, i.s.LAUNCHED_ACTIVITY]);
function m(e) {
    let t = (0, l.e7)([o.Z], () => o.Z.getChannel(e)),
        n = null == t ? void 0 : t.guild_id,
        i = (0, p.Z)({ id: h.YN.GLOBAL_FEED });
    ((i = (0, c.Z)({
        entries: i,
        channelId: e
    })),
        (i = r.useMemo(() => (null == i ? void 0 : i.filter((e) => f.has(e.content_type))), [i])));
    let { entries: m, filteredIds: g } = (0, u.Z)(i);
    i = m;
    let b = (0, d.i)(n);
    i = r.useMemo(() => (null == i ? b : [...b, ...i]), [i, b]);
    let { entriesWithLeaderboard: _, hasLeaderboardEntry: y } = (0, a.Z)({
        entries: i,
        channelId: e
    });
    return (
        (i = _),
        {
            requestId: (0, l.e7)([s.Z], () => s.Z.getFeedRequestId(h.YN.GLOBAL_FEED)),
            entries: i,
            impressionCappedEntryIds: g,
            hasLeaderboardEntry: y
        }
    );
}
