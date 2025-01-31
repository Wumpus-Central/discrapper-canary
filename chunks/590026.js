n.d(t, { Z: () => p }), n(47120);
var i = n(192379),
    l = n(876215),
    a = n(442837),
    r = n(676316),
    s = n(146282),
    o = n(442853),
    c = n(520951),
    d = n(897674),
    u = n(206583);
let h = new Set([l.s.PLAYED_GAME, l.s.WATCHED_MEDIA, l.s.TOP_GAME, l.s.TOP_ARTIST, l.s.LISTENED_SESSION, l.s.LAUNCHED_ACTIVITY]);
function p(e) {
    let t = (0, d.Z)(u.YN.GLOBAL_FEED);
    (t = (0, o.Z)({
        entries: t,
        channelId: e
    })),
        (t = i.useMemo(() => (null == t ? void 0 : t.filter((e) => h.has(e.content_type))), [t]));
    let { entries: n, filteredIds: l } = (0, c.Z)(t);
    t = n;
    let { entriesWithLeaderboard: p, hasLeaderboardEntry: m } = (0, r.Z)({
        entries: t,
        channelId: e
    });
    return (
        (t = p),
        {
            requestId: (0, a.e7)([s.Z], () => s.Z.getFeedRequestId(u.YN.GLOBAL_FEED)),
            entries: t,
            impressionCappedEntryIds: l,
            hasLeaderboardEntry: m
        }
    );
}
