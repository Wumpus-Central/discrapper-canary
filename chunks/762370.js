n.d(t, { A: () => h });
var i = n(735438),
    l = n.n(i),
    a = n(311907),
    s = n(734057),
    r = n(696451),
    o = n(317525),
    c = n(576705),
    d = n(488926),
    u = n(652215);
function h(e, t) {
    return (0, a.bG)([c.A, s.A, r.Ay, o.A], () => {
        if (null == t) return !1;
        let n = s.A.getChannel(t);
        if (null == n) return !1;
        let i = c.A.can(u.xBc.SEND_MESSAGES, n),
            a = r.Ay.getMember(n.guild_id, e),
            h = l().keyBy(o.A.getManyRoles(n.guild_id, a?.roles ?? []), "id"),
            m = d.$3({ permission: u.xBc.STREAM, user: e, context: n, roles: h });
        return i && m;
    });
}
