"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(311907),
    s = n(253932),
    a = n(403362),
    o = n(382483),
    l = n(385113);
function u(e) {
    let t = s.Q_.useSetting(),
        n = (0, i.bG)([l.A], () => l.A.getFeaturedFetchState()),
        u = (0, i.bG)([l.A], () => l.A.getDeveloperFetchState()),
        c = (0, i.yK)([l.A], () => e.filter((e) => l.A.getFetchState(e) === l.e.NOT_FETCHED)),
        d = (0, i.yK)([l.A], () => e.map((e) => l.A.getConfig(e)).filter(a.Vq));
    return (
        r.useEffect(() => {
            (0, o.Wq)();
        }, []),
        r.useEffect(() => {
            t && (0, o.i$)();
        }, [t]),
        r.useEffect(() => {
            if (n !== l.e.NOT_FETCHED && n !== l.e.FETCHING && (!t || (u !== l.e.NOT_FETCHED && u !== l.e.FETCHING)))
                for (let e of c) (0, o.un)(e);
        }, [u, n, c, t]),
        d
    );
}
