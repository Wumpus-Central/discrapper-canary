n.d(t, { S$: () => A, YV: () => C, iA: () => f, z0: () => x });
var a = n(238136),
    l = n(155718),
    r = n(47167),
    i = n(734057),
    s = n(696451),
    o = n(317525),
    d = n(71393),
    c = n(994500),
    u = n(287809),
    m = n(248465),
    _ = n(403362),
    p = n(562153),
    h = n(489414);
n(322980);
let A = 1e3;
function C(e, t, n) {
    let a = i.A.getChannel(n);
    if (null == a) return [];
    let r = e === l.I5.USER_SELECT || e === l.I5.MENTIONABLE_SELECT,
        s = e === l.I5.ROLE_SELECT || e === l.I5.MENTIONABLE_SELECT,
        { users: o, roles: d } = m.Ay.queryMentionResults({
            query: t,
            channel: a,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: r,
            canMentionRoles: s,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: 15,
        });
    return [
        ...o.map((e) => {
            let t = p.Ay.getNickname(a.getGuildId(), n, e.user);
            return { type: h.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
        }),
        ...d.map((e) => ({ type: h.iw.ROLE, value: e.id, label: e.name })),
    ];
}
function x(e, t, n) {
    let a = i.A.getChannel(t);
    return null == a
        ? []
        : m.Ay.queryApplicationCommandChannelResults({ query: e, channel: a, channelTypes: n, limit: 15 }).channels.map(
              (e) => ({ type: h.iw.CHANNEL, value: e.id, label: (0, r.m1)(e, u.default, c.A) }),
          );
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let l = d.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case a.i.USER: {
                    let t = u.default.getUser(e.id);
                    if (null == t) return null;
                    let n = null != l ? s.Ay.getNick(l.id, t.id) : void 0;
                    return { type: h.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case a.i.ROLE: {
                    if (null == l) return null;
                    let t = o.A.getRole(l.id, e.id);
                    if (null == t) return null;
                    return { type: h.iw.ROLE, value: t.id, label: t.name };
                }
                case a.i.CHANNEL: {
                    if (null == l) return null;
                    let t = i.A.getChannel(e.id);
                    if (null == t || t.guild_id !== l.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: h.iw.CHANNEL, value: t.id, label: (0, r.m1)(t, u.default, c.A) };
                }
            }
        })
        .filter(_.Vq);
}
