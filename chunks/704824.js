n.d(t, { U: () => c, j: () => a });
var l = n(64700),
    r = n(17928),
    i = n(824552),
    u = n(546183),
    o = n(403362);
function a(e, t) {
    let { disableFetch: n = !1 } = t ?? {},
        a = (0, r.yK)([u.default], () => e?.map((e) => u.default.getNewestTokenForApplication(e)).filter(o.Vq) ?? [], [
            e,
        ]),
        c = (0, r.bG)(
            [u.default],
            () => e?.every((e) => u.default.getFetchStateForApplication(e) === u.FetchState.FETCHED) ?? !1,
            [e],
        ),
        s = (0, r.yK)(
            [u.default],
            () => e?.filter((e) => u.default.getFetchStateForApplication(e) === u.FetchState.NOT_FETCHED) ?? [],
            [e],
        );
    return (
        l.useEffect(() => {
            n || 0 === s.length || i.A.fetch(s);
        }, [n, s]),
        { tokens: a, fetched: c }
    );
}
function c(e, t) {
    let { tokens: n, fetched: r } = a(
        l.useMemo(() => (null != e ? [e] : null), [e]),
        t,
    );
    return { token: n.length > 0 ? n[0] : null, fetched: r };
}
