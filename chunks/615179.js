"use strict";
n.d(t, { QN: () => I, Z_: () => m, ez: () => T });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(447215),
    a = n(888675),
    o = n(976860),
    c = n(961350),
    u = n(696451),
    d = n(287809),
    _ = n(654265),
    E = n(985018);
let A = (e, t) => {
    let { joinRequest: n, joinRequestGuild: i } = (0, _.A)(t.id),
        a = (0, l.bG)([d.default], () => d.default.getUser(n?.userId)),
        E = (0, s.P)({ user: a, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
        A = (0, l.bG)([u.Ay, c.default], () => u.Ay.isMember(i?.id, c.default.getId())),
        m = r.useCallback(() => {
            A && null != i && (0, o.uh)(i.id);
        }, [i, A]);
    return { guild: i, joinRequest: n, usernameHook: E, guildNameClick: m };
};
function m(e) {
    let { message: t, channel: r, compact: l } = e,
        { guild: s, joinRequest: o, usernameHook: c, guildNameClick: u } = A(t, r),
        d = o?.user?.username,
        _ = s?.name;
    return (0, i.jsx)(a.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: l,
        children:
            null != d && null != _
                ? E.intl.format(E.t["21R6Ch"], { username: d, usernameHook: c(), guildName: _, guildNameClick: u })
                : E.intl.string(E.t["2VLV0d"]),
    });
}
function I(e) {
    let { message: t, channel: r, compact: l } = e,
        { guild: s, joinRequest: o, usernameHook: c, guildNameClick: u } = A(t, r),
        d = o?.user?.username,
        _ = s?.name;
    return (0, i.jsx)(a.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: l,
        children:
            null != d && null != _
                ? E.intl.format(E.t["Bz/QC2"], { username: d, usernameHook: c(), guildName: _, guildNameClick: u })
                : E.intl.string(E.t.FVF6qU),
    });
}
function T(e) {
    let { message: t, channel: r, compact: l } = e,
        { guild: s, joinRequest: o, usernameHook: c, guildNameClick: u } = A(t, r),
        d = o?.user?.username,
        _ = s?.name;
    return (0, i.jsx)(a.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: l,
        children:
            null != d && null != _
                ? E.intl.format(E.t.Kpkesg, { username: d, usernameHook: c(), guildName: _, guildNameClick: u })
                : E.intl.string(E.t.BMlbE7),
    });
}
