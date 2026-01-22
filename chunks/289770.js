n.d(t, {
    S$: () => h,
    YV: () => m,
    iA: () => E,
    z0: () => g,
}),
    n(896048);
var r = n(238136),
    i = n(155718),
    a = n(734057),
    s = n(696451),
    o = n(317525),
    l = n(71393),
    c = n(287809),
    u = n(248465),
    d = n(403362),
    f = n(562153),
    p = n(489414);
n(322980);
let _ = 15,
    h = 1e3;

function m(e, t, n) {
    let r = a.A.getChannel(n);
    if (null == r) return [];
    let s = e === i.I5.USER_SELECT || e === i.I5.MENTIONABLE_SELECT,
        o = e === i.I5.ROLE_SELECT || e === i.I5.MENTIONABLE_SELECT,
        { users: l, roles: c } = u.Ay.queryMentionResults({
            query: t,
            channel: r,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: s,
            canMentionRoles: o,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: _,
        });
    return [
        ...l.map((e) => {
            var t;
            let i = f.Ay.getNickname(r.getGuildId(), n, e.user);
            return {
                type: p.iw.USER,
                value: e.user.id,
                label: null != (t = null != i ? i : e.user.globalName) ? t : e.user.username,
            };
        }),
        ...c.map((e) => ({
            type: p.iw.ROLE,
            value: e.id,
            label: e.name,
        })),
    ];
}

function g(e, t, n) {
    let r = a.A.getChannel(t);
    return null == r
        ? []
        : u.Ay.queryApplicationCommandChannelResults({
              query: e,
              channel: r,
              channelTypes: n,
              limit: _,
          }).channels.map((e) => ({
              type: p.iw.CHANNEL,
              value: e.id,
              label: e.name,
          }));
}

function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let i = l.A.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case r.i.USER: {
                    var t;
                    let n = c.default.getUser(e.id);
                    if (null == n) return null;
                    let r = null != i ? s.Ay.getNick(i.id, n.id) : void 0;
                    return {
                        type: p.iw.USER,
                        value: n.id,
                        label: null != (t = null != r ? r : n.globalName) ? t : n.username,
                    };
                }
                case r.i.ROLE: {
                    if (null == i) return null;
                    let t = o.A.getRole(i.id, e.id);
                    if (null == t) return null;
                    return {
                        type: p.iw.ROLE,
                        value: t.id,
                        label: t.name,
                    };
                }
                case r.i.CHANNEL: {
                    if (null == i) return null;
                    let t = a.A.getChannel(e.id);
                    if (null == t || t.guild_id !== i.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return {
                        type: p.iw.CHANNEL,
                        value: t.id,
                        label: t.name,
                    };
                }
            }
        })
        .filter(d.Vq);
}
