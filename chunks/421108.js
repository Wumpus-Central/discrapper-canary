"use strict";
n.d(t, { ZH: () => c, dA: () => _, ur: () => u });
var i = n(582128),
    r = n(989349),
    a = n.n(r),
    s = n(396583),
    l = n(927813),
    o = n(430825),
    d = n(375708);
function c(e) {
    if (null == e) return null;
    let t = a()(e).diff(a()(), "seconds");
    if (t <= 0) return null;
    let n = Math.floor(t / l.A.Seconds.DAY),
        i = Math.floor((t % l.A.Seconds.DAY) / l.A.Seconds.HOUR);
    return {
        days: n,
        hours: i,
        minutes: Math.floor((t % l.A.Seconds.HOUR) / l.A.Seconds.MINUTE),
        seconds: t % l.A.Seconds.MINUTE,
    };
}
function u(e) {
    let t = c(e);
    if (null == t) return null;
    let { days: n, hours: i, minutes: r } = t;
    return n > 0
        ? d.intl.formatToPlainString(d.t.BXpdIg, { days: n })
        : i > 0
          ? d.intl.formatToPlainString(o.default.PPaJSw, { hours: i })
          : d.intl.formatToPlainString(o.default["7Z+aIf"], { minutes: Math.max(r, 1) });
}
function _(e) {
    let [t, n] = i.useState(() => u(e));
    return (
        (0, s.A)(() => {
            n(u(e));
        }, 1e3),
        t
    );
}
