i.d(t, { WU: () => a, _U: () => d, fB: () => s, m0: () => o, y$: () => u });
var n = i(488428),
    l = i(372250);
let r = "event";
function s(e, t) {
    return null == t
        ? e
        : a({
              baseCode: e,
              guildScheduledEventId: (function (e) {
                  let t = "?" === e.charAt(0) ? e.substring(1) : e;
                  try {
                      let e = n.parse(t);
                      return (0, l.p)(e[r]);
                  } catch (e) {
                      return;
                  }
              })(t),
          });
}
function a(e) {
    let { baseCode: t, guildScheduledEventId: i } = e;
    return null == i ? t : `${t}?${r}=${i}`;
}
function u(e) {
    let [t, i] = e.split("?");
    if (null == i) return { baseCode: t };
    let s = n.parse(i);
    return { baseCode: t, guildScheduledEventId: (0, l.p)(s[r]) };
}
function o(e) {
    let [t] = e.split("?");
    return t;
}
function d(e, t) {
    if (null == t) return;
    let i = o(e);
    return `${t}:${i}`;
}
