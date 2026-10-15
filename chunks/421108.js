A.d(t, { ZH: () => i, dA: () => u, tm: () => I, ur: () => R });
var _ = A(582128),
    n = A(536637),
    l = A.n(n),
    E = A(396583),
    r = A(927813),
    T = A(621547),
    N = A(105292);
function i(e) {
    if (null == e) return null;
    let t = l()(e).diff(l()(), "seconds");
    if (t <= 0) return null;
    let A = Math.floor(t / r.A.Seconds.DAY),
        _ = Math.floor((t % r.A.Seconds.DAY) / r.A.Seconds.HOUR);
    return {
        days: A,
        hours: _,
        minutes: Math.floor((t % r.A.Seconds.HOUR) / r.A.Seconds.MINUTE),
        seconds: t % r.A.Seconds.MINUTE,
    };
}
function I(e) {
    let t = null != e && null == i(e),
        [, A] = _.useReducer((e) => e + 1, 0);
    return ((0, E.A)(A, null == e || t ? null : r.A.Millis.SECOND), t);
}
function R(e) {
    let t = i(e);
    if (null == t) return null;
    let { days: A, hours: _, minutes: n } = t;
    return A > 0
        ? N.intl.formatToPlainString(N.t.BXpdIg, { days: A })
        : _ > 0
          ? N.intl.formatToPlainString(T.default.PPaJSw, { hours: _ })
          : N.intl.formatToPlainString(T.default["7Z+aIf"], { minutes: Math.max(n, 1) });
}
function u(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [A, n] = _.useState(() => R(e));
    return (
        (0, E.A)(
            () => {
                n(R(e));
            },
            t ? 1e3 : null,
        ),
        t ? A : null
    );
}
