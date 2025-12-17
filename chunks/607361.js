n.d(t, { Z: () => p });
var i = n(392711),
    r = n.n(i),
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
        let i = a.Z.getChannel(t);
        if (null == i) return !1;
        let l = c.Z.can(d.Plq.SEND_MESSAGES, i),
            p = o.ZP.getMember(i.guild_id, e),
            f = r().keyBy(s.Z.getManyRoles(i.guild_id, null != (n = null == p ? void 0 : p.roles) ? n : []), "id"),
            h = u.BT({
                permission: d.Plq.STREAM,
                user: e,
                context: i,
                roles: f,
            });
        return l && h;
    });
}
