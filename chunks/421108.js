t.d(e, { ZH: () => O, dA: () => i, tm: () => R, ur: () => I });
var A = t(582128),
    n = t(536637),
    l = t.n(n),
    T = t(396583),
    N = t(927813),
    E = t(621547),
    r = t(105292);
function O(_) {
    if (null == _) return null;
    let e = l()(_).diff(l()(), "seconds");
    if (e <= 0) return null;
    let t = Math.floor(e / N.A.Seconds.DAY),
        A = Math.floor((e % N.A.Seconds.DAY) / N.A.Seconds.HOUR);
    return {
        days: t,
        hours: A,
        minutes: Math.floor((e % N.A.Seconds.HOUR) / N.A.Seconds.MINUTE),
        seconds: e % N.A.Seconds.MINUTE,
    };
}
function R(_) {
    let e = null != _ && null == O(_),
        [, t] = A.useReducer((_) => _ + 1, 0);
    return ((0, T.A)(t, null == _ || e ? null : N.A.Millis.SECOND), e);
}
function I(_) {
    let e = O(_);
    if (null == e) return null;
    let { days: t, hours: A, minutes: n } = e;
    return t > 0
        ? r.intl.formatToPlainString(r.t.BXpdIg, { days: t })
        : A > 0
          ? r.intl.formatToPlainString(E.default.PPaJSw, { hours: A })
          : r.intl.formatToPlainString(E.default["7Z+aIf"], { minutes: Math.max(n, 1) });
}
function i(_) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [t, n] = A.useState(() => I(_));
    return (
        (0, T.A)(
            () => {
                n(I(_));
            },
            e ? 1e3 : null,
        ),
        e ? t : null
    );
}
