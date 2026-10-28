n.d(t, { A: () => u });
var l = n(582128),
    r = n(17928),
    s = n(157695),
    a = n(859703);
let i = (0, n(945810).mj)({
    name: "2026-08-no-fill-logging",
    kind: "user",
    defaultConfig: { enableNoFill: !1 },
    variations: { 1: { enableNoFill: !1 }, 2: { enableNoFill: !0 } },
});
var o = n(971276);
function u(e, t) {
    let { enableNoFill: n } = i.useConfig({ location: t }),
        u = (0, r.bG)([s.A], () => s.A.getNoFillForPlacement(e), [e]),
        c = (0, r.bG)([a.A], () => null != a.A.questEnrollmentBlockedUntil),
        [d, m] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == u) return;
            let e = setTimeout(() => m(u.decisionId), Math.max(u.fetchedAt + u.ttlMillis - Date.now(), 0));
            return () => clearTimeout(e);
        }, [u]),
        n && null != u && u.decisionId !== d && (0, o.s)() && !c ? u : null
    );
}
