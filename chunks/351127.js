(t.d(e, {
    B2: () => C,
    Ov: () => d,
    Qn: () => E,
    _o: () => u,
    pd: () => h
}),
    t(388685),
    t(415506),
    t(539854));
var n = t(149765),
    r = t(399606),
    l = t(601964),
    i = t(345162),
    s = t(271383),
    a = t(485386),
    o = t(430824),
    g = t(594174),
    f = t(700785),
    v = t(981631),
    c = t(135899);
let h = Object.keys(v.Plq),
    E = Array.from(new Set([...c.$X, ...v.yYS, v.Plq.ADMINISTRATOR, v.Plq.KICK_MEMBERS, v.Plq.BAN_MEMBERS, v.Plq.MANAGE_GUILD, v.Plq.MANAGE_CHANNELS, v.Plq.MANAGE_ROLES, v.Plq.MANAGE_MESSAGES, v.Plq.MANAGE_THREADS, v.Plq.MANAGE_GUILD_EXPRESSIONS, v.Plq.CREATE_GUILD_EXPRESSIONS, v.Plq.MANAGE_EVENTS, v.Plq.CREATE_EVENTS, v.Plq.MODERATE_MEMBERS, v.Plq.MENTION_EVERYONE, v.Plq.MANAGE_WEBHOOKS])).map((A) => {
        let e = h.find((e) => v.Plq[e] === A);
        if (null == e) throw Error('Permission '.concat(A, ' not found in Permissions'));
        return e;
    }),
    u = new Set(v.yYS);
function d(A, e) {
    return A === e;
}
function C(A, e, t) {
    let c = (0, r.e7)([o.Z], () => o.Z.getGuild(e), [e]);
    return (0, r.e7)(
        [s.ZP, g.default, a.Z],
        () => {
            let r = {},
                o = s.ZP.getMember(e, A),
                h = g.default.getUser(A);
            if (null == c || null == o || null == h) return r;
            let E = a.Z.getEveryoneRole(c),
                u = f.uB({
                    user: h,
                    context: c
                });
            for (let A of t) {
                let e = v.Plq[A];
                if (n.e$(u, e)) {
                    for (let t of ((r[A] = []), o.roles)) {
                        let n = a.Z.getRole(c.id, t);
                        null != n && ((0, i.Fs)(n, v.Plq.ADMINISTRATOR) || (0, i._N)(n, e)) && r[A].push(n.id);
                    }
                    (((0, i.Fs)(E, v.Plq.ADMINISTRATOR) || (0, i._N)(E, e)) && r[A].push(E.id), (0, l.eM)(c, h) && r[A].push(h.id));
                }
            }
            return r;
        },
        [c, e, t, A]
    );
}
