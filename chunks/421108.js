i.d(t, { ZH: () => d, dA: () => T, tm: () => u, ur: () => m });
var n = i(582128),
    s = i(536637),
    r = i.n(s),
    l = i(396583),
    a = i(927813),
    o = i(621547),
    c = i(375708);
function d(e) {
    if (null == e) return null;
    let t = r()(e).diff(r()(), "seconds");
    if (t <= 0) return null;
    let i = Math.floor(t / a.A.Seconds.DAY),
        n = Math.floor((t % a.A.Seconds.DAY) / a.A.Seconds.HOUR);
    return {
        days: i,
        hours: n,
        minutes: Math.floor((t % a.A.Seconds.HOUR) / a.A.Seconds.MINUTE),
        seconds: t % a.A.Seconds.MINUTE,
    };
}
function u(e) {
    let t = null != e && null == d(e),
        [, i] = n.useReducer((e) => e + 1, 0);
    return ((0, l.A)(i, null == e || t ? null : a.A.Millis.SECOND), t);
}
function m(e) {
    let t = d(e);
    if (null == t) return null;
    let { days: i, hours: n, minutes: s } = t;
    return i > 0
        ? c.intl.formatToPlainString(c.t.BXpdIg, { days: i })
        : n > 0
          ? c.intl.formatToPlainString(o.default.PPaJSw, { hours: n })
          : c.intl.formatToPlainString(o.default["7Z+aIf"], { minutes: Math.max(s, 1) });
}
function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [i, s] = n.useState(() => m(e));
    return (
        (0, l.A)(
            () => {
                s(m(e));
            },
            t ? 1e3 : null,
        ),
        t ? i : null
    );
}
