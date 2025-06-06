n.d(t, { O: () => s }), n(388685);
var r = n(73800),
    i = n(442837),
    l = n(471518),
    a = n(370210),
    o = n(973616);
function s(e) {
    let { id: t, isDiscoverable: n } = e,
        [s, c, u] = (0, i.Wu)([a.Z], () => [a.Z.getApplication(t), a.Z.isInvalidApplication(t), a.Z.getApplicationFetchState(t)], [t]);
    return (
        r.useEffect(() => {
            !1 === n || c || u === a.M.FETCHED || u === a.M.FETCHING || (0, l.gZ)(t);
        }, [t, u, n, c]),
        r.useMemo(() => (null != s ? e.mergeFromApplicationUpdate(o.ZP.createFromServer(s)) : e), [e, s])
    );
}
