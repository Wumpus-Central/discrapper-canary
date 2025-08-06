n.d(t, {
    Z: () => s,
    e: () => l
});
var r = n(442837),
    i = n(914010),
    o = n(853856),
    a = n(981631);
function s(e) {
    let t = (0, r.e7)([i.Z], () => i.Z.getGuildId());
    return null != t ? t : e.getGuildId();
}
function l(e) {
    return i.Z.getGuildId() !== a.I_8 ? e.getGuildId() : o.Z.isFavorite(e.id) || (e.isThread() && o.Z.isFavorite(e.parent_id)) ? a.I_8 : e.getGuildId();
}
