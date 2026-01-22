n.d(t, {
    QN: () => m,
    Z_: () => h,
    ez: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(447215),
    o = n(888675),
    l = n(976860),
    c = n(961350),
    u = n(696451),
    d = n(287809),
    f = n(654265),
    p = n(985018);
let _ = (e, t) => {
    let { joinRequest: n, joinRequestGuild: r } = (0, f.A)(t.id),
        o = (0, a.bG)([d.default], () => d.default.getUser(null == n ? void 0 : n.userId)),
        p = (0, s.P)({
            user: o,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id,
        }),
        _ = (0, a.bG)([u.Ay, c.default], () => u.Ay.isMember(null == r ? void 0 : r.id, c.default.getId())),
        h = i.useCallback(() => {
            _ && null != r && (0, l.uh)(r.id);
        }, [r, _]);
    return {
        guild: r,
        joinRequest: n,
        usernameHook: p,
        guildNameClick: h,
    };
};
function h(e) {
    var t;
    let { message: i, channel: a, compact: s } = e,
        { guild: l, joinRequest: c, usernameHook: u, guildNameClick: d } = _(i, a),
        f = null == c || null == (t = c.user) ? void 0 : t.username,
        h = null == l ? void 0 : l.name;
    return (0, r.jsx)(o.A, {
        icon: n(394803),
        timestamp: i.timestamp,
        compact: s,
        children:
            null != f && null != h
                ? p.intl.format(p.t["21R6Ch"], {
                      username: f,
                      usernameHook: u(),
                      guildName: h,
                      guildNameClick: d,
                  })
                : p.intl.string(p.t["2VLV0d"]),
    });
}
function m(e) {
    var t;
    let { message: i, channel: a, compact: s } = e,
        { guild: l, joinRequest: c, usernameHook: u, guildNameClick: d } = _(i, a),
        f = null == c || null == (t = c.user) ? void 0 : t.username,
        h = null == l ? void 0 : l.name;
    return (0, r.jsx)(o.A, {
        icon: n(884797),
        timestamp: i.timestamp,
        compact: s,
        children:
            null != f && null != h
                ? p.intl.format(p.t["Bz/QC2"], {
                      username: f,
                      usernameHook: u(),
                      guildName: h,
                      guildNameClick: d,
                  })
                : p.intl.string(p.t.FVF6qU),
    });
}
function g(e) {
    var t;
    let { message: i, channel: a, compact: s } = e,
        { guild: l, joinRequest: c, usernameHook: u, guildNameClick: d } = _(i, a),
        f = null == c || null == (t = c.user) ? void 0 : t.username,
        h = null == l ? void 0 : l.name;
    return (0, r.jsx)(o.A, {
        icon: n(884797),
        timestamp: i.timestamp,
        compact: s,
        children:
            null != f && null != h
                ? p.intl.format(p.t.Kpkesg, {
                      username: f,
                      usernameHook: u(),
                      guildName: h,
                      guildNameClick: d,
                  })
                : p.intl.string(p.t.BMlbE7),
    });
}
