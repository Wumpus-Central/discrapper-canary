var i = n(488428),
    r = n(372250),
    a = n(811091);
let s = "event",
    l = "channel",
    o = "message";
function d(e) {
    return "string" == typeof e && a.default.isProbablyAValidSnowflake(e) ? e : void 0;
}
function c(e) {
    let { baseCode: t, guildScheduledEventId: n, targetChannelId: r, targetMessageId: a } = e,
        d = {};
    (null != n && (d[s] = n), null != r && ((d[l] = r), null != a && (d[o] = a)));
    let c = i.As(d);
    return "" === c ? t : `${t}?${c}`;
}
function u(e) {
    let [t] = e.split("?");
    return t;
}
n.d(
    t,
    {},
    {
        LO: d,
        WU: c,
        _U: function (e, t) {
            if (null == t) return;
            let n = u(e);
            return `${t}:${n}`;
        },
        fB: function (e, t) {
            let n;
            if (null == t) return e;
            let a = "?" === t.charAt(0) ? t.substring(1) : t;
            try {
                n = i.qg(a);
            } catch (t) {
                return e;
            }
            let u = (0, r.p)(n[s]),
                _ = d((0, r.p)(n[l])),
                E = null != _ ? d((0, r.p)(n[o])) : void 0;
            return c({ baseCode: e, guildScheduledEventId: u, targetChannelId: _, targetMessageId: E });
        },
        m0: u,
        y$: function (e) {
            let [t, n] = e.split("?");
            if (null == n) return { baseCode: t };
            let a = i.qg(n),
                c = (0, r.p)(a[s]),
                u = d((0, r.p)(a[l])),
                _ = null != u ? d((0, r.p)(a[o])) : void 0;
            return { baseCode: t, guildScheduledEventId: c, targetChannelId: u, targetMessageId: _ };
        },
        ys: function (e) {
            let t = e.indexOf("?");
            return t >= 0 ? e.substring(t) : "";
        },
    },
);
