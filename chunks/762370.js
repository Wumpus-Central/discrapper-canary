n.d(t, { A: () => f });
var r = n(735438),
    l = n.n(r),
    i = n(311907),
    a = n(734057),
    s = n(696451),
    o = n(317525),
    c = n(576705),
    u = n(488926),
    d = n(652215);
function f(e, t) {
    return (0, i.bG)([c.A, a.A, s.Ay, o.A], () => {
        var n;
        let r = a.A.getChannel(t);
        if (null == r) return !1;
        let i = c.A.can(d.xBc.SEND_MESSAGES, r),
            f = s.Ay.getMember(r.guild_id, e),
            p = l().keyBy(o.A.getManyRoles(r.guild_id, null != (n = null == f ? void 0 : f.roles) ? n : []), "id"),
            h = u.$3({
                permission: d.xBc.STREAM,
                user: e,
                context: r,
                roles: p,
            });
        return i && h;
    });
}
