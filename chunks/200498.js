n.d(t, {
    B: () => m,
    Os: () => p,
    _L: () => _,
    jU: () => g,
    nG: () => h
});
var i = n(149765),
    r = n(442837),
    a = n(41776);
n(314897);
var s = n(592125),
    o = n(430824),
    l = n(496675),
    u = n(700785),
    c = n(146085),
    d = n(427679),
    f = n(981631);
function _(e, t, n) {
    var r, a;
    let s = null == n ? void 0 : n.permissionOverwrites[e];
    return {
        id: e,
        type: t,
        deny: null !== (r = null == s ? void 0 : s.deny) && void 0 !== r ? r : u.Hn,
        allow: i.Od(null !== (a = null == s ? void 0 : s.allow) && void 0 !== a ? a : u.Hn, c.yP)
    };
}
function p(e) {
    let { allow: t, deny: n } = e;
    return i.fS(t, u.Hn) && i.fS(n, u.Hn);
}
function h(e) {
    return (0, r.e7)(
        [l.Z, o.Z, s.Z],
        () => {
            let t = s.Z.getChannel(e),
                n = o.Z.getGuild(null == t ? void 0 : t.getGuildId());
            return !!(l.Z.can(f.Plq.ADMINISTRATOR, n) || l.Z.can(f.Plq.MANAGE_ROLES, t, void 0, void 0, !0) || l.Z.can(c.N, t));
        },
        [e]
    );
}
function m(e) {
    return (0, r.e7)([s.Z, l.Z], () => null != e && l.Z.can(f.Plq.MUTE_MEMBERS, s.Z.getChannel(e)), [e]);
}
function g(e) {
    return !!(null != e && e.isGuildStageVoice() && a.Z.isLurking(e.guild_id) && d.Z.isPublic(e.id)) && l.Z.can(c.gl, e);
}
