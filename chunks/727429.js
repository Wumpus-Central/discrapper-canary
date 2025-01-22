r.d(n, {
    Z: function () {
        return l;
    },
    e: function () {
        return u;
    }
});
var i = r(442837),
    a = r(914010),
    o = r(853856),
    s = r(981631);
function l(e) {
    let n = (0, i.e7)([a.Z], () => a.Z.getGuildId());
    return null != n ? n : e.getGuildId();
}
function u(e) {
    return a.Z.getGuildId() !== s.I_8 ? e.getGuildId() : o.Z.isFavorite(e.id) || (e.isThread() && o.Z.isFavorite(e.parent_id)) ? s.I_8 : e.getGuildId();
}
