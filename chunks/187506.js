n.d(t, { M: () => a }), n(388685);
var r = n(876215),
    i = n(911969);
let l = new Set([r.s.TOP_ARTIST, r.s.TOP_GAME, r.s.PLAYED_GAME, r.s.WATCHED_MEDIA, r.s.LISTENED_SESSION, r.s.LAUNCHED_ACTIVITY]);
function a(e) {
    var t;
    let n = (null != (t = e.components) ? t : []).filter((e) => e.type === i.re.CONTENT_INVENTORY_ENTRY);
    return (
        0 === n.length ||
        n.some((e) => {
            let { contentInventoryEntry: t } = e;
            return !l.has(t.content_type);
        })
    );
}
