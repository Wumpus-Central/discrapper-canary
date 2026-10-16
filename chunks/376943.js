(n.d(t, {
    BM: () => g,
    En: () => S,
    FM: () => y,
    SK: () => C,
    mi: () => O,
    nc: () => R,
    r9: () => L,
    te: () => D,
    vu: () => N,
}),
    n(323874),
    n(14289),
    n(35956));
var i = n(734057),
    r = n(71393),
    a = n(576705),
    s = n(257120),
    l = n(935208),
    o = n(652215),
    d = n(746080),
    c = n(575279);
let u = Array.from(d.qW)
        .map((e) => s.A.escape(e))
        .join("|"),
    _ = RegExp(`^/channels/(\\d+|${o.ME})(?:/)?(\\d+|${u})?`),
    E = RegExp(`^/channels/(\\d+|${o.ME})(?:/)(\\d+|${u})(?:/)(\\d+)`),
    A = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
    h = RegExp(`^/channels/(\\d+|${o.ME})(?:/)(\\d+)/roll-dice(?:/(\\d+)d(\\d+))?$`),
    f = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
    I = /^\/users\/(\d+)\/?$/,
    p = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    T = RegExp(
        `^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|${o.ME})(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?`,
    ),
    m = RegExp("[\\w%=&+-]+"),
    g = RegExp(`${T.source}(?:\\?(${m.source}))?`),
    S = RegExp(
        "^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)",
    );
function N(e) {
    if (null == e) return null;
    let t = e.match(E);
    if (null != t && t.length > 3) return { guildId: t[1], channelId: t[2], messageId: t[3] };
    let n = e.match(A);
    if (null != n && n.length > 4) return { guildId: n[1], channelId: n[2], threadId: n[3], messageId: n[4] };
    let i = e.match(_);
    if (null != i && i.length > 1) return { guildId: i[1], channelId: i[2] ?? void 0 };
    let r = e.match(f);
    return null != r && r.length > 1 ? { guildId: r[1] } : null;
}
function C(e) {
    if (null == e) return null;
    let t = e.match(p);
    return null != t && t.length > 1 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
}
function O(e) {
    return null == e ? null : (e.match(I)?.[1] ?? null);
}
function R(e) {
    return !!e.isPrivate() || a.A.can(o.xBc.VIEW_CHANNEL, e);
}
function L(e) {
    let { guildId: t, channelId: n } = e;
    if (null == r.A.getGuild(t) && t !== o.ME) return !1;
    if (null == n) return !0;
    let a = i.A.getChannel(n);
    return null != a && R(a);
}
function y(e) {
    if (null == e) return null;
    let t = e.match(h);
    return null != t && t.length > 2
        ? {
              guildId: t[1],
              channelId: t[2],
              diceCount: 5 === t.length ? parseInt(t[3], 10) : 1,
              diceSides: 5 === t.length ? parseInt(t[4], 10) : 6,
          }
        : null;
}
function D(e) {
    if (null == e) return;
    let t = new URLSearchParams(e).get(c.Nl);
    if (null != t && l.default.isProbablyAValidSnowflake(t)) return l.default.cast(t);
}
