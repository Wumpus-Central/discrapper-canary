n.d(t, {
    B2: () => g,
    Ov: () => m,
    Qn: () => h,
    _o: () => f,
    pd: () => p
}),
    n(47120),
    n(411104),
    n(653041);
var r = n(149765),
    i = n(399606),
    l = n(271383),
    o = n(430824),
    a = n(594174),
    s = n(700785),
    c = n(981631),
    u = n(135899);
let d = [c.Plq.USE_CLYDE_AI],
    p = Object.keys(c.Plq).filter((e) => !d.includes(c.Plq[e])),
    h = Array.from(new Set([...u.$X, ...c.yYS, c.Plq.ADMINISTRATOR, c.Plq.KICK_MEMBERS, c.Plq.BAN_MEMBERS, c.Plq.MANAGE_GUILD, c.Plq.MANAGE_CHANNELS, c.Plq.MANAGE_ROLES, c.Plq.MANAGE_MESSAGES, c.Plq.MANAGE_THREADS, c.Plq.MANAGE_GUILD_EXPRESSIONS, c.Plq.CREATE_GUILD_EXPRESSIONS, c.Plq.MANAGE_EVENTS, c.Plq.CREATE_EVENTS, c.Plq.MODERATE_MEMBERS, c.Plq.MENTION_EVERYONE, c.Plq.MANAGE_WEBHOOKS])).map((e) => {
        let t = p.find((t) => c.Plq[t] === e);
        if (null == t) throw Error('Permission '.concat(e, ' not found in Permissions'));
        return t;
    }),
    f = new Set(c.yYS);
function m(e, t) {
    return e === t;
}
function g(e, t, n) {
    let u = (0, i.e7)([o.Z], () => o.Z.getGuild(t), [t]);
    return (0, i.e7)(
        [l.ZP, a.default, o.Z],
        () => {
            let i = {},
                d = l.ZP.getMember(t, e),
                p = a.default.getUser(e);
            if (null == u || null == d || null == p) return i;
            let h = o.Z.getRole(u.id, u.getEveryoneRoleId()),
                f = s.uB({
                    user: p,
                    context: u
                });
            for (let e of n) {
                let t = c.Plq[e];
                if (r.e$(f, t)) {
                    for (let n of ((i[e] = []), d.roles)) {
                        let l = o.Z.getRole(u.id, n);
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
