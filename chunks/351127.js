(t.d(e, {
    B2: () => d,
    Ov: () => E,
    Qn: () => h,
    _o: () => u,
    pd: () => v
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
    c = t(135899);
let v = Object.keys(f.Plq),
    h = Array.from(new Set([...c.$X, ...f.yYS, f.Plq.ADMINISTRATOR, f.Plq.KICK_MEMBERS, f.Plq.BAN_MEMBERS, f.Plq.MANAGE_GUILD, f.Plq.MANAGE_CHANNELS, f.Plq.MANAGE_ROLES, f.Plq.MANAGE_MESSAGES, f.Plq.MANAGE_THREADS, f.Plq.MANAGE_GUILD_EXPRESSIONS, f.Plq.CREATE_GUILD_EXPRESSIONS, f.Plq.MANAGE_EVENTS, f.Plq.CREATE_EVENTS, f.Plq.MODERATE_MEMBERS, f.Plq.MENTION_EVERYONE, f.Plq.MANAGE_WEBHOOKS])).map((A) => {
        let e = v.find((e) => f.Plq[e] === A);
        if (null == e) throw Error('Permission '.concat(A, ' not found in Permissions'));
        return e;
    }),
    u = new Set(f.yYS);
function E(A, e) {
    return A === e;
}
function d(A, e, t) {
    let c = (0, r.e7)([a.Z], () => a.Z.getGuild(e), [e]);
    return (0, r.e7)(
        [i.ZP, o.default, s.Z],
        () => {
            let r = {},
                a = i.ZP.getMember(e, A),
                v = o.default.getUser(A);
            if (null == c || null == a || null == v) return r;
            let h = s.Z.getEveryoneRole(c),
                u = g.uB({
                    user: v,
                    context: c
                });
            for (let A of t) {
                let e = f.Plq[A];
                if (n.e$(u, e)) {
                    for (let t of ((r[A] = []), a.roles)) {
                        let l = s.Z.getRole(c.id, t);
                        null != l && (n.e$(l.permissions, f.Plq.ADMINISTRATOR) || n.Db(l.permissions, e)) && r[A].push(l.id);
                    }
                    ((n.e$(h.permissions, f.Plq.ADMINISTRATOR) || n.Db(h.permissions, e)) && r[A].push(h.id), (0, l.eM)(c, v) && r[A].push(v.id));
                }
            }
            return r;
        },
        [c, e, t, A]
    );
}
