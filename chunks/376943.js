(n(323874), n(14289), n(35956));
var i = n(734057),
    r = n(71393),
    a = n(576705),
    s = n(257120),
    l = n(811091),
    o = n(652215),
    d = n(746080),
    c = n(575279);
let u = Array.from(d.qW)
        .map((e) => s.A.escape(e))
        .join("|"),
    _ = RegExp(`^/channels/(\\d+|${o.ME})(?:/)?(\\d+|${u})?`),
    E = RegExp(`^/channels/(\\d+|${o.ME})(?:/)(\\d+|${u})(?:/)(\\d+)`),
    A = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
    f = RegExp(`^/channels/(\\d+|${o.ME})(?:/)(\\d+)/roll-dice(?:/(\\d+)d(\\d+))?$`),
    h = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
    I = /^\/users\/(\d+)\/?$/,
    p = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    m = RegExp(
        `^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|${o.ME})(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?`,
    ),
    T = RegExp("[\\w%=&+-]+"),
    g = RegExp(`${m.source}(?:\\?(${T.source}))?`),
    S = RegExp(
        "^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)",
    );
function N(e) {
    return !!e.isPrivate() || a.A.can(o.xBc.VIEW_CHANNEL, e);
}
n.d(
    t,
    {},
    {
        BM: g,
        En: S,
        FM: function (e) {
            if (null == e) return null;
            let t = e.match(f);
            return null != t && t.length > 2
                ? {
                      guildId: t[1],
                      channelId: t[2],
                      diceCount: 5 === t.length ? parseInt(t[3], 10) : 1,
                      diceSides: 5 === t.length ? parseInt(t[4], 10) : 6,
                  }
                : null;
        },
        SK: function (e) {
            if (null == e) return null;
            let t = e.match(p);
            return null != t && t.length > 1 ? { guildId: t[1], guildEventId: t[2], recurrenceId: t[4] } : null;
        },
        mi: function (e) {
            return null == e ? null : (e.match(I)?.[1] ?? null);
        },
        nc: N,
        r9: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null == r.A.getGuild(t) && t !== o.ME) return !1;
            if (null == n) return !0;
            let a = i.A.getChannel(n);
            return null != a && N(a);
        },
        te: function (e) {
            if (null == e) return;
            let t = new URLSearchParams(e).get(c.Nl);
            if (null != t && l.default.isProbablyAValidSnowflake(t)) return l.default.cast(t);
        },
        vu: function (e) {
            if (null == e) return null;
            let t = e.match(E);
            if (null != t && t.length > 3) return { guildId: t[1], channelId: t[2], messageId: t[3] };
            let n = e.match(A);
            if (null != n && n.length > 4) return { guildId: n[1], channelId: n[2], threadId: n[3], messageId: n[4] };
            let i = e.match(_);
            if (null != i && i.length > 1) return { guildId: i[1], channelId: i[2] ?? void 0 };
            let r = e.match(h);
            return null != r && r.length > 1 ? { guildId: r[1] } : null;
        },
    },
);
