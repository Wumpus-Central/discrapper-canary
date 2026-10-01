n.d(t, { ZH: () => E, dA: () => o, tm: () => I, ur: () => u });
var A = n(582128),
    l = n(536637),
    _ = n.n(l),
    r = n(396583),
    N = n(927813),
    T = n(206285),
    i = n(375708);
function E(e) {
    if (null == e) return null;
    let t = _()(e).diff(_()(), "seconds");
    if (t <= 0) return null;
    let n = Math.floor(t / N.A.Seconds.DAY),
        A = Math.floor((t % N.A.Seconds.DAY) / N.A.Seconds.HOUR);
    return {
        days: n,
        hours: A,
        minutes: Math.floor((t % N.A.Seconds.HOUR) / N.A.Seconds.MINUTE),
        seconds: t % N.A.Seconds.MINUTE,
    };
}
function I(e) {
    let t = null != e && null == E(e),
        [, n] = A.useReducer((e) => e + 1, 0);
    return ((0, r.A)(n, null == e || t ? null : N.A.Millis.SECOND), t);
}
function u(e) {
    let t = E(e);
    if (null == t) return null;
    let { days: n, hours: A, minutes: l } = t;
    return n > 0
        ? i.intl.formatToPlainString(i.t.BXpdIg, { days: n })
        : A > 0
          ? i.intl.formatToPlainString(T.default.PPaJSw, { hours: A })
          : i.intl.formatToPlainString(T.default["7Z+aIf"], { minutes: Math.max(l, 1) });
}
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = A.useState(() => u(e));
    return (
        (0, r.A)(
            () => {
                l(u(e));
            },
            t ? 1e3 : null,
        ),
        t ? n : null
    );
}
