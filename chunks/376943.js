n.d(t, { En: () => m, FM: () => R, SK: () => S, kg: () => T, mi: () => N, nc: () => C, r9: () => O, vu: () => g });
var i = n(734057),
    r = n(71393),
    a = n(576705),
    s = n(257120),
    l = n(652215),
    o = n(746080),
    d = n(575279);
let c = Array.from(o.qW)
        .map((e) => s.A.escape(e))
        .join("|"),
    u = RegExp(`^/channels/(\\d+|${l.ME})(?:/)?(\\d+|${c})?`),
    _ = RegExp(`^/channels/(\\d+|${l.ME})(?:/)(\\d+|${c})(?:/)(\\d+)`),
    E = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
    A = RegExp(`^/channels/(\\d+|${l.ME})(?:/)(\\d+)/roll-dice(?:/(\\d+)d(\\d+))?$`),
    h = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
    f = /^\/users\/(\d+)\/?$/,
    I = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    p = RegExp(
        `^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|${l.ME})(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?`,
    ),
    T = RegExp(`${p.source}(?:\\?${d.Nl}=(\\d+)(?![\\w=&%-]))?`),
    m = RegExp(
        "^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)",
    );
function g(e) {
    if (null == e) return null;
    let t = e.match(_);
    if (null != t && t.length > 3) return { guildId: t[1], channelId: t[2], messageId: t[3] };
    let n = e.match(E);
    if (null != n && n.length > 4) return { guildId: n[1], channelId: n[2], threadId: n[3], messageId: n[4] };
    let i = e.match(u);
    if (null != i && i.length > 1) return { guildId: i[1], channelId: i[2] ?? void 0 };
    let r = e.match(h);
    return null != r && r.length > 1 ? { guildId: r[1] } : null;
}
function S(e) {
    if (null == e) return null;
    let t = e.match(I);
    return null != t && t.length > 1 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
}
function N(e) {
    return null == e ? null : (e.match(f)?.[1] ?? null);
}
function C(e) {
    return !!e.isPrivate() || a.A.can(l.xBc.VIEW_CHANNEL, e);
}
function O(e) {
    let { guildId: t, channelId: n } = e;
    if (null == r.A.getGuild(t) && t !== l.ME) return !1;
    if (null == n) return !0;
    let a = i.A.getChannel(n);
    return null != a && C(a);
}
function R(e) {
    if (null == e) return null;
    let t = e.match(A);
    return null != t && t.length > 2
        ? {
              guildId: t[1],
              channelId: t[2],
              diceCount: 5 === t.length ? parseInt(t[3], 10) : 1,
              diceSides: 5 === t.length ? parseInt(t[4], 10) : 6,
          }
        : null;
}
