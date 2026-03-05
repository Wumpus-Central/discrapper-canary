n.d(t, { S$: () => C, YV: () => E, iA: () => N, z0: () => x });
var l = n(238136),
    a = n(155718),
    r = n(47167),
    s = n(734057),
    i = n(696451),
    o = n(317525),
    c = n(71393),
    d = n(994500),
    u = n(287809),
    m = n(248465),
    p = n(403362),
    A = n(562153),
    h = n(489414);
n(322980);
let C = 1e3;
function E(e, t, n) {
    let l = s.A.getChannel(n);
    if (null == l) return [];
    let r = e === a.I5.USER_SELECT || e === a.I5.MENTIONABLE_SELECT,
        i = e === a.I5.ROLE_SELECT || e === a.I5.MENTIONABLE_SELECT,
        { users: o, roles: c } = m.Ay.queryMentionResults({
            query: t,
            channel: l,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: r,
            canMentionRoles: i,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: 15,
        });
    return [
        ...o.map((e) => {
            let t = A.Ay.getNickname(l.getGuildId(), n, e.user);
            return { type: h.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
        }),
        ...c.map((e) => ({ type: h.iw.ROLE, value: e.id, label: e.name })),
    ];
}
function x(e, t, n) {
    let l = s.A.getChannel(t);
    return null == l
        ? []
        : m.Ay.queryApplicationCommandChannelResults({ query: e, channel: l, channelTypes: n, limit: 15 }).channels.map(
              (e) => ({ type: h.iw.CHANNEL, value: e.id, label: (0, r.m1)(e, u.default, d.A) }),
          );
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let a = c.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case l.i.USER: {
                    let t = u.default.getUser(e.id);
                    if (null == t) return null;
                    let n = null != a ? i.Ay.getNick(a.id, t.id) : void 0;
                    return { type: h.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case l.i.ROLE: {
                    if (null == a) return null;
                    let t = o.A.getRole(a.id, e.id);
                    if (null == t) return null;
                    return { type: h.iw.ROLE, value: t.id, label: t.name };
                }
                case l.i.CHANNEL: {
                    if (null == a) return null;
                    let t = s.A.getChannel(e.id);
                    if (null == t || t.guild_id !== a.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: h.iw.CHANNEL, value: t.id, label: (0, r.m1)(t, u.default, d.A) };
                }
            }
        })
        .filter(p.Vq);
}
