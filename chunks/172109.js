n.d(t, { O: () => s }), n(47120);
var r = n(192379),
    i = n(442837),
    a = n(471518),
    l = n(370210),
    o = n(973616);
function s(e) {
    let { id: t, isDiscoverable: n } = e,
        [s, c, u] = (0, i.Wu)([l.Z], () => [l.Z.getApplication(t), l.Z.isInvalidApplication(t), l.Z.getApplicationFetchState(t)], [t]);
    return (
        r.useEffect(() => {
            !1 === n || c || u === l.M.FETCHED || u === l.M.FETCHING || (0, a.gZ)(t);
        }, [t, u, n, c]),
        r.useMemo(() => (null != s ? e.mergeFromApplicationUpdate(o.ZP.createFromServer(s)) : e), [e, s])
    );
}
