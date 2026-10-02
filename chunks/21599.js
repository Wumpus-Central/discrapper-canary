n.d(t, { LO: () => d, WU: () => u, _U: () => h, fB: () => c, m0: () => E, y$: () => _, ys: () => A });
var i = n(488428),
    r = n(372250),
    a = n(935208);
let s = "event",
    l = "channel",
    o = "message";
function d(e) {
    return "string" == typeof e && a.default.isProbablyAValidSnowflake(e) ? e : void 0;
}
function c(e, t) {
    let n;
    if (null == t) return e;
    let a = "?" === t.charAt(0) ? t.substring(1) : t;
    try {
        n = i.parse(a);
    } catch (t) {
        return e;
    }
    let c = (0, r.p)(n[s]),
        _ = d((0, r.p)(n[l])),
        E = null != _ ? d((0, r.p)(n[o])) : void 0;
    return u({ baseCode: e, guildScheduledEventId: c, targetChannelId: _, targetMessageId: E });
}
function u(e) {
    let { baseCode: t, guildScheduledEventId: n, targetChannelId: r, targetMessageId: a } = e,
        d = {};
    (null != n && (d[s] = n), null != r && ((d[l] = r), null != a && (d[o] = a)));
    let c = i.stringify(d);
    return "" === c ? t : `${t}?${c}`;
}
function _(e) {
    let [t, n] = e.split("?");
    if (null == n) return { baseCode: t };
    let a = i.parse(n),
        c = (0, r.p)(a[s]),
        u = d((0, r.p)(a[l])),
        _ = null != u ? d((0, r.p)(a[o])) : void 0;
    return { baseCode: t, guildScheduledEventId: c, targetChannelId: u, targetMessageId: _ };
}
function E(e) {
    let [t] = e.split("?");
    return t;
}
function A(e) {
    let t = e.indexOf("?");
    return t >= 0 ? e.substring(t) : "";
}
function h(e, t) {
    if (null == t) return;
    let n = E(e);
    return `${t}:${n}`;
}
