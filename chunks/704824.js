n.d(t, { U: () => c, j: () => s });
var a = n(64700),
    i = n(17928),
    l = n(824552),
    r = n(546183),
    o = n(403362);
function s(e, t) {
    let { disableFetch: n = !1 } = t ?? {},
        s = (0, i.yK)([r.default], () => e?.map((e) => r.default.getNewestTokenForApplication(e)).filter(o.Vq) ?? [], [
            e,
        ]),
        c = (0, i.bG)(
            [r.default],
            () => e?.every((e) => r.default.getFetchStateForApplication(e) === r.FetchState.FETCHED) ?? !1,
            [e],
        ),
        d = (0, i.yK)(
            [r.default],
            () => e?.filter((e) => r.default.getFetchStateForApplication(e) === r.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        a.useEffect(() => {
            n || 0 === d.length || l.A.fetch(d);
        }, [n, d]),
        { tokens: s, fetched: c }
    );
}
function c(e, t) {
    let { tokens: n, fetched: i } = s(
        a.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: n.length > 0 ? n[0] : null, fetched: i };
}
