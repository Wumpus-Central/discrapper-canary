n.d(t, {
    NX: () => d,
    WS: () => u,
    l5: () => c,
    qB: () => f
});
var r = n(106351),
    i = n(442837),
    a = n(592125),
    o = n(496675),
    s = n(231338);
function l(e) {
    return [r.d.GUILD_TEXT, r.d.GUILD_VOICE, r.d.GROUP_DM, r.d.DM].includes(e);
}
function c(e) {
    if (null == e) return !1;
    let t = a.Z.getChannel(e.parent_id);
    return (null == t || (null == t ? void 0 : t.type) === r.d.GUILD_CATEGORY) && l(e.type);
}
function u(e) {
    return _(e, o.Z);
}
function d(e) {
    return (0, i.e7)([a.Z, o.Z], () => _(a.Z.getChannel(e), o.Z));
}
function _(e, t) {
    return null != e && void 0 !== e && !!c(e) && (null == e.guild_id || !!t.can(s.Pl.USE_EMBEDDED_ACTIVITIES, e)) && !0;
}
function f() {
    return !1;
}
