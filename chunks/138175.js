n.d(t, { b: () => o });
var i = n(582128),
    l = n(17928),
    s = n(993748),
    a = n(212534),
    r = n(395671);
function o(e) {
    let { id: t, isDiscoverable: n } = e,
        [o, c, d] = (0, l.yK)(
            [a.A],
            () => [a.A.getApplication(t), a.A.isInvalidApplication(t), a.A.getApplicationFetchState(t)],
            [t],
        );
    return (
        i.useEffect(() => {
            !1 === n || c || d === a.e.FETCHED || d === a.e.FETCHING || (0, s.eP)(t);
        }, [t, d, n, c]),
        i.useMemo(() => (null != o ? e.mergeFromApplicationUpdate(r.Ay.createFromServer(o)) : e), [e, o])
    );
}
