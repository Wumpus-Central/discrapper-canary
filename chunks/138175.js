n.d(t, {
    b: () => l,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(354138),
    s = n(212534),
    o = n(611010);

function l(e) {
    let { id: t, isDiscoverable: n } = e,
        [l, c, u] = (0, i.yK)(
            [s.A],
            () => [s.A.getApplication(t), s.A.isInvalidApplication(t), s.A.getApplicationFetchState(t)],
            [t],
        );
    return (
        r.useEffect(() => {
            !1 === n || c || u === s.e.FETCHED || u === s.e.FETCHING || (0, a.eP)(t);
        }, [t, u, n, c]),
        r.useMemo(() => (null != l ? e.mergeFromApplicationUpdate(o.Ay.createFromServer(l)) : e), [e, l])
    );
}
