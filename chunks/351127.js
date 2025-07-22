(t.d(e, {
    B2: () => d,
    Ov: () => E,
    Qn: () => h,
    _o: () => u,
    pd: () => c
}),
    t(388685),
    t(415506),
    t(539854));
var n = t(149765),
    r = t(399606),
    l = t(601964),
    i = t(271383),
    s = t(485386),
    a = t(430824),
    o = t(594174),
    g = t(700785),
    v = t(981631),
    f = t(135899);
let c = Object.keys(v.Plq),
    h = Array.from(new Set([...f.$X, ...v.yYS, v.Plq.ADMINISTRATOR, v.Plq.KICK_MEMBERS, v.Plq.BAN_MEMBERS, v.Plq.MANAGE_GUILD, v.Plq.MANAGE_CHANNELS, v.Plq.MANAGE_ROLES, v.Plq.MANAGE_MESSAGES, v.Plq.MANAGE_THREADS, v.Plq.MANAGE_GUILD_EXPRESSIONS, v.Plq.CREATE_GUILD_EXPRESSIONS, v.Plq.MANAGE_EVENTS, v.Plq.CREATE_EVENTS, v.Plq.MODERATE_MEMBERS, v.Plq.MENTION_EVERYONE, v.Plq.MANAGE_WEBHOOKS])).map((A) => {
        let e = c.find((e) => v.Plq[e] === A);
        if (null == e) throw Error('Permission '.concat(A, ' not found in Permissions'));
        return e;
    }),
    u = new Set(v.yYS);
function E(A, e) {
    return A === e;
}
function d(A, e, t) {
    let f = (0, r.e7)([a.Z], () => a.Z.getGuild(e), [e]);
    return (0, r.e7)(
        [i.ZP, o.default, s.Z],
        () => {
            let r = {},
                a = i.ZP.getMember(e, A),
                c = o.default.getUser(A);
            if (null == f || null == a || null == c) return r;
            let h = s.Z.getEveryoneRole(f),
                u = g.uB({
                    user: c,
                    context: f
                });
            for (let A of t) {
                let e = v.Plq[A];
                if (n.e$(u, e)) {
                    for (let t of ((r[A] = []), a.roles)) {
                        let l = s.Z.getRole(f.id, t);
                        null != l && (n.e$(l.permissions, v.Plq.ADMINISTRATOR) || n.Db(l.permissions, e)) && r[A].push(l.id);
                    }
                    ((n.e$(h.permissions, v.Plq.ADMINISTRATOR) || n.Db(h.permissions, e)) && r[A].push(h.id), (0, l.eM)(f, c) && r[A].push(c.id));
                }
            }
            return r;
        },
        [f, e, t, A]
    );
}
