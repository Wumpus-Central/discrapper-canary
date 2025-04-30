n.d(t, {
    Cn: () => h,
    R6: () => _,
    Ue: () => g
});
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(942951),
    o = n(834129),
    s = n(703656),
    c = n(314897),
    u = n(271383),
    d = n(594174),
    p = n(602606),
    m = n(388032);
let f = (e, t) => {
    let { joinRequest: n, joinRequestGuild: r } = (0, p.Z)(t.id),
        o = (0, l.e7)([d.default], () => d.default.getUser(null == n ? void 0 : n.userId)),
        m = (0, a.l)({
            user: o,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id
        }),
        f = (0, l.e7)([u.ZP, c.default], () => u.ZP.isMember(null == r ? void 0 : r.id, c.default.getId())),
        h = i.useCallback(() => {
            f && null != r && (0, s.XU)(r.id);
        }, [r, f]);
    return {
        guild: r,
        joinRequest: n,
        usernameHook: m,
        guildNameClick: h
    };
};
function h(e) {
    var t;
    let { message: i, channel: l, compact: a } = e,
        { guild: s, joinRequest: c, usernameHook: u, guildNameClick: d } = f(i, l),
        p = null == c || null == (t = c.user) ? void 0 : t.username,
        h = null == s ? void 0 : s.name;
    return (0, r.jsx)(o.Z, {
        icon: n(570111),
        timestamp: i.timestamp,
        compact: a,
        children:
            null != p && null != h
                ? m.intl.format(m.t['21R6Cg'], {
                      username: p,
                      usernameHook: u(),
                      guildName: h,
                      guildNameClick: d
                  })
                : m.intl.string(m.t['2VLV0d'])
    });
}
function g(e) {
    var t;
    let { message: i, channel: l, compact: a } = e,
        { guild: s, joinRequest: c, usernameHook: u, guildNameClick: d } = f(i, l),
        p = null == c || null == (t = c.user) ? void 0 : t.username,
        h = null == s ? void 0 : s.name;
    return (0, r.jsx)(o.Z, {
        icon: n(474019),
        timestamp: i.timestamp,
        compact: a,
        children:
            null != p && null != h
                ? m.intl.format(m.t['Bz/QCw'], {
                      username: p,
                      usernameHook: u(),
                      guildName: h,
                      guildNameClick: d
                  })
                : m.intl.string(m.t.FVF6qa)
    });
}
function _(e) {
    var t;
    let { message: i, channel: l, compact: a } = e,
        { guild: s, joinRequest: c, usernameHook: u, guildNameClick: d } = f(i, l),
        p = null == c || null == (t = c.user) ? void 0 : t.username,
        h = null == s ? void 0 : s.name;
    return (0, r.jsx)(o.Z, {
        icon: n(474019),
        timestamp: i.timestamp,
        compact: a,
        children:
            null != p && null != h
                ? m.intl.format(m.t.Kpkesr, {
                      username: p,
                      usernameHook: u(),
                      guildName: h,
                      guildNameClick: d
                  })
                : m.intl.string(m.t.BMlbEx)
    });
}
