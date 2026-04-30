"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(17928),
    s = n(885386),
    a = n(403362),
    o = n(382483),
    l = n(385113);
function u(e) {
    let t = s.Q_.useSetting(),
        n = (0, r.bG)([l.A], () => l.A.getFeaturedFetchState()),
        u = (0, r.bG)([l.A], () => l.A.getDeveloperFetchState()),
        c = (0, r.yK)([l.A], () => e.filter((e) => l.A.getFetchState(e) === l.e.NOT_FETCHED)),
        d = (0, r.yK)([l.A], () => e.map((e) => l.A.getConfig(e)).filter(a.Vq));
    return (
        i.useEffect(() => {
            (0, o.Wq)();
        }, []),
        i.useEffect(() => {
            t && (0, o.i$)();
        }, [t]),
        i.useEffect(() => {
            if (n !== l.e.NOT_FETCHED && n !== l.e.FETCHING && (!t || (u !== l.e.NOT_FETCHED && u !== l.e.FETCHING)))
                for (let e of c) (0, o.un)(e);
        }, [u, n, c, t]),
        d
    );
}
