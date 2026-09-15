i.d(t, { ZH: () => d, dA: () => m, ur: () => u });
var s = i(582128),
    n = i(536637),
    r = i.n(n),
    l = i(396583),
    a = i(927813),
    o = i(621547),
    c = i(375708);
function d(e) {
    if (null == e) return null;
    let t = r()(e).diff(r()(), "seconds");
    if (t <= 0) return null;
    let i = Math.floor(t / a.A.Seconds.DAY),
        s = Math.floor((t % a.A.Seconds.DAY) / a.A.Seconds.HOUR);
    return {
        days: i,
        hours: s,
        minutes: Math.floor((t % a.A.Seconds.HOUR) / a.A.Seconds.MINUTE),
        seconds: t % a.A.Seconds.MINUTE,
    };
}
function u(e) {
    let t = d(e);
    if (null == t) return null;
    let { days: i, hours: s, minutes: n } = t;
    return i > 0
        ? c.intl.formatToPlainString(c.t.BXpdIg, { days: i })
        : s > 0
          ? c.intl.formatToPlainString(o.default.PPaJSw, { hours: s })
          : c.intl.formatToPlainString(o.default["7Z+aIf"], { minutes: Math.max(n, 1) });
}
function m(e) {
    let [t, i] = s.useState(() => u(e));
    return (
        (0, l.A)(() => {
            i(u(e));
        }, 1e3),
        t
    );
}
