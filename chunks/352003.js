"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(17928),
    a = n(885386),
    s = n(403362),
    l = n(382483),
    o = n(385113);
function d(e) {
    let t = a.Q_.useSetting(),
        n = (0, r.bG)([o.A], () => o.A.getFeaturedFetchState()),
        d = (0, r.bG)([o.A], () => o.A.getDeveloperFetchState()),
        c = (0, r.yK)([o.A], () => e.filter((e) => o.A.getFetchState(e) === o.e.NOT_FETCHED)),
        u = (0, r.yK)([o.A], () => e.map((e) => o.A.getConfig(e)).filter(s.Vq));
    return (
        i.useEffect(() => {
            (0, l.Wq)().catch(() => {});
        }, []),
        i.useEffect(() => {
            t && (0, l.i$)().catch(() => {});
        }, [t]),
        i.useEffect(() => {
            if (n !== o.e.NOT_FETCHED && n !== o.e.FETCHING && (!t || (d !== o.e.NOT_FETCHED && d !== o.e.FETCHING)))
                for (let e of c) (0, l.un)(e).catch(() => {});
        }, [d, n, c, t]),
        u
    );
}
