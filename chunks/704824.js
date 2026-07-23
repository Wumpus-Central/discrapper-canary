l.d(e, { U: () => h, j: () => u });
var a = l(64700),
    r = l(17928),
    i = l(712440),
    c = l(733110),
    n = l(403362);
function u(t, e) {
    let { disableFetch: l = !1 } = e ?? {},
        u = (0, r.yK)([c.default], () => t?.map((t) => c.default.getNewestTokenForApplication(t)).filter(n.Vq) ?? [], [
            t,
        ]),
        h = (0, r.bG)(
            [c.default],
            () => t?.every((t) => c.default.getFetchStateForApplication(t) === c.FetchState.FETCHED) ?? !1,
            [t],
        ),
        o = (0, r.yK)(
            [c.default],
            () => t?.filter((t) => c.default.getFetchStateForApplication(t) === c.FetchState.NOT_FETCHED) ?? [],
            [t],
        );
    return (
        a.useEffect(() => {
            l || 0 === o.length || i.A.fetch(o);
        }, [l, o]),
        { tokens: u, fetched: h }
    );
}
function h(t, e) {
    let { tokens: l, fetched: r } = u(
        a.useMemo(() => (null != t ? [t] : null), [t]),
        e,
    );
    return { token: l.length > 0 ? l[0] : null, fetched: r };
}
