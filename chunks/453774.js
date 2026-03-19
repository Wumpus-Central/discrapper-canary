"use strict";
n.d(t, { Ay: () => u, UE: () => l, dV: () => o });
var r = n(64700),
    i = n(311907),
    s = n(429913),
    a = n(832163);
function o(e) {
    return (0, i.yK)([a.A], () => {
        let t = new Set();
        for (let n of e) {
            let e = a.A.getApplicationIdFromDetectableId(n);
            null != e && t.add(e);
        }
        return Array.from(t);
    }, [e]);
}
function l(e) {
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
function u(e) {
    let t = l(r.useMemo(() => (null != e ? [e] : []), [e]));
    return r.useMemo(() => {
        let e = Object.values(t);
        return 0 === e.length ? null : e[0];
    }, [t]);
}
