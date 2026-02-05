n.d(t, { b: () => o });
var i = n(64700),
    l = n(311907),
    a = n(354138),
    r = n(212534),
    s = n(611010);
function o(e) {
    let { id: t, isDiscoverable: n } = e,
        [o, d, c] = (0, l.yK)(
            [r.A],
            () => [r.A.getApplication(t), r.A.isInvalidApplication(t), r.A.getApplicationFetchState(t)],
            [t],
        );
    return (
        i.useEffect(() => {
            !1 === n || d || c === r.e.FETCHED || c === r.e.FETCHING || (0, a.eP)(t);
        }, [t, c, n, d]),
        i.useMemo(() => (null != o ? e.mergeFromApplicationUpdate(s.Ay.createFromServer(o)) : e), [e, o])
    );
}
