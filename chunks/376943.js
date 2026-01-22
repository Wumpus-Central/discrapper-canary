n.d(t, {
    En: () => h,
    Ju: () => _,
    SK: () => g,
    nc: () => E,
    r9: () => b,
    vu: () => m,
}),
    n(591487),
    n(727858),
    n(747238);
var r = n(734057),
    i = n(71393),
    a = n(576705),
    s = n(257120),
    o = n(652215);
let l = Array.from(n(746080).qW)
        .map((e) => s.A.escape(e))
        .join("|"),
    c = new RegExp("^/channels/(\\d+|".concat(o.ME, ")(?:/)?(\\d+|").concat(l, ")?")),
    u = new RegExp("^/channels/(\\d+|".concat(o.ME, ")(?:/)(\\d+|").concat(l, ")(?:/)(\\d+)")),
    d = RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
    f = RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
    p = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    _ = new RegExp(
        "^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|".concat(
            o.ME,
            ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?",
        ),
    ),
    h = RegExp(
        "^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)",
    );

function m(e) {
    if (null == e) return null;
    let t = e.match(u);
    if (null != t && t.length > 3)
        return {
            guildId: t[1],
            channelId: t[2],
            messageId: t[3],
        };
    let n = e.match(d);
    if (null != n && n.length > 4)
        return {
            guildId: n[1],
            channelId: n[2],
            threadId: n[3],
            messageId: n[4],
        };
    let r = e.match(c);
    if (null != r && r.length > 1) {
        var i;
        return {
            guildId: r[1],
            channelId: null != (i = r[2]) ? i : void 0,
        };
    }
    let a = e.match(f);
    return null != a && a.length > 1
        ? {
              guildId: a[1],
          }
        : null;
}

function g(e) {
    if (null == e) return null;
    let t = e.match(p);
    return null != t && t.length > 1
        ? {
              guildId: t[1],
              guildEventId: t[2],
              recurrenceId: t[3],
          }
        : null;
}

function E(e) {
    return !!e.isPrivate() || a.A.can(o.xBc.VIEW_CHANNEL, e);
}

function b(e) {
    let { guildId: t, channelId: n } = e;
    if (null == i.A.getGuild(t) && t !== o.ME) return !1;
    if (null == n) return !0;
    let a = r.A.getChannel(n);
    return null != a && E(a);
}
