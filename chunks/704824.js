l.d(e, { U: () => o, j: () => c });
var r = l(64700),
    a = l(17928),
    u = l(824552),
    n = l(546183),
    i = l(403362);
function c(t, e) {
    let { disableFetch: l = !1 } = e ?? {},
        c = (0, a.yK)([n.default], () => t?.map((t) => n.default.getNewestTokenForApplication(t)).filter(i.Vq) ?? [], [
            t,
        ]),
        o = (0, a.bG)(
            [n.default],
            () => t?.every((t) => n.default.getFetchStateForApplication(t) === n.FetchState.FETCHED) ?? !1,
            [t],
        ),
        p = (0, a.yK)(
            [n.default],
            () => t?.filter((t) => n.default.getFetchStateForApplication(t) === n.FetchState.NOT_FETCHED) ?? [],
            [t],
        );
    return (
        r.useEffect(() => {
            l || 0 === p.length || u.A.fetch(p);
        }, [l, p]),
        { tokens: c, fetched: o }
    );
}
function o(t, e) {
    let { tokens: l, fetched: a } = c(
        r.useMemo(() => (null != t ? [t] : null), [t]),
        e,
    );
    return { token: l.length > 0 ? l[0] : null, fetched: a };
}
