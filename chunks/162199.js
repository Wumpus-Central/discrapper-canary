n.d(t, { A: () => o, j: () => d });
var i = n(17928),
    r = n(181079),
    a = n(5180),
    s = n(967198),
    l = n(652215);
function o(e) {
    let t = (0, i.bG)([s.A], () => s.A.getGuildId());
    return null != t ? t : e.getGuildId();
}
function d(e) {
    return (0, a.ai)(s.A.getGuildId()) && (r.A.isFavorite(e.id) || (e.isThread() && r.A.isFavorite(e.parent_id)))
        ? l.YYv
        : e.getGuildId();
}
