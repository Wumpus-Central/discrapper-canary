n.d(t, { Z: () => p });
var r = n(392711),
    i = n.n(r),
    l = n(442837),
    a = n(592125),
    o = n(271383),
    s = n(485386),
    c = n(496675),
    u = n(700785),
    d = n(981631);
function p(e, t) {
    return (0, l.e7)([c.Z, a.Z, o.ZP, s.Z], () => {
        var n;
        let r = a.Z.getChannel(t);
        if (null == r) return !1;
        let l = c.Z.can(d.Plq.SEND_MESSAGES, r),
            p = o.ZP.getMember(r.guild_id, e),
            f = i().keyBy(s.Z.getManyRoles(r.guild_id, null != (n = null == p ? void 0 : p.roles) ? n : []), "id"),
            h = u.BT({
                permission: d.Plq.STREAM,
                user: e,
                context: r,
                roles: f,
            });
        return l && h;
    });
}
