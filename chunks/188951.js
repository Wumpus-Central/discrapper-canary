"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    s = n(403362),
    a = n(382483),
    o = n(385113);
function l(e) {
    let t = (0, i.bG)([o.A], () => o.A.getFeaturedFetchState()),
        n = (0, i.yK)([o.A], () => e.filter((e) => o.A.getFetchState(e) === o.e.NOT_FETCHED)),
        l = (0, i.yK)([o.A], () => e.map((e) => o.A.getConfig(e)).filter(s.Vq));
    return (
        r.useEffect(() => {
            (0, a.W)();
        }, []),
        r.useEffect(() => {
            if (t === o.e.SUCCESS || t === o.e.FAILURE) for (let e of n) (0, a.u)(e);
        }, [t, n]),
        l
    );
}
