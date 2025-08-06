n.d(t, { Z: () => g }), n(388685);
var r = n(73800),
    i = n(876215),
    l = n(442837),
    a = n(676316),
    s = n(592125),
    o = n(146282),
    c = n(442853),
    u = n(520951),
    d = n(567493),
    h = n(897674),
    p = n(206583);
let f = new Set([
    i.s.PLAYED_GAME,
    i.s.WATCHED_MEDIA,
    i.s.TOP_GAME,
    i.s.TOP_ARTIST,
    i.s.LISTENED_SESSION,
    i.s.LAUNCHED_ACTIVITY,
]);
function g(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.getChannel(e)),
        n = null == t ? void 0 : t.guild_id,
        i = (0, h.Z)({ id: p.YN.GLOBAL_FEED });
    (i = (0, c.Z)({
        entries: i,
        channelId: e,
    })),
        (i = r.useMemo(() => (null == i ? void 0 : i.filter((e) => f.has(e.content_type))), [i]));
    let { entries: g, filteredIds: m } = (0, u.Z)(i);
    i = g;
    let b = (0, d.im)(n);
    i = r.useMemo(() => {
        if (null == i) return b;
        let e = new Set();
        for (let t of b) {
            let n = "".concat(t.author_id, ":").concat(t.extra.application_id);
            e.add(n);
        }
        return [
            ...b,
            ...i.filter((t) => {
                if ("application_id" in t.extra) {
                    let n = "".concat(t.author_id, ":").concat(t.extra.application_id);
                    return !e.has(n);
                }
                return !0;
            }),
        ];
    }, [i, b]);
    let { entriesWithLeaderboard: y, hasLeaderboardEntry: x } = (0, a.Z)({
        entries: i,
        channelId: e,
    });
    return (
        (i = y),
        {
            requestId: (0, l.e7)([o.Z], () => o.Z.getFeedRequestId(p.YN.GLOBAL_FEED)),
            entries: i,
            impressionCappedEntryIds: m,
            hasLeaderboardEntry: x,
        }
    );
}
