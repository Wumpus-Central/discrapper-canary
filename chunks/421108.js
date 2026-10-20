_.d(t, { ZH: () => O, dA: () => i, tm: () => I, ur: () => R });
var A = _(582128),
    n = _(536637),
    l = _.n(n),
    T = _(396583),
    N = _(927813),
    E = _(621547),
    r = _(105292);
function O(e) {
    if (null == e) return null;
    let t = l()(e).diff(l()(), "seconds");
    if (t <= 0) return null;
    let _ = Math.floor(t / N.A.Seconds.DAY),
        A = Math.floor((t % N.A.Seconds.DAY) / N.A.Seconds.HOUR);
    return {
        days: _,
        hours: A,
        minutes: Math.floor((t % N.A.Seconds.HOUR) / N.A.Seconds.MINUTE),
        seconds: t % N.A.Seconds.MINUTE,
    };
}
function I(e) {
    let t = null != e && null == O(e),
        [, _] = A.useReducer((e) => e + 1, 0);
    return ((0, T.A)(_, null == e || t ? null : N.A.Millis.SECOND), t);
}
function R(e) {
    let t = O(e);
    if (null == t) return null;
    let { days: _, hours: A, minutes: n } = t;
    return _ > 0
        ? r.intl.formatToPlainString(r.t.BXpdIg, { days: _ })
        : A > 0
          ? r.intl.formatToPlainString(E.default.PPaJSw, { hours: A })
          : r.intl.formatToPlainString(E.default["7Z+aIf"], { minutes: Math.max(n, 1) });
}
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [_, n] = A.useState(() => R(e));
    return (
        (0, T.A)(
            () => {
                n(R(e));
            },
            t ? 1e3 : null,
        ),
        t ? _ : null
    );
}
