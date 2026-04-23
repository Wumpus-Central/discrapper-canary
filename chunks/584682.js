n.d(t, { A: () => _, j: () => l });
var i = n(17928),
    r = n(967198),
    a = n(181079),
    s = n(652215);
function _(e) {
    let t = (0, i.bG)([r.A], () => r.A.getGuildId());
    return null != t ? t : e.getGuildId();
}
function l(e) {
    return r.A.getGuildId() !== s.YYv
        ? e.getGuildId()
        : a.A.isFavorite(e.id) || (e.isThread() && a.A.isFavorite(e.parent_id))
          ? s.YYv
          : e.getGuildId();
}
