"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(17928),
    s = n(429913),
    a = n(832163);
function o(e) {
    var t;
    let n,
        o,
        l,
        u =
            ((t = i.useMemo(() => (null != e ? [e] : []), [e])),
            (n = (0, r.bG)([a.A], () => a.A.getConfig())),
            (o = i.useMemo(() => {
                if (null == n || 0 === t.length) return [];
                let e = new Set(t);
                return Array.from(
                    new Set(
                        n.storefronts
                            .filter((t) => e.has(t.applicationId) || e.has(t.gameId))
                            .map((e) => e.applicationId),
                    ),
                );
            }, [n, t])),
            (l = (0, s.A)(o)),
            i.useMemo(() => l.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [l]));
    return i.useMemo(() => {
        let e = Object.values(u);
        return 0 === e.length ? null : e[0];
    }, [u]);
}
