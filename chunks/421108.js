n.d(t, { ZH: () => E, dA: () => o, tm: () => I, ur: () => u });
var A = n(582128),
    l = n(536637),
    _ = n.n(l),
    r = n(396583),
    T = n(927813),
    N = n(621547),
    i = n(105292);
function E(e) {
    if (null == e) return null;
    let t = _()(e).diff(_()(), "seconds");
    if (t <= 0) return null;
    let n = Math.floor(t / T.A.Seconds.DAY),
        A = Math.floor((t % T.A.Seconds.DAY) / T.A.Seconds.HOUR);
    return {
        days: n,
        hours: A,
        minutes: Math.floor((t % T.A.Seconds.HOUR) / T.A.Seconds.MINUTE),
        seconds: t % T.A.Seconds.MINUTE,
    };
}
function I(e) {
    let t = null != e && null == E(e),
        [, n] = A.useReducer((e) => e + 1, 0);
    return ((0, r.A)(n, null == e || t ? null : T.A.Millis.SECOND), t);
}
function u(e) {
    let t = E(e);
    if (null == t) return null;
    let { days: n, hours: A, minutes: l } = t;
    return n > 0
        ? i.intl.formatToPlainString(i.t.BXpdIg, { days: n })
        : A > 0
          ? i.intl.formatToPlainString(N.default.PPaJSw, { hours: A })
          : i.intl.formatToPlainString(N.default["7Z+aIf"], { minutes: Math.max(l, 1) });
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
