"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(17928),
    a = n(429913),
    s = n(832163);
function l(e) {
    var t;
    let n,
        l,
        o,
        d =
            ((t = i.useMemo(() => (null != e ? [e] : []), [e])),
            (n = (0, r.bG)([s.A], () => s.A.getConfig())),
            (l = i.useMemo(() => {
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
            (o = (0, a.A)(l)),
            i.useMemo(() => o.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [o]));
    return i.useMemo(() => {
        let e = Object.values(d);
        return 0 === e.length ? null : e[0];
    }, [d]);
}
