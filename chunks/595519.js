n.d(t, {
    NX: () => d,
    WS: () => u,
    l5: () => c,
    qB: () => _
});
var r = n(106351),
    i = n(442837),
    o = n(592125),
    a = n(496675),
    s = n(231338);
function l(e) {
    return [r.d.GUILD_TEXT, r.d.GUILD_VOICE, r.d.GROUP_DM, r.d.DM].includes(e);
}
function c(e) {
    if (null == e) return !1;
    let t = o.Z.getChannel(e.parent_id);
    return (null == t || (null == t ? void 0 : t.type) === r.d.GUILD_CATEGORY) && l(e.type);
}
function u(e) {
    return f(e, a.Z);
}
function d(e) {
    return (0, i.e7)([o.Z, a.Z], () => f(o.Z.getChannel(e), a.Z));
}
function f(e, t) {
    return null != e && void 0 !== e && !!c(e) && (null == e.guild_id || !!t.can(s.Pl.USE_EMBEDDED_ACTIVITIES, e)) && !0;
}
function _() {
    return !1;
}
