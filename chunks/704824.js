n.d(t, { U: () => o, j: () => u });
var i = n(64700),
    l = n(17928),
    r = n(824552),
    a = n(546183),
    s = n(403362);
function u(e, t) {
    let { disableFetch: n = !1 } = t ?? {},
        u = (0, l.yK)([a.default], () => e?.map((e) => a.default.getNewestTokenForApplication(e)).filter(s.Vq) ?? [], [
            e,
        ]),
        o = (0, l.bG)(
            [a.default],
            () => e?.every((e) => a.default.getFetchStateForApplication(e) === a.FetchState.FETCHED) ?? !1,
            [e],
        ),
        c = (0, l.yK)(
            [a.default],
            () => e?.filter((e) => a.default.getFetchStateForApplication(e) === a.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        i.useEffect(() => {
            n || 0 === c.length || r.A.fetch(c);
        }, [n, c]),
        { tokens: u, fetched: o }
    );
}
function o(e, t) {
    let { tokens: n, fetched: l } = u(
        i.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: n.length > 0 ? n[0] : null, fetched: l };
}
