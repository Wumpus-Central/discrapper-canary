n.d(t, {
    WU: () => l,
    fB: () => s,
    m0: () => u,
    y$: () => c,
}),
    n(896048),
    n(747238);
var r = n(488428),
    i = n(372250);
let a = "event";

function s(e, t) {
    return null == t
        ? e
        : l({
              baseCode: e,
              guildScheduledEventId: o(t),
          });
}

function o(e) {
    let t = "?" === e.charAt(0) ? e.substring(1) : e;
    try {
        let e = r.parse(t);
        return (0, i.p)(e[a]);
    } catch (e) {
        return;
    }
}

function l(e) {
    let { baseCode: t, guildScheduledEventId: n } = e;
    return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n);
}

function c(e) {
    let [t, n] = e.split("?");
    if (null == n)
        return {
            baseCode: t,
        };
    let s = r.parse(n);
    return {
        baseCode: t,
        guildScheduledEventId: (0, i.p)(s[a]),
    };
}

function u(e) {
    let [t] = e.split("?");
    return t;
}
