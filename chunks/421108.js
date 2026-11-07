var A = _(582128),
    n = _(536637),
    l = _.n(n),
    T = _(396583),
    N = _(927813),
    E = _(25082),
    r = _(792996);
function O(t) {
    if (null == t) return null;
    let e = l()(t).diff(l()(), "seconds");
    if (e <= 0) return null;
    let _ = Math.floor(e / N.A.Seconds.DAY),
        A = Math.floor((e % N.A.Seconds.DAY) / N.A.Seconds.HOUR);
    return {
        days: _,
        hours: A,
        minutes: Math.floor((e % N.A.Seconds.HOUR) / N.A.Seconds.MINUTE),
        seconds: e % N.A.Seconds.MINUTE,
    };
}
function R(t) {
    let e = O(t);
    if (null == e) return null;
    let { days: _, hours: A, minutes: n } = e;
    return _ > 0
        ? r.intl.formatToPlainString(r.t.BXpdIg, { days: _ })
        : A > 0
          ? r.intl.formatToPlainString(E.default.PPaJSw, { hours: A })
          : r.intl.formatToPlainString(E.default["7Z+aIf"], { minutes: Math.max(n, 1) });
}
_.d(
    e,
    {},
    {
        ZH: O,
        dA: function (t) {
            let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [_, n] = A.useState(() => R(t));
            return (
                (0, T.A)(
                    () => {
                        n(R(t));
                    },
                    e ? 1e3 : null,
                ),
                e ? _ : null
            );
        },
        tm: function (t) {
            let e = null != t && null == O(t),
                [, _] = A.useReducer((t) => t + 1, 0);
            return ((0, T.A)(_, null == t || e ? null : N.A.Millis.SECOND), e);
        },
        ur: R,
    },
);
