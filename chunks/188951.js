n.d(t, { A: () => s });
var r = n(64700),
    u = n(17928),
    a = n(253932),
    l = n(403362),
    o = n(382483),
    i = n(385113);
function s(e) {
    let t = a.Q_.useSetting(),
        n = (0, u.bG)([i.A], () => i.A.getFeaturedFetchState()),
        s = (0, u.bG)([i.A], () => i.A.getDeveloperFetchState()),
        c = (0, u.yK)([i.A], () => e.filter((e) => i.A.getFetchState(e) === i.e.NOT_FETCHED)),
        d = (0, u.yK)([i.A], () => e.map((e) => i.A.getConfig(e)).filter(l.Vq));
    return (
        r.useEffect(() => {
            (0, o.Wq)();
        }, []),
        r.useEffect(() => {
            t && (0, o.i$)();
        }, [t]),
        r.useEffect(() => {
            if (n !== i.e.NOT_FETCHED && n !== i.e.FETCHING && (!t || (s !== i.e.NOT_FETCHED && s !== i.e.FETCHING)))
                for (let e of c) (0, o.un)(e);
        }, [s, n, c, t]),
        d
    );
}
