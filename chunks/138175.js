n.d(t, { b: () => o });
var i = n(64700),
    l = n(17928),
    r = n(993748),
    a = n(212534),
    s = n(395671);
function o(e) {
    let { id: t, isDiscoverable: n } = e,
        [o, d, c] = (0, l.yK)(
            [a.A],
            () => [a.A.getApplication(t), a.A.isInvalidApplication(t), a.A.getApplicationFetchState(t)],
            [t],
        );
    return (
        i.useEffect(() => {
            !1 === n || d || c === a.e.FETCHED || c === a.e.FETCHING || (0, r.eP)(t);
        }, [t, c, n, d]),
        i.useMemo(() => (null != o ? e.mergeFromApplicationUpdate(s.Ay.createFromServer(o)) : e), [e, o])
    );
}
