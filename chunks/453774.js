n.d(t, { A: () => s });
var i = n(64700),
    a = n(17928),
    r = n(429913),
    l = n(832163);
function s(e) {
    var t;
    let n,
        s,
        o,
        d =
            ((t = i.useMemo(() => (null != e ? [e] : []), [e])),
            (n = (0, a.bG)([l.A], () => l.A.getConfig())),
            (s = i.useMemo(() => {
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
            (o = (0, r.A)(s)),
            i.useMemo(() => o.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [o]));
    return i.useMemo(() => {
        let e = Object.values(d);
        return 0 === e.length ? null : e[0];
    }, [d]);
}
