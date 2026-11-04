var i = n(582128),
    l = n(855986),
    s = n(503406),
    r = n(212534),
    a = n(327891);
n.d(
    t,
    {},
    {
        b: function (e) {
            let { id: t, isDiscoverable: n } = e,
                [o, d, c] = (0, l.yK)(
                    [r.A],
                    () => [r.A.getApplication(t), r.A.isInvalidApplication(t), r.A.getApplicationFetchState(t)],
                    [t],
                );
            return (
                i.useEffect(() => {
                    !1 === n || d || c === r.e.FETCHED || c === r.e.FETCHING || (0, s.eP)(t);
                }, [t, c, n, d]),
                i.useMemo(() => (null != o ? e.mergeFromApplicationUpdate(a.Ay.createFromServer(o)) : e), [e, o])
            );
        },
    },
);
