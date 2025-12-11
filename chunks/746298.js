n.d(t, { Z: () => l }), n(388685);
var r = n(164670),
    i = n(699955);
function l(e, t) {
    var n, l, o;
    if (!(0, i.cZ)({ location: t }) || null == e) return null;
    if ((0, r.$p)(e)) return null != (n = e.guildId) ? n : null;
    for (let t of null != (l = e.linkedGames) ? l : [])
        if (null != t.application && (0, r.$p)(t.application)) return null != (o = t.application.guildId) ? o : null;
    return null;
}
