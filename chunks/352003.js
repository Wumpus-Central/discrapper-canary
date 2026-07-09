l.d(t, { A: () => o });
var n = l(64700),
    a = l(17928),
    s = l(885386),
    i = l(403362),
    r = l(382483),
    u = l(385113);
function o(e) {
    let t = s.Q_.useSetting(),
        l = (0, a.bG)([u.A], () => u.A.getFeaturedFetchState()),
        o = (0, a.bG)([u.A], () => u.A.getDeveloperFetchState()),
        c = (0, a.yK)([u.A], () => e.filter((e) => u.A.getFetchState(e) === u.e.NOT_FETCHED)),
        m = (0, a.yK)([u.A], () => e.map((e) => u.A.getConfig(e)).filter(i.Vq));
    return (
        n.useEffect(() => {
            (0, r.Wq)().catch(() => {});
        }, []),
        n.useEffect(() => {
            t && (0, r.i$)().catch(() => {});
        }, [t]),
        n.useEffect(() => {
            if (l !== u.e.NOT_FETCHED && l !== u.e.FETCHING && (!t || (o !== u.e.NOT_FETCHED && o !== u.e.FETCHING)))
                for (let e of c) (0, r.un)(e).catch(() => {});
        }, [o, l, c, t]),
        m
    );
}
