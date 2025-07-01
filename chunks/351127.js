(n.d(t, {
    B2: () => T,
    Ov: () => m,
    Qn: () => _,
    _o: () => A,
    pd: () => E
}),
    n(388685),
    n(415506),
    n(539854));
var r = n(149765),
    l = n(399606),
    i = n(271383),
    s = n(485386),
    a = n(430824),
    o = n(594174),
    u = n(700785),
    c = n(981631),
    d = n(135899);
let E = Object.keys(c.Plq),
    _ = Array.from(new Set([...d.$X, ...c.yYS, c.Plq.ADMINISTRATOR, c.Plq.KICK_MEMBERS, c.Plq.BAN_MEMBERS, c.Plq.MANAGE_GUILD, c.Plq.MANAGE_CHANNELS, c.Plq.MANAGE_ROLES, c.Plq.MANAGE_MESSAGES, c.Plq.MANAGE_THREADS, c.Plq.MANAGE_GUILD_EXPRESSIONS, c.Plq.CREATE_GUILD_EXPRESSIONS, c.Plq.MANAGE_EVENTS, c.Plq.CREATE_EVENTS, c.Plq.MODERATE_MEMBERS, c.Plq.MENTION_EVERYONE, c.Plq.MANAGE_WEBHOOKS])).map((e) => {
        let t = E.find((t) => c.Plq[t] === e);
        if (null == t) throw Error('Permission '.concat(e, ' not found in Permissions'));
        return t;
    }),
    A = new Set(c.yYS);
function m(e, t) {
    return e === t;
}
function T(e, t, n) {
    let d = (0, l.e7)([a.Z], () => a.Z.getGuild(t), [t]);
    return (0, l.e7)(
        [i.ZP, o.default, s.Z],
        () => {
            let l = {},
                a = i.ZP.getMember(t, e),
                E = o.default.getUser(e);
            if (null == d || null == a || null == E) return l;
            let _ = s.Z.getRole(d.id, d.getEveryoneRoleId()),
                A = u.uB({
                    user: E,
                    context: d
                });
            for (let e of n) {
                let t = c.Plq[e];
                if (r.e$(A, t)) {
                    for (let n of ((l[e] = []), a.roles)) {
                        let i = s.Z.getRole(d.id, n);
                        null != i && (r.e$(i.permissions, c.Plq.ADMINISTRATOR) || r.Db(i.permissions, t)) && l[e].push(i.id);
                    }
                    (null != _ && (r.e$(_.permissions, c.Plq.ADMINISTRATOR) || r.Db(_.permissions, t)) && l[e].push(_.id), d.isOwner(E) && l[e].push(E.id));
                }
            }
            return l;
        },
        [d, t, n, e]
    );
}
