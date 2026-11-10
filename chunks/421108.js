var l = n(582128),
    r = n(536637),
    i = n.n(r),
    u = n(396583),
    o = n(927813),
    a = n(25082),
    s = n(792996);
function c(e) {
    if (null == e) return null;
    let t = i()(e).diff(i()(), "seconds");
    if (t <= 0) return null;
    let n = Math.floor(t / o.A.Seconds.DAY),
        l = Math.floor((t % o.A.Seconds.DAY) / o.A.Seconds.HOUR);
    return {
        days: n,
        hours: l,
        minutes: Math.floor((t % o.A.Seconds.HOUR) / o.A.Seconds.MINUTE),
        seconds: t % o.A.Seconds.MINUTE,
    };
}
function d(e) {
    let t = c(e);
    if (null == t) return null;
    let { days: n, hours: l, minutes: r } = t;
    return n > 0
        ? s.intl.formatToPlainString(s.t.BXpdIg, { days: n })
        : l > 0
          ? s.intl.formatToPlainString(a.default.PPaJSw, { hours: l })
          : s.intl.formatToPlainString(a.default["7Z+aIf"], { minutes: Math.max(r, 1) });
}
n.d(
    t,
    {},
    {
        ZH: c,
        dA: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [n, r] = l.useState(() => d(e));
            return (
                (0, u.A)(
                    () => {
                        r(d(e));
                    },
                    t ? 1e3 : null,
                ),
                t ? n : null
            );
        },
        tm: function (e) {
            let t = null != e && null == c(e),
                [, n] = l.useReducer((e) => e + 1, 0);
            return ((0, u.A)(n, null == e || t ? null : o.A.Millis.SECOND), t);
        },
        ur: d,
    },
);
