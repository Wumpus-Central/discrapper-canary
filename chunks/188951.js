n.d(t, { A: () => o });
var i = n(64700),
    a = n(311907),
    l = n(403362),
    s = n(382483),
    r = n(385113);
function o(e) {
    let t = (0, a.bG)([r.A], () => r.A.getFeaturedFetchState()),
        n = (0, a.yK)([r.A], () => e.filter((e) => r.A.getFetchState(e) === r.e.NOT_FETCHED)),
        o = (0, a.yK)([r.A], () => e.map((e) => r.A.getConfig(e)).filter(l.Vq));
    return (
        i.useEffect(() => {
            (0, s.W)();
        }, []),
        i.useEffect(() => {
            if (t === r.e.SUCCESS || t === r.e.FAILURE) for (let e of n) (0, s.u)(e);
        }, [t, n]),
        o
    );
}
