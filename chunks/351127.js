n.d(t, {
    B2: () => g,
    Ov: () => m,
    Qn: () => h,
    _o: () => f,
    pd: () => p
}),
    n(388685),
    n(415506),
    n(539854);
var r = n(149765),
    i = n(399606),
    l = n(271383),
    o = n(485386),
    a = n(430824),
    s = n(594174),
    c = n(700785),
    u = n(981631),
    d = n(135899);
let p = Object.keys(u.Plq),
    h = Array.from(new Set([...d.$X, ...u.yYS, u.Plq.ADMINISTRATOR, u.Plq.KICK_MEMBERS, u.Plq.BAN_MEMBERS, u.Plq.MANAGE_GUILD, u.Plq.MANAGE_CHANNELS, u.Plq.MANAGE_ROLES, u.Plq.MANAGE_MESSAGES, u.Plq.MANAGE_THREADS, u.Plq.MANAGE_GUILD_EXPRESSIONS, u.Plq.CREATE_GUILD_EXPRESSIONS, u.Plq.MANAGE_EVENTS, u.Plq.CREATE_EVENTS, u.Plq.MODERATE_MEMBERS, u.Plq.MENTION_EVERYONE, u.Plq.MANAGE_WEBHOOKS])).map((e) => {
        let t = p.find((t) => u.Plq[t] === e);
        if (null == t) throw Error('Permission '.concat(e, ' not found in Permissions'));
        return t;
    }),
    f = new Set(u.yYS);
function m(e, t) {
    return e === t;
}
function g(e, t, n) {
    let d = (0, i.e7)([a.Z], () => a.Z.getGuild(t), [t]);
    return (0, i.e7)(
        [l.ZP, s.default, o.Z],
        () => {
            let i = {},
                a = l.ZP.getMember(t, e),
                p = s.default.getUser(e);
            if (null == d || null == a || null == p) return i;
            let h = o.Z.getRole(d.id, d.getEveryoneRoleId()),
                f = c.uB({
                    user: p,
                    context: d
                });
            for (let e of n) {
                let t = u.Plq[e];
                if (r.e$(f, t)) {
                    for (let n of ((i[e] = []), a.roles)) {
                        let l = o.Z.getRole(d.id, n);
                        null != l && (r.e$(l.permissions, u.Plq.ADMINISTRATOR) || r.Db(l.permissions, t)) && i[e].push(l.id);
                    }
                    null != h && (r.e$(h.permissions, u.Plq.ADMINISTRATOR) || r.Db(h.permissions, t)) && i[e].push(h.id), d.isOwner(p) && i[e].push(p.id);
                }
            }
            return i;
        },
        [d, t, n, e]
    );
}
