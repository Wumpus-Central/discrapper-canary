a.d(t, { U: () => c, j: () => o });
var n = a(64700),
    l = a(17928),
    r = a(824552),
    i = a(546183),
    s = a(403362);
function o(e, t) {
    let { disableFetch: a = !1 } = t ?? {},
        o = (0, l.yK)([i.default], () => e?.map((e) => i.default.getNewestTokenForApplication(e)).filter(s.Vq) ?? [], [
            e,
        ]),
        c = (0, l.bG)(
            [i.default],
            () => e?.every((e) => i.default.getFetchStateForApplication(e) === i.FetchState.FETCHED) ?? !1,
            [e],
        ),
        d = (0, l.yK)(
            [i.default],
            () => e?.filter((e) => i.default.getFetchStateForApplication(e) === i.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        n.useEffect(() => {
            a || 0 === d.length || r.A.fetch(d);
        }, [a, d]),
        { tokens: o, fetched: c }
    );
}
function c(e, t) {
    let { tokens: a, fetched: l } = o(
        n.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: a.length > 0 ? a[0] : null, fetched: l };
}
