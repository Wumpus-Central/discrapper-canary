r.d(n, {
    B: function () {
        return E;
    },
    Os: function () {
        return m;
    },
    _L: function () {
        return _;
    },
    jU: function () {
        return v;
    },
    nG: function () {
        return g;
    }
});
var i = r(149765),
    a = r(442837),
    o = r(41776);
r(314897);
var s = r(592125),
    l = r(430824),
    u = r(496675),
    c = r(700785),
    d = r(146085),
    f = r(427679),
    p = r(981631);
function h(e, n, r) {
    var i, a;
    return {
        id: e,
        type: n,
        deny: BigFlagUtils.remove(null !== (i = null == r ? void 0 : r.deny) && void 0 !== i ? i : PermissionUtils.NONE, MODERATE_STAGE_CHANNEL_PERMISSIONS),
        allow: BigFlagUtils.combine(MODERATE_STAGE_CHANNEL_PERMISSIONS, null !== (a = null == r ? void 0 : r.allow) && void 0 !== a ? a : PermissionUtils.NONE)
    };
}
function _(e, n, r) {
    var a, o;
    let s = null == r ? void 0 : r.permissionOverwrites[e];
    return {
        id: e,
        type: n,
        deny: null !== (a = null == s ? void 0 : s.deny) && void 0 !== a ? a : c.Hn,
        allow: i.Od(null !== (o = null == s ? void 0 : s.allow) && void 0 !== o ? o : c.Hn, d.yP)
    };
}
function m(e) {
    let { allow: n, deny: r } = e;
    return i.fS(n, c.Hn) && i.fS(r, c.Hn);
}
function g(e) {
    return (0, a.e7)(
        [u.Z, l.Z, s.Z],
        () => {
            let n = s.Z.getChannel(e),
                r = l.Z.getGuild(null == n ? void 0 : n.getGuildId());
            return !!(u.Z.can(p.Plq.ADMINISTRATOR, r) || u.Z.can(p.Plq.MANAGE_ROLES, n, void 0, void 0, !0) || u.Z.can(d.N, n)) || !1;
        },
        [e]
    );
}
function E(e) {
    return (0, a.e7)([s.Z, u.Z], () => null != e && u.Z.can(p.Plq.MUTE_MEMBERS, s.Z.getChannel(e)), [e]);
}
function v(e) {
    return !!(null != e && e.isGuildStageVoice() && o.Z.isLurking(e.guild_id) && f.Z.isPublic(e.id)) && u.Z.can(d.gl, e);
}
