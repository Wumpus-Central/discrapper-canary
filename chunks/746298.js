n.d(t, { Z: () => i }), n(388685);
var r = n(582113);
function i(e) {
    var t, n, i;
    if (null == e) return null;
    if (r.Nx.has(e.id)) return null != (t = e.guildId) ? t : null;
    for (let t of null != (n = e.linkedGames) ? n : [])
        if (null != t.application && r.Nx.has(t.application.id)) return null != (i = t.application.guildId) ? i : null;
    return null;
}
