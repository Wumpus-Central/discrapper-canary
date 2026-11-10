var A = _(582128),
    n = _(536637),
    l = _.n(n),
    r = _(396583),
    E = _(927813),
    N = _(25082),
    i = _(792996);
function T(e) {
    if (null == e) return null;
    let t = l()(e).diff(l()(), "seconds");
    if (t <= 0) return null;
    let _ = Math.floor(t / E.A.Seconds.DAY),
        A = Math.floor((t % E.A.Seconds.DAY) / E.A.Seconds.HOUR);
    return {
        days: _,
        hours: A,
        minutes: Math.floor((t % E.A.Seconds.HOUR) / E.A.Seconds.MINUTE),
        seconds: t % E.A.Seconds.MINUTE,
    };
}
function O(e) {
    let t = T(e);
    if (null == t) return null;
    let { days: _, hours: A, minutes: n } = t;
    return _ > 0
        ? i.intl.formatToPlainString(i.t.BXpdIg, { days: _ })
        : A > 0
          ? i.intl.formatToPlainString(N.default.PPaJSw, { hours: A })
          : i.intl.formatToPlainString(N.default["7Z+aIf"], { minutes: Math.max(n, 1) });
}
_.d(
    t,
    {},
    {
        ZH: T,
        dA: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [_, n] = A.useState(() => O(e));
            return (
                (0, r.A)(
                    () => {
                        n(O(e));
                    },
                    t ? 1e3 : null,
                ),
                t ? _ : null
            );
        },
        tm: function (e) {
            let t = null != e && null == T(e),
                [, _] = A.useReducer((e) => e + 1, 0);
            return ((0, r.A)(_, null == e || t ? null : E.A.Millis.SECOND), t);
        },
        ur: O,
    },
);
