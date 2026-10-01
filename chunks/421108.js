i.d(t, { ZH: () => d, dA: () => T, tm: () => u, ur: () => m });
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
    let t = null != e && null == d(e),
        [, i] = s.useReducer((e) => e + 1, 0);
    return ((0, l.A)(i, null == e || t ? null : a.A.Millis.SECOND), t);
}
function m(e) {
    let t = d(e);
    if (null == t) return null;
    let { days: i, hours: s, minutes: n } = t;
    return i > 0
        ? c.intl.formatToPlainString(c.t.BXpdIg, { days: i })
        : s > 0
          ? c.intl.formatToPlainString(o.default.PPaJSw, { hours: s })
          : c.intl.formatToPlainString(o.default["7Z+aIf"], { minutes: Math.max(n, 1) });
}
function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [i, n] = s.useState(() => m(e));
    return (
        (0, l.A)(
            () => {
                n(m(e));
            },
            t ? 1e3 : null,
        ),
        t ? i : null
    );
}
