r.d(n, {
    Ao: function () {
        return E;
    },
    Jv: function () {
        return _;
    },
    M0: function () {
        return m;
    },
    Qj: function () {
        return g;
    },
    VO: function () {
        return y;
    },
    YO: function () {
        return v;
    }
});
var i = r(592125),
    a = r(430824),
    o = r(496675),
    s = r(226951),
    l = r(981631);
let u = Array.from(r(176505).Vg)
        .map((e) => s.Z.escape(e))
        .join('|'),
    c = new RegExp('^/channels/(\\d+|'.concat(l.ME, ')(?:/)?(\\d+|').concat(u, ')?')),
    d = new RegExp('^/channels/(\\d+|'.concat(l.ME, ')(?:/)(\\d+|').concat(u, ')(?:/)(\\d+)')),
    f = RegExp('^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)'),
    p = RegExp('^/guild-stages/(\\d+)(?:/)?(\\d+)?'),
    h = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    _ = new RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|'.concat(l.ME, ')(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?')),
    m = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)');
function g(e) {
    if (null == e) return null;
    let n = e.match(d);
    if (null != n && n.length > 3)
        return {
            guildId: n[1],
            channelId: n[2],
            messageId: n[3]
        };
    let r = e.match(f);
    if (null != r && r.length > 4)
        return {
            guildId: r[1],
            channelId: r[2],
            threadId: r[3],
            messageId: r[4]
        };
    let i = e.match(c);
    if (null != i && i.length > 1) {
        var a;
        return {
            guildId: i[1],
            channelId: null !== (a = i[2]) && void 0 !== a ? a : void 0
        };
    }
    let o = e.match(p);
    return null != o && o.length > 1 ? { guildId: o[1] } : null;
}
function E(e) {
    if (null == e) return null;
    let n = e.match(h);
    return null != n && n.length > 1
        ? {
              guildId: n[1],
              guildEventId: n[2],
              recurrenceId: n[3]
          }
        : null;
}
function v(e) {
    return !!e.isPrivate() || o.Z.can(l.Plq.VIEW_CHANNEL, e);
}
function y(e) {
    let { guildId: n, channelId: r } = e;
    if (null == a.Z.getGuild(n) && n !== l.ME) return !1;
    if (null == r) return !0;
    let o = i.Z.getChannel(r);
    return null != o && v(o);
}
