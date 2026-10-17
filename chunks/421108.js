_.d(t, { ZH: () => I, dA: () => O, tm: () => R, ur: () => i });
var A = _(582128),
    n = _(536637),
    l = _.n(n),
    E = _(396583),
    T = _(927813),
    N = _(621547),
    r = _(105292);
function I(e) {
    if (null == e) return null;
    let t = l()(e).diff(l()(), "seconds");
    if (t <= 0) return null;
    let _ = Math.floor(t / T.A.Seconds.DAY),
        A = Math.floor((t % T.A.Seconds.DAY) / T.A.Seconds.HOUR);
    return {
        days: _,
        hours: A,
        minutes: Math.floor((t % T.A.Seconds.HOUR) / T.A.Seconds.MINUTE),
        seconds: t % T.A.Seconds.MINUTE,
    };
}
function R(e) {
    let t = null != e && null == I(e),
        [, _] = A.useReducer((e) => e + 1, 0);
    return ((0, E.A)(_, null == e || t ? null : T.A.Millis.SECOND), t);
}
function i(e) {
    let t = I(e);
    if (null == t) return null;
    let { days: _, hours: A, minutes: n } = t;
    return _ > 0
        ? r.intl.formatToPlainString(r.t.BXpdIg, { days: _ })
        : A > 0
          ? r.intl.formatToPlainString(N.default.PPaJSw, { hours: A })
          : r.intl.formatToPlainString(N.default["7Z+aIf"], { minutes: Math.max(n, 1) });
}
function O(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [_, n] = A.useState(() => i(e));
    return (
        (0, E.A)(
            () => {
                n(i(e));
            },
            t ? 1e3 : null,
        ),
        t ? _ : null
    );
}
