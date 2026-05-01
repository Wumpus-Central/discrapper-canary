i.d(t, { U: () => o, j: () => u });
var n = i(64700),
    l = i(17928),
    r = i(824552),
    s = i(546183),
    a = i(403362);
function u(e, t) {
    let { disableFetch: i = !1 } = t ?? {},
        u = (0, l.yK)([s.default], () => e?.map((e) => s.default.getNewestTokenForApplication(e)).filter(a.Vq) ?? [], [
            e,
        ]),
        o = (0, l.bG)(
            [s.default],
            () => e?.every((e) => s.default.getFetchStateForApplication(e) === s.FetchState.FETCHED) ?? !1,
            [e],
        ),
        d = (0, l.yK)(
            [s.default],
            () => e?.filter((e) => s.default.getFetchStateForApplication(e) === s.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        n.useEffect(() => {
            i || 0 === d.length || r.A.fetch(d);
        }, [i, d]),
        { tokens: u, fetched: o }
    );
}
function o(e, t) {
    let { tokens: i, fetched: l } = u(
        n.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: i.length > 0 ? i[0] : null, fetched: l };
}
