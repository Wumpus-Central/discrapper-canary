n.d(t, { A: () => r });
var i = n(64700),
    l = n(311907),
    a = n(429913),
    s = n(832163);
function r(e) {
    var t;
    let n,
        r,
        o,
        c =
            ((t = i.useMemo(() => (null != e ? [e] : []), [e])),
            (n = (0, l.bG)([s.A], () => s.A.getConfig())),
            (r = i.useMemo(() => {
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
            (o = (0, a.A)(r)),
            i.useMemo(() => o.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [o]));
    return i.useMemo(() => {
        let e = Object.values(c);
        return 0 === e.length ? null : e[0];
    }, [c]);
}
