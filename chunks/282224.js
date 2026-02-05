n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(448761),
    a = n(311907),
    r = n(397927),
    s = n(763754),
    o = n(447215),
    d = n(888675),
    c = n(287809),
    u = n(641131),
    m = n(985018);
let _ = {
        [l.l.REPORT_TO_MOD_BAN_USER]: () => u.default.komFTv,
        [l.l.REPORT_TO_MOD_KICK_USER]: () => u.default.FAJmJV,
        [l.l.REPORT_TO_MOD_TIMEOUT_USER]: () => u.default["90r/sR"],
    },
    h = {
        [l.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => u.default["4023i8"],
        [l.l.REPORT_TO_MOD_CLOSED_REPORT]: () => u.default.UE81zV,
    };
function p(e) {
    let { type: t } = e,
        n = null;
    switch (t) {
        case l.l.REPORT_TO_MOD_BAN_USER:
            n = r.wI0;
            break;
        case l.l.REPORT_TO_MOD_KICK_USER:
            n = r.Nxw;
            break;
        case l.l.REPORT_TO_MOD_TIMEOUT_USER:
            n = r.gQi;
            break;
        case l.l.REPORT_TO_MOD_DELETED_MESSAGE:
            n = r.ucK;
            break;
        case l.l.REPORT_TO_MOD_CLOSED_REPORT:
            n = r.Uzd;
    }
    return null != n ? (0, i.jsx)(n, { size: "refresh_sm", color: "currentColor" }) : null;
}
function g(e) {
    let { message: t, channel: n, compact: l } = e,
        { author: r, mentions: u, type: h } = t,
        g = (0, s.Ay)(t),
        A = t.getChannelId(),
        f = (0, a.bG)([c.default], () => c.default.getUser(u[0]), [u]),
        x = (0, s.m2)(r, n),
        E = (0, o.P)({ user: r, channelId: A, guildId: n.guild_id, messageId: t.id })(x),
        C = (0, s.d8)(f, n),
        I = (0, o.P)({ user: f, channelId: A, guildId: n.guild_id, messageId: t.id })(C),
        T = _[h] ?? null;
    if (null == T) return null;
    let v = m.intl.format(T(), { actorName: g.nick, actorHook: E, targetName: C?.nick, targetHook: I });
    return (0, i.jsx)(d.A, { iconNode: (0, i.jsx)(p, { type: h }), timestamp: t.timestamp, compact: l, children: v });
}
function A(e) {
    let { message: t, channel: n, compact: l } = e,
        { author: a, type: r } = t,
        c = (0, s.Ay)(t),
        u = t.getChannelId(),
        _ = (0, s.m2)(a, n),
        g = (0, o.P)({ user: a, channelId: u, guildId: n.guild_id, messageId: t.id })(_),
        A = h[r] ?? null;
    if (null == A) return null;
    let f = m.intl.format(A(), { actorName: c.nick, actorHook: g });
    return (0, i.jsx)(d.A, { iconNode: (0, i.jsx)(p, { type: r }), timestamp: t.timestamp, compact: l, children: f });
}
function f(e) {
    let { message: t, channel: n, compact: a } = e,
        { type: r } = t;
    return r === l.l.REPORT_TO_MOD_BAN_USER || r === l.l.REPORT_TO_MOD_KICK_USER || r === l.l.REPORT_TO_MOD_TIMEOUT_USER
        ? (0, i.jsx)(g, { message: t, channel: n, compact: a })
        : (0, i.jsx)(A, { message: t, channel: n, compact: a });
}
