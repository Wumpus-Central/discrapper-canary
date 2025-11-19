n.d(t, { O: () => l }), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(471518),
    o = n(370210),
    s = n(973616);
function l(e) {
    let { id: t, isDiscoverable: n } = e,
        [l, c, u] = (0, i.Wu)(
            [o.Z],
            () => [o.Z.getApplication(t), o.Z.isInvalidApplication(t), o.Z.getApplicationFetchState(t)],
            [t],
        );
    return (
        r.useEffect(() => {
            !1 === n || c || u === o.M.FETCHED || u === o.M.FETCHING || (0, a.gZ)(t);
        }, [t, u, n, c]),
        r.useMemo(() => (null != l ? e.mergeFromApplicationUpdate(s.ZP.createFromServer(l)) : e), [e, l])
    );
}
