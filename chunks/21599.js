"use strict";
n.d(t, { WU: () => o, _U: () => c, fB: () => a, m0: () => u, y$: () => l });
var r = n(488428),
    i = n(372250);
let s = "event";
function a(e, t) {
    return null == t
        ? e
        : o({
              baseCode: e,
              guildScheduledEventId: (function (e) {
                  let t = "?" === e.charAt(0) ? e.substring(1) : e;
                  try {
                      let e = r.parse(t);
                      return (0, i.p)(e[s]);
                  } catch (e) {
                      return;
                  }
              })(t),
          });
}
function o(e) {
    let { baseCode: t, guildScheduledEventId: n } = e;
    return null == n ? t : `${t}?${s}=${n}`;
}
function l(e) {
    let [t, n] = e.split("?");
    if (null == n) return { baseCode: t };
    let a = r.parse(n);
    return { baseCode: t, guildScheduledEventId: (0, i.p)(a[s]) };
}
function u(e) {
    let [t] = e.split("?");
    return t;
}
function c(e, t) {
    if (null == t) return;
    let n = u(e);
    return `${t}:${n}`;
}
