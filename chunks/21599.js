"use strict";
n.d(t, { WU: () => l, _U: () => d, fB: () => a, m0: () => c, y$: () => u });
var r = n(488428),
    i = n(372250);
let s = "event";
function a(e, t) {
    return null == t ? e : l({ baseCode: e, guildScheduledEventId: o(t) });
}
function o(e) {
    let t = "?" === e.charAt(0) ? e.substring(1) : e;
    try {
        let e = r.parse(t);
        return (0, i.p)(e[s]);
    } catch (e) {
        return;
    }
}
function l(e) {
    let { baseCode: t, guildScheduledEventId: n } = e;
    return null == n ? t : `${t}?${s}=${n}`;
}
function u(e) {
    let [t, n] = e.split("?");
    if (null == n) return { baseCode: t };
    let a = r.parse(n);
    return { baseCode: t, guildScheduledEventId: (0, i.p)(a[s]) };
}
function c(e) {
    let [t] = e.split("?");
    return t;
}
function d(e, t) {
    if (null == t) return;
    let n = c(e);
    return `${t}:${n}`;
}
