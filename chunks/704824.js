l.d(e, { U: () => r, j: () => p });
var a = l(582128),
    u = l(17928),
    n = l(712440),
    c = l(733110),
    i = l(403362);
function p(t, e) {
    let { disableFetch: l = !1 } = e ?? {},
        p = (0, u.yK)([c.default], () => t?.map((t) => c.default.getNewestTokenForApplication(t)).filter(i.Vq) ?? [], [
            t,
        ]),
        r = (0, u.bG)(
            [c.default],
            () => t?.every((t) => c.default.getFetchStateForApplication(t) === c.FetchState.FETCHED) ?? !1,
            [t],
        ),
        f = (0, u.yK)(
            [c.default],
            () => t?.filter((t) => c.default.getFetchStateForApplication(t) === c.FetchState.NOT_FETCHED) ?? [],
            [t],
        );
    return (
        a.useEffect(() => {
            l || 0 === f.length || n.A.fetch(f);
        }, [l, f]),
        { tokens: p, fetched: r }
    );
}
function r(t, e) {
    let { tokens: l, fetched: u } = p(
        a.useMemo(() => (null != t ? [t] : null), [t]),
        e,
    );
    return { token: l.length > 0 ? l[0] : null, fetched: u };
}
