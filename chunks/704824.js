a.d(t, { U: () => c, j: () => o });
var r = a(64700),
    n = a(17928),
    l = a(824552),
    i = a(546183),
    s = a(403362);
function o(e, t) {
    let { disableFetch: a = !1 } = t ?? {},
        o = (0, n.yK)([i.default], () => e?.map((e) => i.default.getNewestTokenForApplication(e)).filter(s.Vq) ?? [], [
            e,
        ]),
        c = (0, n.bG)(
            [i.default],
            () => e?.every((e) => i.default.getFetchStateForApplication(e) === i.FetchState.FETCHED) ?? !1,
            [e],
        ),
        d = (0, n.yK)(
            [i.default],
            () => e?.filter((e) => i.default.getFetchStateForApplication(e) === i.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        r.useEffect(() => {
            a || 0 === d.length || l.A.fetch(d);
        }, [a, d]),
        { tokens: o, fetched: c }
    );
}
function c(e, t) {
    let { tokens: a, fetched: n } = o(
        r.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: a.length > 0 ? a[0] : null, fetched: n };
}
