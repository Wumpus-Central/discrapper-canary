n.d(t, { I: () => d }), n(321073);
var l = n(64700),
    i = n(311907),
    a = n(168186),
    s = n(594061),
    r = n(661191),
    o = n(630248),
    c = n(355097);
function d(e, t) {
    l.useEffect(() => {
        s.bW.loadIfUncached(c.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, i.bG)([o.A], () => o.A.getApplicationFrecencyWithoutLoadingLatest()),
        d = l.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => ({ ...e, isUserApp: t?.some((t) => t.application.id === e.id) ?? !1 })),
            [e, t],
        ),
        u = l.useMemo(() => t?.filter((t) => !e.some((e) => e.id === t.application.id)), [e, t]),
        m = l.useMemo(() => {
            u?.forEach((e) => {
                let t = r.default.extractTimestamp(e.id);
                null == n.getEntry(e.application.id) && n.track(e.application.id, { timestamp: t });
            }),
                n.compute();
            let e = u?.map((e) => (0, a.bq)(e.application, !0)) ?? [],
                t = [...d];
            return (
                t.push(...e),
                t.sort((e, t) => {
                    let l = (n.getScore(t.id) ?? 0) - (n.getScore(e.id) ?? 0);
                    return 0 !== l ? l : e.name.localeCompare(t.name);
                }),
                t
            );
        }, [d, n, u]);
    return l.useMemo(() => {
        let e, l;
        t?.forEach((t) => {
            let n = r.default.extractTimestamp(t.id);
            (null == l || n > l) && ((e = t), (l = n));
        }),
            d.forEach((t) => {
                let i = Math.max(...(n.getEntry(t.id)?.recentUses ?? []));
                (null == l || i > l) && ((e = t), (l = i));
            });
        let i = e?.application?.id ?? "";
        return [...m.filter((e) => e.id === i), ...m.filter((e) => e.id !== i)];
    }, [m, d, n, t]);
}
