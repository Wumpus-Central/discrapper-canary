n.d(t, {
    A: () => f,
});
var r = n(735438),
    i = n.n(r),
    l = n(311907),
    a = n(734057),
    o = n(696451),
    s = n(317525),
    c = n(576705),
    u = n(488926),
    d = n(652215);

function f(e, t) {
    return (0, l.bG)([c.A, a.A, o.Ay, s.A], () => {
        var n;
        if (null == t) return !1;
        let r = a.A.getChannel(t);
        if (null == r) return !1;
        let l = c.A.can(d.xBc.SEND_MESSAGES, r),
            f = o.Ay.getMember(r.guild_id, e),
            p = i().keyBy(s.A.getManyRoles(r.guild_id, null != (n = null == f ? void 0 : f.roles) ? n : []), "id"),
            m = u.$3({
                permission: d.xBc.STREAM,
                user: e,
                context: r,
                roles: p,
            });
        return l && m;
    });
}
