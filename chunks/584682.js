n.d(t, {
    A: () => o,
    j: () => l,
});
var r = n(311907),
    i = n(967198),
    a = n(181079),
    s = n(652215);

function o(e) {
    let t = (0, r.bG)([i.A], () => i.A.getGuildId());
    return null != t ? t : e.getGuildId();
}

function l(e) {
    return i.A.getGuildId() !== s.YYv
        ? e.getGuildId()
        : a.A.isFavorite(e.id) || (e.isThread() && a.A.isFavorite(e.parent_id))
          ? s.YYv
          : e.getGuildId();
}
