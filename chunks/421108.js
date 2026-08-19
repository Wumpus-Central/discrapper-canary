"use strict";
n.d(t, { ZH: () => c, dA: () => h, ur: () => d });
var l = n(582128),
    i = n(989349),
    s = n.n(i),
    r = n(396583),
    a = n(927813),
    o = n(430825),
    u = n(375708);
function c(e) {
    if (null == e) return null;
    let t = s()(e).diff(s()(), "seconds");
    if (t <= 0) return null;
    let n = Math.floor(t / a.A.Seconds.DAY),
        l = Math.floor((t % a.A.Seconds.DAY) / a.A.Seconds.HOUR);
    return {
        days: n,
        hours: l,
        minutes: Math.floor((t % a.A.Seconds.HOUR) / a.A.Seconds.MINUTE),
        seconds: t % a.A.Seconds.MINUTE,
    };
}
function d(e) {
    let t = c(e);
    if (null == t) return null;
    let { days: n, hours: l, minutes: i } = t;
    return n > 0
        ? u.intl.formatToPlainString(u.t.BXpdIg, { days: n })
        : l > 0
          ? u.intl.formatToPlainString(o.default.PPaJSw, { hours: l })
          : u.intl.formatToPlainString(o.default["7Z+aIf"], { minutes: Math.max(i, 1) });
}
function h(e) {
    let [t, n] = l.useState(() => d(e));
    return (
        (0, r.A)(() => {
            n(d(e));
        }, 1e3),
        t
    );
}
