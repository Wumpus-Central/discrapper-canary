n.d(t, { QN: () => g, Z_: () => p, ez: () => A });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(447215),
    s = n(888675),
    o = n(976860),
    d = n(961350),
    c = n(696451),
    u = n(287809),
    m = n(654265),
    _ = n(985018);
let h = (e, t) => {
    let { joinRequest: n, joinRequestGuild: i } = (0, m.A)(t.id),
        s = (0, a.bG)([u.default], () => u.default.getUser(n?.userId)),
        _ = (0, r.P)({ user: s, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
        h = (0, a.bG)([c.Ay, d.default], () => c.Ay.isMember(i?.id, d.default.getId())),
        p = l.useCallback(() => {
            h && null != i && (0, o.uh)(i.id);
        }, [i, h]);
    return { guild: i, joinRequest: n, usernameHook: _, guildNameClick: p };
};
function p(e) {
    let { message: t, channel: l, compact: a } = e,
        { guild: r, joinRequest: o, usernameHook: d, guildNameClick: c } = h(t, l),
        u = o?.user?.username,
        m = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(394803),
        timestamp: t.timestamp,
        compact: a,
        children:
            null != u && null != m
                ? _.intl.format(_.t["21R6Ch"], { username: u, usernameHook: d(), guildName: m, guildNameClick: c })
                : _.intl.string(_.t["2VLV0d"]),
    });
}
function g(e) {
    let { message: t, channel: l, compact: a } = e,
        { guild: r, joinRequest: o, usernameHook: d, guildNameClick: c } = h(t, l),
        u = o?.user?.username,
        m = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children:
            null != u && null != m
                ? _.intl.format(_.t["Bz/QC2"], { username: u, usernameHook: d(), guildName: m, guildNameClick: c })
                : _.intl.string(_.t.FVF6qU),
    });
}
function A(e) {
    let { message: t, channel: l, compact: a } = e,
        { guild: r, joinRequest: o, usernameHook: d, guildNameClick: c } = h(t, l),
        u = o?.user?.username,
        m = r?.name;
    return (0, i.jsx)(s.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children:
            null != u && null != m
                ? _.intl.format(_.t.Kpkesg, { username: u, usernameHook: d(), guildName: m, guildNameClick: c })
                : _.intl.string(_.t.BMlbE7),
    });
}
