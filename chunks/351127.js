n.d(t, {
    B2: () => f,
    Ov: () => m,
    Qn: () => T,
    _o: () => I,
    pd: () => A,
}),
    n(388685),
    n(415506),
    n(539854);
var r = n(149765),
    l = n(399606),
    i = n(601964),
    a = n(345162),
    s = n(271383),
    o = n(485386),
    u = n(430824),
    c = n(594174),
    E = n(700785),
    d = n(981631),
    _ = n(135899);
let A = Object.keys(d.Plq),
    T = Array.from(
        new Set([
            ..._.$X,
            ...d.yYS,
            d.Plq.ADMINISTRATOR,
            d.Plq.KICK_MEMBERS,
            d.Plq.BAN_MEMBERS,
            d.Plq.MANAGE_GUILD,
            d.Plq.MANAGE_CHANNELS,
            d.Plq.MANAGE_ROLES,
            d.Plq.MANAGE_MESSAGES,
            d.Plq.MANAGE_THREADS,
            d.Plq.MANAGE_GUILD_EXPRESSIONS,
            d.Plq.CREATE_GUILD_EXPRESSIONS,
            d.Plq.MANAGE_EVENTS,
            d.Plq.CREATE_EVENTS,
            d.Plq.MODERATE_MEMBERS,
            d.Plq.MENTION_EVERYONE,
            d.Plq.MANAGE_WEBHOOKS,
        ]),
    ).map((e) => {
        let t = A.find((t) => d.Plq[t] === e);
        if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
        return t;
    }),
    I = new Set(d.yYS);
function m(e, t) {
    return e === t;
}
function f(e, t, n) {
    let _ = (0, l.e7)([u.Z], () => u.Z.getGuild(t), [t]);
    return (0, l.e7)([s.ZP, c.default, o.Z], () => {
        let l = {},
            u = s.ZP.getMember(t, e),
            A = c.default.getUser(e);
        if (null == _ || null == u || null == A) return l;
        let T = o.Z.getEveryoneRole(_),
            I = E.uB({
                user: A,
                context: _,
            });
        for (let e of n) {
            let t = d.Plq[e];
            if (r.e$(I, t)) {
                for (let n of ((l[e] = []), u.roles)) {
                    let r = o.Z.getRole(_.id, n);
                    null != r && ((0, a.Fs)(r, d.Plq.ADMINISTRATOR) || (0, a._N)(r, t)) && l[e].push(r.id);
                }
                ((0, a.Fs)(T, d.Plq.ADMINISTRATOR) || (0, a._N)(T, t)) && l[e].push(T.id),
                    (0, i.eM)(_, A) && l[e].push(A.id);
            }
        }
        return l;
    }, [_, t, n, e]);
}
