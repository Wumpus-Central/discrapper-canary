n.d(t, { A: () => s });
var l = n(582128),
    r = n(17928),
    u = n(157695),
    a = n(859703);
let o = (0, n(945810).mj)({
    name: "2026-08-no-fill-logging",
    kind: "user",
    defaultConfig: { enableNoFill: !1 },
    variations: { 1: { enableNoFill: !1 }, 2: { enableNoFill: !0 } },
});
var i = n(971276);
function s(e, t) {
    let { enableNoFill: n } = o.useConfig({ location: t }),
        s = (0, r.bG)([u.A], () => u.A.getNoFillForPlacement(e), [e]),
        c = (0, r.bG)([a.A], () => null != a.A.questEnrollmentBlockedUntil),
        [d, p] = l.useState(null);
    return (
        l.useEffect(() => {
            if (null == s) return;
            let e = setTimeout(() => p(s.decisionId), Math.max(s.fetchedAt + s.ttlMillis - Date.now(), 0));
            return () => clearTimeout(e);
        }, [s]),
        n && null != s && s.decisionId !== d && (0, i.s)() && !c ? s : null
    );
}
