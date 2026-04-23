n.d(t, { RP: () => N, S2: () => T, _G: () => I, lp: () => A, yO: () => g }), n(321073);
var l = n(136722),
    a = n(417597),
    r = n(260509),
    i = n(34457),
    s = n(696451),
    E = n(317525),
    _ = n(71393),
    u = n(287809),
    o = n(488926),
    c = n(652215),
    d = n(124759);
let A = Object.keys(c.xBc),
    g = Array.from(
        new Set([
            ...d.dR,
            ...c.nfo,
            c.xBc.ADMINISTRATOR,
            c.xBc.KICK_MEMBERS,
            c.xBc.BAN_MEMBERS,
            c.xBc.MANAGE_GUILD,
            c.xBc.MANAGE_CHANNELS,
            c.xBc.MANAGE_ROLES,
            c.xBc.MANAGE_MESSAGES,
            c.xBc.MANAGE_THREADS,
            c.xBc.MANAGE_GUILD_EXPRESSIONS,
            c.xBc.CREATE_GUILD_EXPRESSIONS,
            c.xBc.MANAGE_EVENTS,
            c.xBc.CREATE_EVENTS,
            c.xBc.MODERATE_MEMBERS,
            c.xBc.MENTION_EVERYONE,
            c.xBc.MANAGE_WEBHOOKS,
        ]),
    ).map((e) => {
        let t = A.find((t) => c.xBc[t] === e);
        if (null == t) throw Error(`Permission ${e} not found in Permissions`);
        return t;
    }),
    T = new Set(c.nfo);
function I(e, t) {
    return e === t;
}
function N(e, t, n) {
    let d = (0, a.bG)([_.A], () => _.A.getGuild(t), [t]);
    return (0, a.bG)([s.Ay, u.default, E.A], () => {
        let a = {},
            _ = s.Ay.getMember(t, e),
            A = u.default.getUser(e);
        if (null == d || null == _ || null == A) return a;
        let g = E.A.getEveryoneRole(d),
            T = o.cc({ user: A, context: d });
        for (let e of n) {
            let t = c.xBc[e];
            if (l.zy(T, t)) {
                for (let n of ((a[e] = []), _.roles)) {
                    let l = E.A.getRole(d.id, n);
                    null != l && ((0, i._m)(l, c.xBc.ADMINISTRATOR) || (0, i.sx)(l, t)) && a[e].push(l.id);
                }
                ((0, i._m)(g, c.xBc.ADMINISTRATOR) || (0, i.sx)(g, t)) && a[e].push(g.id),
                    (0, r.bM)(d, A) && a[e].push(A.id);
            }
        }
        return a;
    }, [d, t, n, e]);
}
