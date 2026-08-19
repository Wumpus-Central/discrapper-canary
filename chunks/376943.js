"use strict";
n.d(t, { En: () => I, FM: () => g, Ju: () => h, SK: () => p, nc: () => T, r9: () => m, vu: () => f });
var i = n(734057),
    r = n(71393),
    a = n(576705),
    s = n(257120),
    l = n(652215);
let o = Array.from(n(746080).qW)
        .map((e) => s.A.escape(e))
        .join("|"),
    d = RegExp(`^/channels/(\\d+|${l.ME})(?:/)?(\\d+|${o})?`),
    c = RegExp(`^/channels/(\\d+|${l.ME})(?:/)(\\d+|${o})(?:/)(\\d+)`),
    u = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
    _ = RegExp(`^/channels/(\\d+|${l.ME})(?:/)(\\d+)/roll-dice(?:/(\\d+)d(\\d+))?$`),
    E = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
    A = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    h = RegExp(
        `^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|${l.ME})(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?`,
    ),
    I = RegExp(
        "^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)",
    );
function f(e) {
    if (null == e) return null;
    let t = e.match(c);
    if (null != t && t.length > 3) return { guildId: t[1], channelId: t[2], messageId: t[3] };
    let n = e.match(u);
    if (null != n && n.length > 4) return { guildId: n[1], channelId: n[2], threadId: n[3], messageId: n[4] };
    let i = e.match(d);
    if (null != i && i.length > 1) return { guildId: i[1], channelId: i[2] ?? void 0 };
    let r = e.match(E);
    return null != r && r.length > 1 ? { guildId: r[1] } : null;
}
function p(e) {
    if (null == e) return null;
    let t = e.match(A);
    return null != t && t.length > 1 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
}
function T(e) {
    return !!e.isPrivate() || a.A.can(l.xBc.VIEW_CHANNEL, e);
}
function m(e) {
    let { guildId: t, channelId: n } = e;
    if (null == r.A.getGuild(t) && t !== l.ME) return !1;
    if (null == n) return !0;
    let a = i.A.getChannel(n);
    return null != a && T(a);
}
function g(e) {
    if (null == e) return null;
    let t = e.match(_);
    return null != t && t.length > 2
        ? {
              guildId: t[1],
              channelId: t[2],
              diceCount: 5 === t.length ? parseInt(t[3], 10) : 1,
              diceSides: 5 === t.length ? parseInt(t[4], 10) : 6,
          }
        : null;
}
