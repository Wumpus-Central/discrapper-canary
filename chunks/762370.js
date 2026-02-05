i.d(t, { A: () => m });
var n = i(735438),
    a = i.n(n),
    l = i(311907),
    r = i(734057),
    s = i(696451),
    o = i(317525),
    d = i(576705),
    c = i(488926),
    u = i(652215);
function m(e, t) {
    return (0, l.bG)([d.A, r.A, s.Ay, o.A], () => {
        if (null == t) return !1;
        let i = r.A.getChannel(t);
        if (null == i) return !1;
        let n = d.A.can(u.xBc.SEND_MESSAGES, i),
            l = s.Ay.getMember(i.guild_id, e),
            m = a().keyBy(o.A.getManyRoles(i.guild_id, l?.roles ?? []), "id"),
            _ = c.$3({ permission: u.xBc.STREAM, user: e, context: i, roles: m });
        return n && _;
    });
}
