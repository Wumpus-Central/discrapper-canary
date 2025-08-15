t.d(e, {
    B2: () => C,
    Ov: () => E,
    Qn: () => h,
    _o: () => d,
    pd: () => u,
}),
    t(388685),
    t(415506),
    t(539854);
var n = t(149765),
    r = t(399606),
    l = t(601964),
    i = t(345162),
    a = t(271383),
    s = t(485386),
    o = t(430824),
    g = t(594174),
    c = t(700785),
    f = t(981631),
    v = t(135899);
let u = Object.keys(f.Plq),
    h = Array.from(
        new Set([
            ...v.$X,
            ...f.yYS,
            f.Plq.ADMINISTRATOR,
            f.Plq.KICK_MEMBERS,
            f.Plq.BAN_MEMBERS,
            f.Plq.MANAGE_GUILD,
            f.Plq.MANAGE_CHANNELS,
            f.Plq.MANAGE_ROLES,
            f.Plq.MANAGE_MESSAGES,
            f.Plq.MANAGE_THREADS,
            f.Plq.MANAGE_GUILD_EXPRESSIONS,
            f.Plq.CREATE_GUILD_EXPRESSIONS,
            f.Plq.MANAGE_EVENTS,
            f.Plq.CREATE_EVENTS,
            f.Plq.MODERATE_MEMBERS,
            f.Plq.MENTION_EVERYONE,
            f.Plq.MANAGE_WEBHOOKS,
        ]),
    ).map((A) => {
        let e = u.find((e) => f.Plq[e] === A);
        if (null == e) throw Error("Permission ".concat(A, " not found in Permissions"));
        return e;
    }),
    d = new Set(f.yYS);
function E(A, e) {
    return A === e;
}
function C(A, e, t) {
    let v = (0, r.e7)([o.Z], () => o.Z.getGuild(e), [e]);
    return (0, r.e7)([a.ZP, g.default, s.Z], () => {
        let r = {},
            o = a.ZP.getMember(e, A),
            u = g.default.getUser(A);
        if (null == v || null == o || null == u) return r;
        let h = s.Z.getEveryoneRole(v),
            d = c.uB({
                user: u,
                context: v,
            });
        for (let A of t) {
            let e = f.Plq[A];
            if (n.e$(d, e)) {
                for (let t of ((r[A] = []), o.roles)) {
                    let n = s.Z.getRole(v.id, t);
                    null != n && ((0, i.Fs)(n, f.Plq.ADMINISTRATOR) || (0, i._N)(n, e)) && r[A].push(n.id);
                }
                ((0, i.Fs)(h, f.Plq.ADMINISTRATOR) || (0, i._N)(h, e)) && r[A].push(h.id),
                    (0, l.eM)(v, u) && r[A].push(u.id);
            }
        }
        return r;
    }, [v, e, t, A]);
}
