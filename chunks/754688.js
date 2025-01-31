n.d(t, {
    Ao: () => g,
    Jv: () => p,
    M0: () => h,
    Qj: () => m,
    VO: () => v,
    YO: () => E
});
var i = n(592125),
    r = n(430824),
    a = n(496675),
    s = n(226951),
    o = n(981631);
let l = Array.from(n(176505).Vg)
        .map((e) => s.Z.escape(e))
        .join('|'),
    u = new RegExp('^/channels/(\\d+|'.concat(o.ME, ')(?:/)?(\\d+|').concat(l, ')?')),
    c = new RegExp('^/channels/(\\d+|'.concat(o.ME, ')(?:/)(\\d+|').concat(l, ')(?:/)(\\d+)')),
    d = RegExp('^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)'),
    f = RegExp('^/guild-stages/(\\d+)(?:/)?(\\d+)?'),
    _ = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    p = new RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|'.concat(o.ME, ')(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?')),
    h = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)');
function m(e) {
    if (null == e) return null;
    let t = e.match(c);
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
    let i = e.match(u);
    if (null != i && i.length > 1) {
        var r;
        return {
            guildId: i[1],
            channelId: null !== (r = i[2]) && void 0 !== r ? r : void 0
        };
    }
    let a = e.match(f);
    return null != a && a.length > 1 ? { guildId: a[1] } : null;
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
    return !!e.isPrivate() || a.Z.can(o.Plq.VIEW_CHANNEL, e);
}
function v(e) {
    let { guildId: t, channelId: n } = e;
    if (null == r.Z.getGuild(t) && t !== o.ME) return !1;
    if (null == n) return !0;
    let a = i.Z.getChannel(n);
    return null != a && E(a);
}
