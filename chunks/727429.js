n.d(t, {
    Z: () => s,
    e: () => l
});
var r = n(442837),
    i = n(914010),
    a = n(853856),
    o = n(981631);
function s(e) {
    let t = (0, r.e7)([i.Z], () => i.Z.getGuildId());
    return null != t ? t : e.getGuildId();
}
function l(e) {
    return i.Z.getGuildId() !== o.I_8 ? e.getGuildId() : a.Z.isFavorite(e.id) || (e.isThread() && a.Z.isFavorite(e.parent_id)) ? o.I_8 : e.getGuildId();
}
