n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(64700),
    i = n(681154),
    a = n(311907),
    s = n(941726),
    o = n(99753),
    l = n(903790),
    c = n(929509),
    u = n(475450),
    d = n(424994);
let f = new Set([
    i.ContentInventoryEntryType.PLAYED_GAME,
    i.ContentInventoryEntryType.WATCHED_MEDIA,
    i.ContentInventoryEntryType.TOP_GAME,
    i.ContentInventoryEntryType.TOP_ARTIST,
    i.ContentInventoryEntryType.LISTENED_SESSION,
    i.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);

function p(e) {
    let t = (0, u.A)({
        id: d.X1.GLOBAL_FEED,
    });
    (t = (0, l.A)({
        entries: t,
        channelId: e,
    })),
        (t = r.useMemo(() => (null == t ? void 0 : t.filter((e) => f.has(e.content_type))), [t]));
    let { entries: n, filteredIds: i } = (0, c.A)(t);
    return (
        (t = n),
        {
            requestId: (0, a.bG)([o.A], () => o.A.getFeedRequestId(d.X1.GLOBAL_FEED)),
            entries: (t = (0, s.Ay)(t)),
            impressionCappedEntryIds: i,
        }
    );
}
