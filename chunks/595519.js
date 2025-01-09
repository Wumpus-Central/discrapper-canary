r.d(n, {
    NX: function () {
        return _;
    },
    WS: function () {
        return f;
    },
    l5: function () {
        return d;
    },
    qB: function () {
        return m;
    }
});
var i = r(106351),
    a = r(442837),
    s = r(424602),
    o = r(592125),
    l = r(496675),
    u = r(231338);
function c(e) {
    return [i.d.GUILD_TEXT, i.d.GUILD_VOICE, i.d.GROUP_DM, i.d.DM].includes(e);
}
function d(e) {
    if (null == e) return !1;
    let n = o.Z.getChannel(e.parent_id);
    return (null == n || (null == n ? void 0 : n.type) === i.d.GUILD_CATEGORY) && c(e.type);
}
function f(e) {
    return h(e, l.Z);
}
function _(e) {
    return (0, a.e7)([o.Z, l.Z], () => h(o.Z.getChannel(e), l.Z));
}
function h(e, n) {
    return !!(null != e && void 0 !== e && d(e) && (null == e.guild_id || n.can(u.Pl.USE_EMBEDDED_ACTIVITIES, e))) || !1;
}
function p(e) {
    return (null == e ? void 0 : e.guild_id) != null || d(e);
}
function m(e, n) {
    let r = (0, a.e7)([o.Z], () => o.Z.getChannel(e)),
        i = (0, a.e7)([l.Z], () => l.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, r)),
        c = d(r),
        f = null == r ? void 0 : r.guild_id,
        _ = null != f;
    return !s.T.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled && (_ ? i && c : c);
}
