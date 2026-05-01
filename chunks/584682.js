n.d(t, { A: () => l, j: () => o });
var i = n(17928),
    a = n(967198),
    r = n(181079),
    s = n(652215);
function l(e) {
    let t = (0, i.bG)([a.A], () => a.A.getGuildId());
    return null != t ? t : e.getGuildId();
}
function o(e) {
    return a.A.getGuildId() !== s.YYv
        ? e.getGuildId()
        : r.A.isFavorite(e.id) || (e.isThread() && r.A.isFavorite(e.parent_id))
          ? s.YYv
          : e.getGuildId();
}
