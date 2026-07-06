n.d(t, { Z: () => o, u: () => u });
var l = n(989349),
    i = n.n(l),
    r = n(927813),
    a = n(430825),
    s = n(375708);
function o(e) {
    if (null == e) return null;
    let t = i()(e).diff(i()(), "seconds");
    if (t <= 0) return null;
    let n = Math.floor(t / r.A.Seconds.DAY),
        l = Math.floor((t % r.A.Seconds.DAY) / r.A.Seconds.HOUR);
    return {
        days: n,
        hours: l,
        minutes: Math.floor((t % r.A.Seconds.HOUR) / r.A.Seconds.MINUTE),
        seconds: t % r.A.Seconds.MINUTE,
    };
}
function u(e) {
    let t = o(e);
    if (null == t) return null;
    let { days: n, hours: l, minutes: i } = t;
    return n > 0
        ? s.intl.formatToPlainString(s.t.BXpdIg, { days: n })
        : l > 0
          ? s.intl.formatToPlainString(a.default.PPaJSw, { hours: l })
          : s.intl.formatToPlainString(a.default["7Z+aIf"], { minutes: Math.max(i, 1) });
}
