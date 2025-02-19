n.d(t, {
    fU: () => c,
    jX: () => u,
    mb: () => a,
    tV: () => l
}),
    n(47120),
    n(301563);
var r = n(664751),
    i = n(898450);
let o = 'event';
function a(e, t) {
    return null == t
        ? e
        : l({
              baseCode: e,
              guildScheduledEventId: s(t)
          });
}
function s(e) {
    let t = '?' === e.charAt(0) ? e.substring(1) : e;
    try {
        let e = r.parse(t);
        return (0, i.d)(e[o]);
    } catch (e) {
        return;
    }
}
function l(e) {
    let { baseCode: t, guildScheduledEventId: n } = e;
    return null == n ? t : ''.concat(t, '?').concat(o, '=').concat(n);
}
function c(e) {
    let [t, n] = e.split('?');
    if (null == n) return { baseCode: t };
    let a = r.parse(n);
    return {
        baseCode: t,
        guildScheduledEventId: (0, i.d)(a[o])
    };
}
function u(e) {
    let [t] = e.split('?');
    return t;
}
