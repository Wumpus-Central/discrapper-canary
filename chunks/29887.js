n.d(t, {
    Cn: () => h,
    R6: () => g,
    Ue: () => m,
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
    _ = n(388032);
let p = (e, t) => {
    let { joinRequest: n, joinRequestGuild: r } = (0, f.Z)(t.id),
        s = (0, a.e7)([d.default], () => d.default.getUser(null == n ? void 0 : n.userId)),
        _ = (0, o.l)({
            user: s,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id,
        }),
        p = (0, a.e7)([u.ZP, c.default], () => u.ZP.isMember(null == r ? void 0 : r.id, c.default.getId())),
        h = i.useCallback(() => {
            p && null != r && (0, l.XU)(r.id);
        }, [r, p]);
    return {
        guild: r,
        joinRequest: n,
        usernameHook: _,
        guildNameClick: h,
    };
};
function h(e) {
    var t;
    let { message: i, channel: a, compact: o } = e,
        { guild: l, joinRequest: c, usernameHook: u, guildNameClick: d } = p(i, a),
        f = null == c || null == (t = c.user) ? void 0 : t.username,
        h = null == l ? void 0 : l.name;
    return (0, r.jsx)(s.Z, {
        icon: n(570111),
        timestamp: i.timestamp,
        compact: o,
        children:
            null != f && null != h
                ? _.intl.format(_.t["21R6Ch"], {
                      username: f,
                      usernameHook: u(),
                      guildName: h,
                      guildNameClick: d,
                  })
                : _.intl.string(_.t["2VLV0d"]),
    });
}
function m(e) {
    var t;
    let { message: i, channel: a, compact: o } = e,
        { guild: l, joinRequest: c, usernameHook: u, guildNameClick: d } = p(i, a),
        f = null == c || null == (t = c.user) ? void 0 : t.username,
        h = null == l ? void 0 : l.name;
    return (0, r.jsx)(s.Z, {
        icon: n(474019),
        timestamp: i.timestamp,
        compact: o,
        children:
            null != f && null != h
                ? _.intl.format(_.t["Bz/QC2"], {
                      username: f,
                      usernameHook: u(),
                      guildName: h,
                      guildNameClick: d,
                  })
                : _.intl.string(_.t.FVF6qU),
    });
}
function g(e) {
    var t;
    let { message: i, channel: a, compact: o } = e,
        { guild: l, joinRequest: c, usernameHook: u, guildNameClick: d } = p(i, a),
        f = null == c || null == (t = c.user) ? void 0 : t.username,
        h = null == l ? void 0 : l.name;
    return (0, r.jsx)(s.Z, {
        icon: n(474019),
        timestamp: i.timestamp,
        compact: o,
        children:
            null != f && null != h
                ? _.intl.format(_.t.Kpkesg, {
                      username: f,
                      usernameHook: u(),
                      guildName: h,
                      guildNameClick: d,
                  })
                : _.intl.string(_.t.BMlbE7),
    });
}
