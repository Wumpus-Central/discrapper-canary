(n.d(t, {
    B2: () => g,
    Ov: () => I,
    Qn: () => A,
    _o: () => T,
    pd: () => _
}),
    n(388685),
    n(415506),
    n(539854));
var r = n(149765),
    l = n(399606),
    i = n(601964),
    s = n(271383),
    a = n(485386),
    o = n(430824),
    u = n(594174),
    c = n(700785),
    E = n(981631),
    d = n(135899);
let _ = Object.keys(E.Plq),
    A = Array.from(new Set([...d.$X, ...E.yYS, E.Plq.ADMINISTRATOR, E.Plq.KICK_MEMBERS, E.Plq.BAN_MEMBERS, E.Plq.MANAGE_GUILD, E.Plq.MANAGE_CHANNELS, E.Plq.MANAGE_ROLES, E.Plq.MANAGE_MESSAGES, E.Plq.MANAGE_THREADS, E.Plq.MANAGE_GUILD_EXPRESSIONS, E.Plq.CREATE_GUILD_EXPRESSIONS, E.Plq.MANAGE_EVENTS, E.Plq.CREATE_EVENTS, E.Plq.MODERATE_MEMBERS, E.Plq.MENTION_EVERYONE, E.Plq.MANAGE_WEBHOOKS])).map((e) => {
        let t = _.find((t) => E.Plq[t] === e);
        if (null == t) throw Error('Permission '.concat(e, ' not found in Permissions'));
        return t;
    }),
    T = new Set(E.yYS);
function I(e, t) {
    return e === t;
}
function g(e, t, n) {
    let d = (0, l.e7)([o.Z], () => o.Z.getGuild(t), [t]);
    return (0, l.e7)(
        [s.ZP, u.default, a.Z],
        () => {
            let l = {},
                o = s.ZP.getMember(t, e),
                _ = u.default.getUser(e);
            if (null == d || null == o || null == _) return l;
            let A = a.Z.getEveryoneRole(d),
                T = c.uB({
                    user: _,
                    context: d
                });
            for (let e of n) {
                let t = E.Plq[e];
                if (r.e$(T, t)) {
                    for (let n of ((l[e] = []), o.roles)) {
                        let i = a.Z.getRole(d.id, n);
                        null != i && (r.e$(i.permissions, E.Plq.ADMINISTRATOR) || r.Db(i.permissions, t)) && l[e].push(i.id);
                    }
                    ((r.e$(A.permissions, E.Plq.ADMINISTRATOR) || r.Db(A.permissions, t)) && l[e].push(A.id), (0, i.eM)(d, _) && l[e].push(_.id));
                }
            }
            return l;
        },
        [d, t, n, e]
    );
}
