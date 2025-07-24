(t.d(e, {
    B2: () => d,
    Ov: () => u,
    Qn: () => h,
    _o: () => E,
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
    f = t(981631),
    v = t(135899);
let c = Object.keys(f.Plq),
    h = Array.from(new Set([...v.$X, ...f.yYS, f.Plq.ADMINISTRATOR, f.Plq.KICK_MEMBERS, f.Plq.BAN_MEMBERS, f.Plq.MANAGE_GUILD, f.Plq.MANAGE_CHANNELS, f.Plq.MANAGE_ROLES, f.Plq.MANAGE_MESSAGES, f.Plq.MANAGE_THREADS, f.Plq.MANAGE_GUILD_EXPRESSIONS, f.Plq.CREATE_GUILD_EXPRESSIONS, f.Plq.MANAGE_EVENTS, f.Plq.CREATE_EVENTS, f.Plq.MODERATE_MEMBERS, f.Plq.MENTION_EVERYONE, f.Plq.MANAGE_WEBHOOKS])).map((A) => {
        let e = c.find((e) => f.Plq[e] === A);
        if (null == e) throw Error('Permission '.concat(A, ' not found in Permissions'));
        return e;
    }),
    E = new Set(f.yYS);
function u(A, e) {
    return A === e;
}
function d(A, e, t) {
    let v = (0, r.e7)([a.Z], () => a.Z.getGuild(e), [e]);
    return (0, r.e7)(
        [i.ZP, o.default, s.Z],
        () => {
            let r = {},
                a = i.ZP.getMember(e, A),
                c = o.default.getUser(A);
            if (null == v || null == a || null == c) return r;
            let h = s.Z.getEveryoneRole(v),
                E = g.uB({
                    user: c,
                    context: v
                });
            for (let A of t) {
                let e = f.Plq[A];
                if (n.e$(E, e)) {
                    for (let t of ((r[A] = []), a.roles)) {
                        let l = s.Z.getRole(v.id, t);
                        null != l && (n.e$(l.permissions, f.Plq.ADMINISTRATOR) || n.Db(l.permissions, e)) && r[A].push(l.id);
                    }
                    ((n.e$(h.permissions, f.Plq.ADMINISTRATOR) || n.Db(h.permissions, e)) && r[A].push(h.id), (0, l.eM)(v, c) && r[A].push(c.id));
                }
            }
            return r;
        },
        [v, e, t, A]
    );
}
