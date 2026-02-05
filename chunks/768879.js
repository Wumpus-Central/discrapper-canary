"use strict";
n.d(t, { I: () => c }), n(321073);
var r = n(64700),
    i = n(311907),
    a = n(168186),
    s = n(594061),
    o = n(661191),
    l = n(630248),
    u = n(355097);
function c(e, t) {
    r.useEffect(() => {
        s.bW.loadIfUncached(u.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, i.bG)([l.A], () => l.A.getApplicationFrecencyWithoutLoadingLatest()),
        c = r.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => ({ ...e, isUserApp: t?.some((t) => t.application.id === e.id) ?? !1 })),
            [e, t],
        ),
        d = r.useMemo(() => t?.filter((t) => !e.some((e) => e.id === t.application.id)), [e, t]),
        _ = r.useMemo(() => {
            d?.forEach((e) => {
                let t = o.default.extractTimestamp(e.id);
                null == n.getEntry(e.application.id) && n.track(e.application.id, { timestamp: t });
            }),
                n.compute();
            let e = d?.map((e) => (0, a.bq)(e.application, !0)) ?? [],
                t = [...c];
            return (
                t.push(...e),
                t.sort((e, t) => {
                    let r = (n.getScore(t.id) ?? 0) - (n.getScore(e.id) ?? 0);
                    return 0 !== r ? r : e.name.localeCompare(t.name);
                }),
                t
            );
        }, [c, n, d]);
    return r.useMemo(() => {
        let e, r;
        t?.forEach((t) => {
            let n = o.default.extractTimestamp(t.id);
            (null == r || n > r) && ((e = t), (r = n));
        }),
            c.forEach((t) => {
                let i = Math.max(...(n.getEntry(t.id)?.recentUses ?? []));
                (null == r || i > r) && ((e = t), (r = i));
            });
        let i = e?.application?.id ?? "";
        return [..._.filter((e) => e.id === i), ..._.filter((e) => e.id !== i)];
    }, [_, c, n, t]);
}
