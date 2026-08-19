"use strict";
n.d(t, { A: () => u });
var l = n(582128),
    i = n(17928),
    s = n(885386),
    r = n(403362),
    a = n(382483),
    o = n(385113);
function u(e) {
    let t = s.Q_.useSetting(),
        n = (0, i.bG)([o.A], () => o.A.getFeaturedFetchState()),
        u = (0, i.bG)([o.A], () => o.A.getDeveloperFetchState()),
        c = (0, i.yK)([o.A], () => e.filter((e) => o.A.getFetchState(e) === o.e.NOT_FETCHED)),
        d = (0, i.yK)([o.A], () => e.map((e) => o.A.getConfig(e)).filter(r.Vq));
    return (
        l.useEffect(() => {
            (0, a.Wq)().catch(() => {});
        }, []),
        l.useEffect(() => {
            t && (0, a.i$)().catch(() => {});
        }, [t]),
        l.useEffect(() => {
            if (n !== o.e.NOT_FETCHED && n !== o.e.FETCHING && (!t || (u !== o.e.NOT_FETCHED && u !== o.e.FETCHING)))
                for (let e of c) (0, a.un)(e).catch(() => {});
        }, [u, n, c, t]),
        d
    );
}
