"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    s = n(429913),
    a = n(832163);
function o(e) {
    let t = (0, i.bG)([a.A], () => a.A.getConfig()),
        n = r.useMemo(() => {
            if (null == t || 0 === e.length) return [];
            let n = new Set(e);
            return Array.from(
                new Set(
                    t.storefronts.filter((e) => n.has(e.applicationId) || n.has(e.gameId)).map((e) => e.applicationId),
                ),
            );
        }, [t, e]),
        o = (0, s.A)(n);
    return r.useMemo(() => o.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [o]);
}
function l(e) {
    let t = o(r.useMemo(() => (null != e ? [e] : []), [e]));
    return r.useMemo(() => {
        let e = Object.values(t);
        return 0 === e.length ? null : e[0];
    }, [t]);
}
