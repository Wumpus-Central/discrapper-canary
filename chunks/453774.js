"use strict";
a.d(t, { A: () => l });
var r = a(64700),
    n = a(17928),
    s = a(429913),
    i = a(832163);
function l(e) {
    var t;
    let a,
        l,
        c,
        d =
            ((t = r.useMemo(() => (null != e ? [e] : []), [e])),
            (a = (0, n.bG)([i.A], () => i.A.getConfig())),
            (l = r.useMemo(() => {
                if (null == a || 0 === t.length) return [];
                let e = new Set(t);
                return Array.from(
                    new Set(
                        a.storefronts
                            .filter((t) => e.has(t.applicationId) || e.has(t.gameId))
                            .map((e) => e.applicationId),
                    ),
                );
            }, [a, t])),
            (c = (0, s.A)(l)),
            r.useMemo(() => c.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [c]));
    return r.useMemo(() => {
        let e = Object.values(d);
        return 0 === e.length ? null : e[0];
    }, [d]);
}
