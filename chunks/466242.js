n.d(t, { A: () => u });
var l = n(582128),
    r = n(17928),
    a = n(157695),
    o = n(859703);
let s = (0, n(945810).mj)({
    name: "2026-08-no-fill-logging",
    kind: "user",
    defaultConfig: { enableNoFill: !1 },
    variations: { 1: { enableNoFill: !1 }, 2: { enableNoFill: !0 } },
});
var i = n(971276);
function u(e, t) {
    let { enableNoFill: n } = s.useConfig({ location: t }),
        u = (0, r.bG)([a.A], () => a.A.getNoFillForPlacement(e), [e]),
        c = (0, r.bG)([o.A], () => null != o.A.questEnrollmentBlockedUntil),
        [d, p] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == u) return;
            let e = setTimeout(() => p(u.decisionId), Math.max(u.fetchedAt + u.ttlMillis - Date.now(), 0));
            return () => clearTimeout(e);
        }, [u]),
        n && null != u && u.decisionId !== d && (0, i.s)() && !c ? u : null
    );
}
