n.d(t, { I: () => d }), n(321073);
var i = n(64700),
    l = n(311907),
    a = n(168186),
    s = n(594061),
    r = n(661191),
    o = n(630248),
    c = n(355097);
function d(e, t) {
    i.useEffect(() => {
        s.bW.loadIfUncached(c.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, l.bG)([o.A], () => o.A.getApplicationFrecencyWithoutLoadingLatest()),
        d = i.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => ({ ...e, isUserApp: t?.some((t) => t.application.id === e.id) ?? !1 })),
            [e, t],
        ),
        u = i.useMemo(() => t?.filter((t) => !e.some((e) => e.id === t.application.id)), [e, t]),
        m = i.useMemo(() => {
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
                    let i = (n.getScore(t.id) ?? 0) - (n.getScore(e.id) ?? 0);
                    return 0 !== i ? i : e.name.localeCompare(t.name);
                }),
                t
            );
        }, [d, n, u]);
    return i.useMemo(() => {
        let e, i;
        t?.forEach((t) => {
            let n = r.default.extractTimestamp(t.id);
            (null == i || n > i) && ((e = t), (i = n));
        }),
            d.forEach((t) => {
                let l = Math.max(...(n.getEntry(t.id)?.recentUses ?? []));
                (null == i || l > i) && ((e = t), (i = l));
            });
        let l = e?.application?.id ?? "";
        return [...m.filter((e) => e.id === l), ...m.filter((e) => e.id !== l)];
    }, [m, d, n, t]);
}
