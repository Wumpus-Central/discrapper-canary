i.d(t, { U: () => o, j: () => a });
var l = i(64700),
    s = i(17928),
    n = i(824552),
    r = i(546183),
    u = i(403362);
function a(e, t) {
    let { disableFetch: i = !1 } = t ?? {},
        a = (0, s.yK)([r.default], () => e?.map((e) => r.default.getNewestTokenForApplication(e)).filter(u.Vq) ?? [], [
            e,
        ]),
        o = (0, s.bG)(
            [r.default],
            () => e?.every((e) => r.default.getFetchStateForApplication(e) === r.FetchState.FETCHED) ?? !1,
            [e],
        ),
        d = (0, s.yK)(
            [r.default],
            () => e?.filter((e) => r.default.getFetchStateForApplication(e) === r.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        l.useEffect(() => {
            i || 0 === d.length || n.A.fetch(d);
        }, [i, d]),
        { tokens: a, fetched: o }
    );
}
function o(e, t) {
    let { tokens: i, fetched: s } = a(
        l.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: i.length > 0 ? i[0] : null, fetched: s };
}
