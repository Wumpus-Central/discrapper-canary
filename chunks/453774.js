var i = n(582128),
    r = n(855986),
    l = n(429913),
    s = n(832163);
n.d(
    t,
    {},
    {
        A: function (e) {
            var t;
            let n,
                a,
                o,
                u =
                    ((t = i.useMemo(() => (null != e ? [e] : []), [e])),
                    (n = (0, r.bG)([s.A], () => s.A.getConfig())),
                    (a = i.useMemo(() => {
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
                    (o = (0, l.A)(a)),
                    i.useMemo(() => o.reduce((e, t) => (null == t || (e[t.id] = t), e), {}), [o]));
            return i.useMemo(() => {
                let e = Object.values(u);
                return 0 === e.length ? null : e[0];
            }, [u]);
        },
    },
);
