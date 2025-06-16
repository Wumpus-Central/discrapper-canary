n.d(t, {
    B2: () => m,
    Ov: () => f,
    Qn: () => p,
    _o: () => h,
    pd: () => d
}),
    n(388685),
    n(415506),
    n(539854);
var r = n(149765),
    i = n(399606),
    l = n(271383),
    a = n(430824),
    o = n(594174),
    s = n(700785),
    c = n(981631),
    u = n(135899);
let d = Object.keys(c.Plq),
    p = Array.from(new Set([...u.$X, ...c.yYS, c.Plq.ADMINISTRATOR, c.Plq.KICK_MEMBERS, c.Plq.BAN_MEMBERS, c.Plq.MANAGE_GUILD, c.Plq.MANAGE_CHANNELS, c.Plq.MANAGE_ROLES, c.Plq.MANAGE_MESSAGES, c.Plq.MANAGE_THREADS, c.Plq.MANAGE_GUILD_EXPRESSIONS, c.Plq.CREATE_GUILD_EXPRESSIONS, c.Plq.MANAGE_EVENTS, c.Plq.CREATE_EVENTS, c.Plq.MODERATE_MEMBERS, c.Plq.MENTION_EVERYONE, c.Plq.MANAGE_WEBHOOKS])).map((e) => {
        let t = d.find((t) => c.Plq[t] === e);
        if (null == t) throw Error('Permission '.concat(e, ' not found in Permissions'));
        return t;
    }),
    h = new Set(c.yYS);
function f(e, t) {
    return e === t;
}
function m(e, t, n) {
    let u = (0, i.e7)([a.Z], () => a.Z.getGuild(t), [t]);
    return (0, i.e7)(
        [l.ZP, o.default, a.Z],
        () => {
            let i = {},
                d = l.ZP.getMember(t, e),
                p = o.default.getUser(e);
            if (null == u || null == d || null == p) return i;
            let h = a.Z.getRole(u.id, u.getEveryoneRoleId()),
                f = s.uB({
                    user: p,
                    context: u
                });
            for (let e of n) {
                let t = c.Plq[e];
                if (r.e$(f, t)) {
                    for (let n of ((i[e] = []), d.roles)) {
                        let l = a.Z.getRole(u.id, n);
                        null != l && (r.e$(l.permissions, c.Plq.ADMINISTRATOR) || r.Db(l.permissions, t)) && i[e].push(l.id);
                    }
                    null != h && (r.e$(h.permissions, c.Plq.ADMINISTRATOR) || r.Db(h.permissions, t)) && i[e].push(h.id), u.isOwner(p) && i[e].push(p.id);
                }
            }
            return i;
        },
        [u, t, n, e]
    );
}
