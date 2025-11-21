n.d(t, { Z: () => l }), n(388685);
var r = n(699955),
    i = n(582113);
function l(e, t) {
    var n, l, o;
    if (!(0, r.cZ)({ location: t }) || null == e) return null;
    if (i.Nx.has(e.id)) return null != (n = e.guildId) ? n : null;
    for (let t of null != (l = e.linkedGames) ? l : [])
        if (null != t.application && i.Nx.has(t.application.id)) return null != (o = t.application.guildId) ? o : null;
    return null;
}
