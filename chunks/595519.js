n.d(t, {
    NX: () => f,
    WS: () => d,
    l5: () => c,
    qB: () => p
});
var i = n(106351),
    r = n(442837),
    a = n(424602),
    s = n(592125),
    o = n(496675),
    l = n(231338);
function u(e) {
    return [i.d.GUILD_TEXT, i.d.GUILD_VOICE, i.d.GROUP_DM, i.d.DM].includes(e);
}
function c(e) {
    if (null == e) return !1;
    let t = s.Z.getChannel(e.parent_id);
    return (null == t || (null == t ? void 0 : t.type) === i.d.GUILD_CATEGORY) && u(e.type);
}
function d(e) {
    return _(e, o.Z);
}
function f(e) {
    return (0, r.e7)([s.Z, o.Z], () => _(s.Z.getChannel(e), o.Z));
}
function _(e, t) {
    return !!(null != e && void 0 !== e && c(e) && (null == e.guild_id || t.can(l.Pl.USE_EMBEDDED_ACTIVITIES, e)));
}
function p(e, t) {
    let n = (0, r.e7)([s.Z], () => s.Z.getChannel(e)),
        i = (0, r.e7)([o.Z], () => o.Z.can(l.Pl.USE_EMBEDDED_ACTIVITIES, n)),
        u = c(n),
        d = null != (null == n ? void 0 : n.guild_id);
    return !a.T.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled && (d ? i && u : u);
}
