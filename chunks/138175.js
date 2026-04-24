n.d(t, { b: () => o });
var i = n(64700),
    l = n(17928),
    a = n(354138),
    r = n(212534),
    s = n(395671);
function o(e) {
    let { id: t, isDiscoverable: n } = e,
        [o, c, d] = (0, l.yK)(
            [r.A],
            () => [r.A.getApplication(t), r.A.isInvalidApplication(t), r.A.getApplicationFetchState(t)],
            [t],
        );
    return (
        i.useEffect(() => {
            !1 === n || c || d === r.e.FETCHED || d === r.e.FETCHING || (0, a.eP)(t);
        }, [t, d, n, c]),
        i.useMemo(() => (null != o ? e.mergeFromApplicationUpdate(s.Ay.createFromServer(o)) : e), [e, o])
    );
}
