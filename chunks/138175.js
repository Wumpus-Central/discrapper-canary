n.d(t, { b: () => o });
var i = n(64700),
    l = n(311907),
    a = n(354138),
    s = n(212534),
    r = n(611010);
function o(e) {
    let { id: t, isDiscoverable: n } = e,
        [o, d, c] = (0, l.yK)(
            [s.A],
            () => [s.A.getApplication(t), s.A.isInvalidApplication(t), s.A.getApplicationFetchState(t)],
            [t],
        );
    return (
        i.useEffect(() => {
            !1 === n || d || c === s.e.FETCHED || c === s.e.FETCHING || (0, a.eP)(t);
        }, [t, c, n, d]),
        i.useMemo(() => (null != o ? e.mergeFromApplicationUpdate(r.Ay.createFromServer(o)) : e), [e, o])
    );
}
