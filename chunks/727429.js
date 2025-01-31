n.d(t, {
    Z: () => o,
    e: () => l
});
var i = n(442837),
    r = n(914010),
    a = n(853856),
    s = n(981631);
function o(e) {
    let t = (0, i.e7)([r.Z], () => r.Z.getGuildId());
    return null != t ? t : e.getGuildId();
}
function l(e) {
    return r.Z.getGuildId() !== s.I_8 ? e.getGuildId() : a.Z.isFavorite(e.id) || (e.isThread() && a.Z.isFavorite(e.parent_id)) ? s.I_8 : e.getGuildId();
}
