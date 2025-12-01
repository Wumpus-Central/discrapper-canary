n.d(t, {
    Cn: () => m,
    R6: () => g,
    Ue: () => h,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(942951),
    s = n(834129),
    l = n(703656),
    c = n(314897),
    u = n(271383),
    d = n(594174),
    f = n(602606),
    p = n(388032);
let _ = (e, t) => {
    let { joinRequest: n, joinRequestGuild: r } = (0, f.Z)(t.id),
        s = (0, a.e7)([d.default], () => d.default.getUser(null == n ? void 0 : n.userId)),
        p = (0, o.l)({
            user: s,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id,
        }),
        _ = (0, a.e7)([u.ZP, c.default], () => u.ZP.isMember(null == r ? void 0 : r.id, c.default.getId())),
        m = i.useCallback(() => {
            _ && null != r && (0, l.XU)(r.id);
        }, [r, _]);
    return {
        guild: r,
        joinRequest: n,
        usernameHook: p,
        guildNameClick: m,
    };
};
function m(e) {
    var t;
    let { message: i, channel: a, compact: o } = e,
        { guild: l, joinRequest: c, usernameHook: u, guildNameClick: d } = _(i, a),
        f = null == c || null == (t = c.user) ? void 0 : t.username,
        m = null == l ? void 0 : l.name;
    return (0, r.jsx)(s.Z, {
        icon: n(570111),
        timestamp: i.timestamp,
        compact: o,
        children:
            null != f && null != m
                ? p.intl.format(p.t["21R6Ch"], {
                      username: f,
                      usernameHook: u(),
                      guildName: m,
                      guildNameClick: d,
                  })
                : p.intl.string(p.t["2VLV0d"]),
    });
}
function h(e) {
    var t;
    let { message: i, channel: a, compact: o } = e,
        { guild: l, joinRequest: c, usernameHook: u, guildNameClick: d } = _(i, a),
        f = null == c || null == (t = c.user) ? void 0 : t.username,
        m = null == l ? void 0 : l.name;
    return (0, r.jsx)(s.Z, {
        icon: n(474019),
        timestamp: i.timestamp,
        compact: o,
        children:
            null != f && null != m
                ? p.intl.format(p.t["Bz/QC2"], {
                      username: f,
                      usernameHook: u(),
                      guildName: m,
                      guildNameClick: d,
                  })
                : p.intl.string(p.t.FVF6qU),
    });
}
function g(e) {
    var t;
    let { message: i, channel: a, compact: o } = e,
        { guild: l, joinRequest: c, usernameHook: u, guildNameClick: d } = _(i, a),
        f = null == c || null == (t = c.user) ? void 0 : t.username,
        m = null == l ? void 0 : l.name;
    return (0, r.jsx)(s.Z, {
        icon: n(474019),
        timestamp: i.timestamp,
        compact: o,
        children:
            null != f && null != m
                ? p.intl.format(p.t.Kpkesg, {
                      username: f,
                      usernameHook: u(),
                      guildName: m,
                      guildNameClick: d,
                  })
                : p.intl.string(p.t.BMlbE7),
    });
}
