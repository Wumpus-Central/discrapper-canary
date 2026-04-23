a.d(t, { A: () => s });
var i = a(64700),
    n = a(17928),
    r = a(429913),
    l = a(832163);
function s(e) {
    var t;
    let a,
        s,
        o,
        _ =
            ((t = i.useMemo(() => (null != e ? [e] : []), [e])),
            (a = (0, n.bG)([l.A], () => l.A.getConfig())),
            (s = i.useMemo(() => {
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
            (o = (0, r.A)(s)),
            i.useMemo(() => o.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [o]));
    return i.useMemo(() => {
        let e = Object.values(_);
        return 0 === e.length ? null : e[0];
    }, [_]);
}
