n.d(t, {
    Ao: () => g,
    Jv: () => p,
    M0: () => h,
    Qj: () => m,
    VO: () => b,
    YO: () => E
}),
    n(474991),
    n(398202),
    n(301563);
var r = n(592125),
    i = n(430824),
    o = n(496675),
    a = n(226951),
    s = n(981631);
let l = Array.from(n(176505).Vg)
        .map((e) => a.Z.escape(e))
        .join('|'),
    c = new RegExp('^/channels/(\\d+|'.concat(s.ME, ')(?:/)?(\\d+|').concat(l, ')?')),
    u = new RegExp('^/channels/(\\d+|'.concat(s.ME, ')(?:/)(\\d+|').concat(l, ')(?:/)(\\d+)')),
    d = RegExp('^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)'),
    f = RegExp('^/guild-stages/(\\d+)(?:/)?(\\d+)?'),
    _ = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    p = new RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|'.concat(s.ME, ')(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?')),
    h = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)');
function m(e) {
    if (null == e) return null;
    let t = e.match(u);
    if (null != t && t.length > 3)
        return {
            guildId: t[1],
            channelId: t[2],
            messageId: t[3]
        };
    let n = e.match(d);
    if (null != n && n.length > 4)
        return {
            guildId: n[1],
            channelId: n[2],
            threadId: n[3],
            messageId: n[4]
        };
    let r = e.match(c);
    if (null != r && r.length > 1) {
        var i;
        return {
            guildId: r[1],
            channelId: null != (i = r[2]) ? i : void 0
        };
    }
    let o = e.match(f);
    return null != o && o.length > 1 ? { guildId: o[1] } : null;
}
function g(e) {
    if (null == e) return null;
    let t = e.match(_);
    return null != t && t.length > 1
        ? {
              guildId: t[1],
              guildEventId: t[2],
              recurrenceId: t[3]
          }
        : null;
}
function E(e) {
    return !!e.isPrivate() || o.Z.can(s.Plq.VIEW_CHANNEL, e);
}
function b(e) {
    let { guildId: t, channelId: n } = e;
    if (null == i.Z.getGuild(t) && t !== s.ME) return !1;
    if (null == n) return !0;
    let o = r.Z.getChannel(n);
    return null != o && E(o);
}
