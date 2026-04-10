"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(448761),
    s = n(311907),
    l = n(397927),
    a = n(763754),
    c = n(447215),
    o = n(888675),
    u = n(287809),
    d = n(641131),
    _ = n(985018);
let E = {
        [r.l.REPORT_TO_MOD_BAN_USER]: () => d.default.komFTv,
        [r.l.REPORT_TO_MOD_KICK_USER]: () => d.default.FAJmJV,
        [r.l.REPORT_TO_MOD_TIMEOUT_USER]: () => d.default["90r/sR"],
    },
    A = {
        [r.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => d.default["4023i8"],
        [r.l.REPORT_TO_MOD_CLOSED_REPORT]: () => d.default.UE81zV,
    };
function m(e) {
    let { type: t } = e,
        n = null;
    switch (t) {
        case r.l.REPORT_TO_MOD_BAN_USER:
            n = l.wI0;
            break;
        case r.l.REPORT_TO_MOD_KICK_USER:
            n = l.Nxw;
            break;
        case r.l.REPORT_TO_MOD_TIMEOUT_USER:
            n = l.gQi;
            break;
        case r.l.REPORT_TO_MOD_DELETED_MESSAGE:
            n = l.ucK;
            break;
        case r.l.REPORT_TO_MOD_CLOSED_REPORT:
            n = l.Uzd;
    }
    return null != n ? (0, i.jsx)(n, { size: "refresh_sm", color: "currentColor" }) : null;
}
function I(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: l, mentions: d, type: A } = t,
        I = (0, a.Ay)(t),
        T = t.getChannelId(),
        g = (0, s.bG)([u.default], () => u.default.getUser(d[0]), [d]),
        N = (0, a.m2)(l, n),
        f = (0, c.P)({ user: l, channelId: T, guildId: n.guild_id, messageId: t.id })(N),
        p = (0, a.d8)(g, n),
        C = (0, c.P)({ user: g, channelId: T, guildId: n.guild_id, messageId: t.id })(p),
        h = E[A] ?? null;
    if (null == h) return null;
    let S = _.intl.format(h(), { actorName: I.nick, actorHook: f, targetName: p?.nick, targetHook: C });
    return (0, i.jsx)(o.A, { iconNode: (0, i.jsx)(m, { type: A }), timestamp: t.timestamp, compact: r, children: S });
}
function T(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: s, type: l } = t,
        u = (0, a.Ay)(t),
        d = t.getChannelId(),
        E = (0, a.m2)(s, n),
        I = (0, c.P)({ user: s, channelId: d, guildId: n.guild_id, messageId: t.id })(E),
        T = A[l] ?? null;
    if (null == T) return null;
    let g = _.intl.format(T(), { actorName: u.nick, actorHook: I });
    return (0, i.jsx)(o.A, { iconNode: (0, i.jsx)(m, { type: l }), timestamp: t.timestamp, compact: r, children: g });
}
function g(e) {
    let { message: t, channel: n, compact: s } = e,
        { type: l } = t;
    return l === r.l.REPORT_TO_MOD_BAN_USER || l === r.l.REPORT_TO_MOD_KICK_USER || l === r.l.REPORT_TO_MOD_TIMEOUT_USER
        ? (0, i.jsx)(I, { message: t, channel: n, compact: s })
        : (0, i.jsx)(T, { message: t, channel: n, compact: s });
}
