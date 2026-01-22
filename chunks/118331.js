n.d(t, {
    d: () => s,
}),
    n(896048);
var r = n(681154),
    i = n(155718);
let a = new Set([
    r.I.TOP_ARTIST,
    r.I.TOP_GAME,
    r.I.PLAYED_GAME,
    r.I.WATCHED_MEDIA,
    r.I.LISTENED_SESSION,
    r.I.LAUNCHED_ACTIVITY,
]);

function s(e) {
    var t;
    let n = (null != (t = e.components) ? t : []).filter((e) => e.type === i.I5.CONTENT_INVENTORY_ENTRY);
    return (
        0 === n.length ||
        n.some((e) => {
            let { contentInventoryEntry: t } = e;
            return !a.has(t.content_type);
        })
    );
}
