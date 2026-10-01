l.d(t, { A: () => u });
var n = l(582128),
    a = l(17928),
    s = l(885386),
    i = l(403362),
    r = l(382483),
    o = l(385113);
function u(e) {
    let t = s.Q_.useSetting(),
        l = (0, a.bG)([o.A], () => o.A.getFeaturedFetchState()),
        u = (0, a.bG)([o.A], () => o.A.getDeveloperFetchState()),
        c = (0, a.yK)([o.A], () => e.filter((e) => o.A.getFetchState(e) === o.e.NOT_FETCHED)),
        m = (0, a.yK)([o.A], () => e.map((e) => o.A.getConfig(e)).filter(i.Vq));
    return (
        n.useEffect(() => {
            (0, r.Wq)().catch(() => {});
        }, []),
        n.useEffect(() => {
            t && (0, r.i$)().catch(() => {});
        }, [t]),
        n.useEffect(() => {
            if (l !== o.e.NOT_FETCHED && l !== o.e.FETCHING && (!t || (u !== o.e.NOT_FETCHED && u !== o.e.FETCHING)))
                for (let e of c) (0, r.un)(e).catch(() => {});
        }, [u, l, c, t]),
        m
    );
}
