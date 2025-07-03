(n.d(t, {
    B2: () => T,
    Ov: () => f,
    Qn: () => A,
    _o: () => m,
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
    d = n(981631),
    E = n(135899);
let _ = Object.keys(d.Plq),
    A = Array.from(new Set([...E.$X, ...d.yYS, d.Plq.ADMINISTRATOR, d.Plq.KICK_MEMBERS, d.Plq.BAN_MEMBERS, d.Plq.MANAGE_GUILD, d.Plq.MANAGE_CHANNELS, d.Plq.MANAGE_ROLES, d.Plq.MANAGE_MESSAGES, d.Plq.MANAGE_THREADS, d.Plq.MANAGE_GUILD_EXPRESSIONS, d.Plq.CREATE_GUILD_EXPRESSIONS, d.Plq.MANAGE_EVENTS, d.Plq.CREATE_EVENTS, d.Plq.MODERATE_MEMBERS, d.Plq.MENTION_EVERYONE, d.Plq.MANAGE_WEBHOOKS])).map((e) => {
        let t = _.find((t) => d.Plq[t] === e);
        if (null == t) throw Error('Permission '.concat(e, ' not found in Permissions'));
        return t;
    }),
    m = new Set(d.yYS);
function f(e, t) {
    return e === t;
}
function T(e, t, n) {
    let E = (0, l.e7)([o.Z], () => o.Z.getGuild(t), [t]);
    return (0, l.e7)(
        [s.ZP, u.default, a.Z],
        () => {
            let l = {},
                o = s.ZP.getMember(t, e),
                _ = u.default.getUser(e);
            if (null == E || null == o || null == _) return l;
            let A = a.Z.getEveryoneRole(E),
                m = c.uB({
                    user: _,
                    context: E
                });
            for (let e of n) {
                let t = d.Plq[e];
                if (r.e$(m, t)) {
                    for (let n of ((l[e] = []), o.roles)) {
                        let i = a.Z.getRole(E.id, n);
                        null != i && (r.e$(i.permissions, d.Plq.ADMINISTRATOR) || r.Db(i.permissions, t)) && l[e].push(i.id);
                    }
                    ((r.e$(A.permissions, d.Plq.ADMINISTRATOR) || r.Db(A.permissions, t)) && l[e].push(A.id), (0, i.eM)(E, _) && l[e].push(_.id));
                }
            }
            return l;
        },
        [E, t, n, e]
    );
}
