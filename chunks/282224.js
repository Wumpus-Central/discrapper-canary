"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(448761),
    l = n(311907),
    s = n(215026),
    a = n(905499),
    o = n(60270),
    c = n(241326),
    u = n(478016),
    d = n(763754),
    _ = n(447215),
    E = n(888675),
    A = n(287809),
    m = n(221314),
    I = n(985018);
let T = {
        [r.l.REPORT_TO_MOD_BAN_USER]: () => m.default.komFTv,
        [r.l.REPORT_TO_MOD_KICK_USER]: () => m.default.FAJmJV,
        [r.l.REPORT_TO_MOD_TIMEOUT_USER]: () => m.default["90r/sR"],
    },
    N = {
        [r.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => m.default["4023i8"],
        [r.l.REPORT_TO_MOD_CLOSED_REPORT]: () => m.default.UE81zV,
    };
function g(e) {
    let { type: t } = e,
        n = null;
    switch (t) {
        case r.l.REPORT_TO_MOD_BAN_USER:
            n = s.w;
            break;
        case r.l.REPORT_TO_MOD_KICK_USER:
            n = a.N;
            break;
        case r.l.REPORT_TO_MOD_TIMEOUT_USER:
            n = o.g;
            break;
        case r.l.REPORT_TO_MOD_DELETED_MESSAGE:
            n = c.u;
            break;
        case r.l.REPORT_TO_MOD_CLOSED_REPORT:
            n = u.U;
    }
    return null != n ? (0, i.jsx)(n, { size: "refresh_sm", color: "currentColor" }) : null;
}
function p(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: s, mentions: a, type: o } = t,
        c = (0, d.Ay)(t),
        u = t.getChannelId(),
        m = (0, l.bG)([A.default], () => A.default.getUser(a[0]), [a]),
        N = (0, d.m2)(s, n),
        p = (0, _.P)({ user: s, channelId: u, guildId: n.guild_id, messageId: t.id })(N),
        C = (0, d.d8)(m, n),
        f = (0, _.P)({ user: m, channelId: u, guildId: n.guild_id, messageId: t.id })(C),
        R = T[o] ?? null;
    if (null == R) return null;
    let h = I.intl.format(R(), { actorName: c.nick, actorHook: p, targetName: C?.nick, targetHook: f });
    return (0, i.jsx)(E.A, { iconNode: (0, i.jsx)(g, { type: o }), timestamp: t.timestamp, compact: r, children: h });
}
function C(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: l, type: s } = t,
        a = (0, d.Ay)(t),
        o = t.getChannelId(),
        c = (0, d.m2)(l, n),
        u = (0, _.P)({ user: l, channelId: o, guildId: n.guild_id, messageId: t.id })(c),
        A = N[s] ?? null;
    if (null == A) return null;
    let m = I.intl.format(A(), { actorName: a.nick, actorHook: u });
    return (0, i.jsx)(E.A, { iconNode: (0, i.jsx)(g, { type: s }), timestamp: t.timestamp, compact: r, children: m });
}
function f(e) {
    let { message: t, channel: n, compact: l } = e,
        { type: s } = t;
    return s === r.l.REPORT_TO_MOD_BAN_USER || s === r.l.REPORT_TO_MOD_KICK_USER || s === r.l.REPORT_TO_MOD_TIMEOUT_USER
        ? (0, i.jsx)(p, { message: t, channel: n, compact: l })
        : (0, i.jsx)(C, { message: t, channel: n, compact: l });
}
