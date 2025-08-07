n.d(t, {
    B2: () => g,
    Ov: () => I,
    Qn: () => T,
    _o: () => m,
    pd: () => A,
}),
    n(388685),
    n(415506),
    n(539854);
var r = n(149765),
    l = n(399606),
    s = n(601964),
    i = n(345162),
    a = n(271383),
    o = n(485386),
    u = n(430824),
    c = n(594174),
    d = n(700785),
    E = n(981631),
    _ = n(135899);
let A = Object.keys(E.Plq),
    T = Array.from(
        new Set([
            ..._.$X,
            ...E.yYS,
            E.Plq.ADMINISTRATOR,
            E.Plq.KICK_MEMBERS,
            E.Plq.BAN_MEMBERS,
            E.Plq.MANAGE_GUILD,
            E.Plq.MANAGE_CHANNELS,
            E.Plq.MANAGE_ROLES,
            E.Plq.MANAGE_MESSAGES,
            E.Plq.MANAGE_THREADS,
            E.Plq.MANAGE_GUILD_EXPRESSIONS,
            E.Plq.CREATE_GUILD_EXPRESSIONS,
            E.Plq.MANAGE_EVENTS,
            E.Plq.CREATE_EVENTS,
            E.Plq.MODERATE_MEMBERS,
            E.Plq.MENTION_EVERYONE,
            E.Plq.MANAGE_WEBHOOKS,
        ]),
    ).map((e) => {
        let t = A.find((t) => E.Plq[t] === e);
        if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
        return t;
    }),
    m = new Set(E.yYS);
function I(e, t) {
    return e === t;
}
function g(e, t, n) {
    let _ = (0, l.e7)([u.Z], () => u.Z.getGuild(t), [t]);
    return (0, l.e7)([a.ZP, c.default, o.Z], () => {
        let l = {},
            u = a.ZP.getMember(t, e),
            A = c.default.getUser(e);
        if (null == _ || null == u || null == A) return l;
        let T = o.Z.getEveryoneRole(_),
            m = d.uB({
                user: A,
                context: _,
            });
        for (let e of n) {
            let t = E.Plq[e];
            if (r.e$(m, t)) {
                for (let n of ((l[e] = []), u.roles)) {
                    let r = o.Z.getRole(_.id, n);
                    null != r && ((0, i.Fs)(r, E.Plq.ADMINISTRATOR) || (0, i._N)(r, t)) && l[e].push(r.id);
                }
                ((0, i.Fs)(T, E.Plq.ADMINISTRATOR) || (0, i._N)(T, t)) && l[e].push(T.id),
                    (0, s.eM)(_, A) && l[e].push(A.id);
            }
        }
        return l;
    }, [_, t, n, e]);
}
