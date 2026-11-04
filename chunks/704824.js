var c = n(582128),
    i = n(855986),
    l = n(712440),
    p = n(733110),
    r = n(403362);
function a(t, e) {
    let { disableFetch: n = !1 } = e ?? {},
        a = (0, i.yK)([p.A], () => t?.map((t) => p.A.getNewestTokenForApplication(t)).filter(r.Vq) ?? [], [t]),
        o = (0, i.bG)([p.A], () => t?.every((t) => p.A.getFetchStateForApplication(t) === p.FetchState.FETCHED) ?? !1, [
            t,
        ]),
        u = (0, i.yK)(
            [p.A],
            () => t?.filter((t) => p.A.getFetchStateForApplication(t) === p.FetchState.NOT_FETCHED) ?? [],
            [t],
        );
    return (
        c.useEffect(() => {
            n || 0 === u.length || l.A.fetch(u);
        }, [n, u]),
        { tokens: a, fetched: o }
    );
}
n.d(
    e,
    {},
    {
        U: function (t, e) {
            let { tokens: n, fetched: i } = a(
                c.useMemo(() => (null != t ? [t] : null), [t]),
                e,
            );
            return { token: n.length > 0 ? n[0] : null, fetched: i };
        },
        j: a,
    },
);
