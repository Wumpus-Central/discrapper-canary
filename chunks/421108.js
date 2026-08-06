n.d(t, { ZH: () => c, dA: () => p, ur: () => d });
var l = n(582128),
    i = n(989349),
    r = n.n(i),
    a = n(396583),
    s = n(927813),
    o = n(430825),
    u = n(375708);
function c(e) {
    if (null == e) return null;
    let t = r()(e).diff(r()(), "seconds");
    if (t <= 0) return null;
    let n = Math.floor(t / s.A.Seconds.DAY),
        l = Math.floor((t % s.A.Seconds.DAY) / s.A.Seconds.HOUR);
    return {
        days: n,
        hours: l,
        minutes: Math.floor((t % s.A.Seconds.HOUR) / s.A.Seconds.MINUTE),
        seconds: t % s.A.Seconds.MINUTE,
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
function p(e) {
    let [t, n] = l.useState(() => d(e));
    return (
        (0, a.A)(() => {
            n(d(e));
        }, 1e3),
        t
    );
}
