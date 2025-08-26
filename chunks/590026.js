n.d(t, { Z: () => p }), n(388685);
var r = n(647438),
    i = n(876215),
    l = n(442837),
    a = n(146282),
    o = n(442853),
    s = n(520951),
    c = n(897674),
    u = n(206583);
let d = new Set([
    i.s.PLAYED_GAME,
    i.s.WATCHED_MEDIA,
    i.s.TOP_GAME,
    i.s.TOP_ARTIST,
    i.s.LISTENED_SESSION,
    i.s.LAUNCHED_ACTIVITY,
]);
function p(e) {
    let t = (0, c.Z)({ id: u.YN.GLOBAL_FEED });
    (t = (0, o.Z)({
        entries: t,
        channelId: e,
    })),
        (t = r.useMemo(() => (null == t ? void 0 : t.filter((e) => d.has(e.content_type))), [t]));
    let { entries: n, filteredIds: i } = (0, s.Z)(t);
    return (
        (t = n),
        {
            requestId: (0, l.e7)([a.Z], () => a.Z.getFeedRequestId(u.YN.GLOBAL_FEED)),
            entries: t,
            impressionCappedEntryIds: i,
        }
    );
}
