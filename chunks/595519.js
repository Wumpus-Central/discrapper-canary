n.d(t, {
    NX: () => f,
    WS: () => d,
    l5: () => u,
    qB: () => _
});
var r = n(106351),
    i = n(442837),
    o = n(424602),
    a = n(592125),
    s = n(496675),
    l = n(231338);
function c(e) {
    return [r.d.GUILD_TEXT, r.d.GUILD_VOICE, r.d.GROUP_DM, r.d.DM].includes(e);
}
function u(e) {
    if (null == e) return !1;
    let t = a.Z.getChannel(e.parent_id);
    return (null == t || (null == t ? void 0 : t.type) === r.d.GUILD_CATEGORY) && c(e.type);
}
function d(e) {
    return p(e, s.Z);
}
function f(e) {
    return (0, i.e7)([a.Z, s.Z], () => p(a.Z.getChannel(e), s.Z));
}
function p(e, t) {
    return !!(null != e && void 0 !== e && u(e) && (null == e.guild_id || t.can(l.Pl.USE_EMBEDDED_ACTIVITIES, e)));
}
function _(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.getChannel(e)),
        r = (0, i.e7)([s.Z], () => s.Z.can(l.Pl.USE_EMBEDDED_ACTIVITIES, n)),
        c = u(n),
        d = null != (null == n ? void 0 : n.guild_id);
    return !o.T.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled && (d ? r && c : c);
}
