n.d(t, { d: () => s });
var i = n(681154),
    l = n(155718);
let a = new Set([
    i.ContentInventoryEntryType.TOP_ARTIST,
    i.ContentInventoryEntryType.TOP_GAME,
    i.ContentInventoryEntryType.PLAYED_GAME,
    i.ContentInventoryEntryType.WATCHED_MEDIA,
    i.ContentInventoryEntryType.LISTENED_SESSION,
    i.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
function s(e) {
    let t = (e.components ?? []).filter((e) => e.type === l.I5.CONTENT_INVENTORY_ENTRY);
    return (
        0 === t.length ||
        t.some((e) => {
            let { contentInventoryEntry: t } = e;
            return !a.has(t.content_type);
        })
    );
}
