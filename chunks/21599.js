n.d(t, { WU: () => s, _U: () => c, fB: () => a, m0: () => o, y$: () => u });
var i = n(488428),
    l = n(372250);
let r = "event";
function a(e, t) {
    return null == t
        ? e
        : s({
              baseCode: e,
              guildScheduledEventId: (function (e) {
                  let t = "?" === e.charAt(0) ? e.substring(1) : e;
                  try {
                      let e = i.parse(t);
                      return (0, l.p)(e[r]);
                  } catch (e) {
                      return;
                  }
              })(t),
          });
}
function s(e) {
    let { baseCode: t, guildScheduledEventId: n } = e;
    return null == n ? t : `${t}?${r}=${n}`;
}
function u(e) {
    let [t, n] = e.split("?");
    if (null == n) return { baseCode: t };
    let a = i.parse(n);
    return { baseCode: t, guildScheduledEventId: (0, l.p)(a[r]) };
}
function o(e) {
    let [t] = e.split("?");
    return t;
}
function c(e, t) {
    if (null == t) return;
    let n = o(e);
    return `${t}:${n}`;
}
