n.d(t, {
    fU: () => u,
    jX: () => c,
    mb: () => s,
    tV: () => l
}),
    n(47120);
var i = n(664751),
    r = n(898450);
let a = 'event';
function s(e, t) {
    return null == t
        ? e
        : l({
              baseCode: e,
              guildScheduledEventId: o(t)
          });
}
function o(e) {
    let t = '?' === e.charAt(0) ? e.substring(1) : e;
    try {
        let e = i.parse(t);
        return (0, r.d)(e[a]);
    } catch (e) {
        return;
    }
}
function l(e) {
    let { baseCode: t, guildScheduledEventId: n } = e;
    return null == n ? t : ''.concat(t, '?').concat(a, '=').concat(n);
}
function u(e) {
    let [t, n] = e.split('?');
    if (null == n) return { baseCode: t };
    let s = i.parse(n);
    return {
        baseCode: t,
        guildScheduledEventId: (0, r.d)(s[a])
    };
}
function c(e) {
    let [t] = e.split('?');
    return t;
}
