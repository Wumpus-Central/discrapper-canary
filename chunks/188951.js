n.d(t, { A: () => u });
var i = n(64700),
    r = n(17928),
    a = n(253932),
    l = n(403362),
    s = n(382483),
    o = n(385113);
function u(e) {
    let t = a.Q_.useSetting(),
        n = (0, r.bG)([o.A], () => o.A.getFeaturedFetchState()),
        u = (0, r.bG)([o.A], () => o.A.getDeveloperFetchState()),
        _ = (0, r.yK)([o.A], () => e.filter((e) => o.A.getFetchState(e) === o.e.NOT_FETCHED)),
        E = (0, r.yK)([o.A], () => e.map((e) => o.A.getConfig(e)).filter(l.Vq));
    return (
        i.useEffect(() => {
            (0, s.Wq)();
        }, []),
        i.useEffect(() => {
            t && (0, s.i$)();
        }, [t]),
        i.useEffect(() => {
            if (n !== o.e.NOT_FETCHED && n !== o.e.FETCHING && (!t || (u !== o.e.NOT_FETCHED && u !== o.e.FETCHING)))
                for (let e of _) (0, s.un)(e);
        }, [u, n, _, t]),
        E
    );
}
