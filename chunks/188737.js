n.d(t, { A: () => p });
var r = n(64700),
    l = n(681154),
    i = n(311907),
    a = n(941726),
    s = n(99753),
    o = n(903790),
    u = n(929509),
    c = n(475450),
    d = n(424994);
let _ = new Set([
    l.ContentInventoryEntryType.PLAYED_GAME,
    l.ContentInventoryEntryType.WATCHED_MEDIA,
    l.ContentInventoryEntryType.TOP_GAME,
    l.ContentInventoryEntryType.TOP_ARTIST,
    l.ContentInventoryEntryType.LISTENED_SESSION,
    l.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
function p(e) {
    let t = (0, c.A)({ id: d.X1.GLOBAL_FEED });
    (t = (0, o.A)({ entries: t, channelId: e })), (t = r.useMemo(() => t?.filter((e) => _.has(e.content_type)), [t]));
    let { entries: n, filteredIds: l } = (0, u.A)(t);
    return (
        (t = n),
        {
            requestId: (0, i.bG)([s.A], () => s.A.getFeedRequestId(d.X1.GLOBAL_FEED)),
            entries: (t = (0, a.Ay)(t)),
            impressionCappedEntryIds: l,
        }
    );
}
