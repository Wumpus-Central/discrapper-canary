n.d(t, { S$: () => A, YV: () => h, iA: () => E, z0: () => C });
var l = n(238136),
    a = n(155718),
    r = n(734057),
    s = n(696451),
    i = n(317525),
    o = n(71393),
    d = n(287809),
    c = n(248465),
    u = n(403362),
    m = n(562153),
    p = n(489414);
n(322980);
let A = 1e3;
function h(e, t, n) {
    let l = r.A.getChannel(n);
    if (null == l) return [];
    let s = e === a.I5.USER_SELECT || e === a.I5.MENTIONABLE_SELECT,
        i = e === a.I5.ROLE_SELECT || e === a.I5.MENTIONABLE_SELECT,
        { users: o, roles: d } = c.Ay.queryMentionResults({
            query: t,
            channel: l,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: s,
            canMentionRoles: i,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: 15,
        });
    return [
        ...o.map((e) => {
            let t = m.Ay.getNickname(l.getGuildId(), n, e.user);
            return { type: p.iw.USER, value: e.user.id, label: t ?? e.user.globalName ?? e.user.username };
        }),
        ...d.map((e) => ({ type: p.iw.ROLE, value: e.id, label: e.name })),
    ];
}
function C(e, t, n) {
    let l = r.A.getChannel(t);
    return null == l
        ? []
        : c.Ay.queryApplicationCommandChannelResults({ query: e, channel: l, channelTypes: n, limit: 15 }).channels.map(
              (e) => ({ type: p.iw.CHANNEL, value: e.id, label: e.name }),
          );
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let a = o.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case l.i.USER: {
                    let t = d.default.getUser(e.id);
                    if (null == t) return null;
                    let n = null != a ? s.Ay.getNick(a.id, t.id) : void 0;
                    return { type: p.iw.USER, value: t.id, label: n ?? t.globalName ?? t.username };
                }
                case l.i.ROLE: {
                    if (null == a) return null;
                    let t = i.A.getRole(a.id, e.id);
                    if (null == t) return null;
                    return { type: p.iw.ROLE, value: t.id, label: t.name };
                }
                case l.i.CHANNEL: {
                    if (null == a) return null;
                    let t = r.A.getChannel(e.id);
                    if (null == t || t.guild_id !== a.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return { type: p.iw.CHANNEL, value: t.id, label: t.name };
                }
            }
        })
        .filter(u.Vq);
}
