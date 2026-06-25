"use strict";
n.d(t, { Z: () => l, u: () => u });
var i = n(989349),
    r = n.n(i),
    s = n(927813),
    a = n(580350),
    o = n(375708);
function l(e) {
    if (null == e) return null;
    let t = r()(e).diff(r()(), "seconds");
    if (t <= 0) return null;
    let n = Math.floor(t / s.A.Seconds.DAY),
        i = Math.floor((t % s.A.Seconds.DAY) / s.A.Seconds.HOUR);
    return {
        days: n,
        hours: i,
        minutes: Math.floor((t % s.A.Seconds.HOUR) / s.A.Seconds.MINUTE),
        seconds: t % s.A.Seconds.MINUTE,
    };
}
function u(e) {
    let t = l(e);
    if (null == t) return null;
    let { days: n, hours: i, minutes: r } = t;
    return n > 0
        ? o.intl.formatToPlainString(o.t.BXpdIg, { days: n })
        : i > 0
          ? o.intl.formatToPlainString(a.default.PPaJSw, { hours: i })
          : o.intl.formatToPlainString(a.default["7Z+aIf"], { minutes: Math.max(r, 1) });
}
