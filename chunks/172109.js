n.d(t, { O: () => l }), n(388685);
var r = n(73800),
    i = n(442837),
    o = n(471518),
    a = n(370210),
    s = n(973616);
function l(e) {
    let { id: t, isDiscoverable: n } = e,
        [l, c, u] = (0, i.Wu)(
            [a.Z],
            () => [a.Z.getApplication(t), a.Z.isInvalidApplication(t), a.Z.getApplicationFetchState(t)],
            [t],
        );
    return (
        r.useEffect(() => {
            !1 === n || c || u === a.M.FETCHED || u === a.M.FETCHING || (0, o.gZ)(t);
        }, [t, u, n, c]),
        r.useMemo(() => (null != l ? e.mergeFromApplicationUpdate(s.ZP.createFromServer(l)) : e), [e, l])
    );
}
