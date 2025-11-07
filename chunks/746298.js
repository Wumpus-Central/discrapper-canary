n.d(t, { Z: () => i }), n(388685);
let r = new Set(["1409663649038995658"]);
function i(e) {
    var t, n, i;
    if (null == e) return null;
    if (r.has(e.id)) return null != (t = e.guildId) ? t : null;
    for (let t of null != (n = e.linkedGames) ? n : [])
        if (null != t.application && r.has(t.application.id)) return null != (i = t.application.guildId) ? i : null;
    return null;
}
