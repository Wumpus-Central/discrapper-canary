n.d(t, { Z: () => p }), n(388685);
var r = n(647438),
    i = n(876215),
    l = n(442837),
    a = n(146282),
    s = n(354655),
    o = n(442853),
    c = n(520951),
    d = n(897674),
    u = n(206583);
let h = new Set([
    i.s.PLAYED_GAME,
    i.s.WATCHED_MEDIA,
    i.s.TOP_GAME,
    i.s.TOP_ARTIST,
    i.s.LISTENED_SESSION,
    i.s.LAUNCHED_ACTIVITY,
]);
function p(e) {
    let t = (0, d.Z)({ id: u.YN.GLOBAL_FEED });
    (t = (0, o.Z)({
        entries: t,
        channelId: e,
    })),
        (t = (0, s.Z)({ entries: t })),
        (t = r.useMemo(() => (null == t ? void 0 : t.filter((e) => h.has(e.content_type))), [t]));
    let { entries: n, filteredIds: i } = (0, c.Z)(t);
    return (
        (t = n),
        {
            requestId: (0, l.e7)([a.Z], () => a.Z.getFeedRequestId(u.YN.GLOBAL_FEED)),
            entries: t,
            impressionCappedEntryIds: i,
        }
    );
}
