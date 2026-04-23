"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(681154),
    s = n(311907),
    a = n(941726),
    o = n(99753),
    l = n(903790),
    u = n(929509),
    c = n(475450),
    d = n(424994);
let _ = new Set([
    i.ContentInventoryEntryType.PLAYED_GAME,
    i.ContentInventoryEntryType.WATCHED_MEDIA,
    i.ContentInventoryEntryType.TOP_GAME,
    i.ContentInventoryEntryType.TOP_ARTIST,
    i.ContentInventoryEntryType.LISTENED_SESSION,
    i.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
function f(e) {
    let t = (0, c.A)({ id: d.X1.GLOBAL_FEED });
    (t = (0, l.A)({ entries: t, channelId: e })), (t = r.useMemo(() => t?.filter((e) => _.has(e.content_type)), [t]));
    let { entries: n, filteredIds: i } = (0, u.A)(t);
    return (
        (t = n),
        {
            requestId: (0, s.bG)([o.A], () => o.A.getFeedRequestId(d.X1.GLOBAL_FEED)),
            entries: (t = (0, a.Ay)(t)),
            impressionCappedEntryIds: i,
        }
    );
}
