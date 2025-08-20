t.d(e, {
    B2: () => C,
    Ov: () => E,
    Qn: () => u,
    _o: () => d,
    pd: () => h,
}),
    t(388685),
    t(415506),
    t(539854);
var n = t(149765),
    r = t(399606),
    l = t(601964),
    i = t(345162),
    s = t(271383),
    a = t(485386),
    o = t(430824),
    g = t(594174),
    c = t(700785),
    f = t(981631),
    v = t(135899);
let h = Object.keys(f.Plq),
    u = Array.from(
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
        let e = h.find((e) => f.Plq[e] === A);
        if (null == e) throw Error("Permission ".concat(A, " not found in Permissions"));
        return e;
    }),
    d = new Set(f.yYS);
function E(A, e) {
    return A === e;
}
function C(A, e, t) {
    let v = (0, r.e7)([o.Z], () => o.Z.getGuild(e), [e]);
    return (0, r.e7)([s.ZP, g.default, a.Z], () => {
        let r = {},
            o = s.ZP.getMember(e, A),
            h = g.default.getUser(A);
        if (null == v || null == o || null == h) return r;
        let u = a.Z.getEveryoneRole(v),
            d = c.uB({
                user: h,
                context: v,
            });
        for (let A of t) {
            let e = f.Plq[A];
            if (n.e$(d, e)) {
                for (let t of ((r[A] = []), o.roles)) {
                    let n = a.Z.getRole(v.id, t);
                    null != n && ((0, i.Fs)(n, f.Plq.ADMINISTRATOR) || (0, i._N)(n, e)) && r[A].push(n.id);
                }
                ((0, i.Fs)(u, f.Plq.ADMINISTRATOR) || (0, i._N)(u, e)) && r[A].push(u.id),
                    (0, l.eM)(v, h) && r[A].push(h.id);
            }
        }
        return r;
    }, [v, e, t, A]);
}
