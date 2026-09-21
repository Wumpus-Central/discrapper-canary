t.d(l, { A: () => r });
var n = t(582128),
    i = t(17928),
    u = t(157695),
    o = t(859703);
let a = (0, t(945810).mj)({
    name: "2026-08-no-fill-logging",
    kind: "user",
    defaultConfig: { enableNoFill: !1 },
    variations: { 1: { enableNoFill: !1 }, 2: { enableNoFill: !0 } },
});
var s = t(971276);
function r(e, l) {
    let { enableNoFill: t } = a.useConfig({ location: l }),
        r = (0, i.bG)([u.A], () => u.A.getNoFillForPlacement(e), [e]),
        c = (0, i.bG)([o.A], () => null != o.A.questEnrollmentBlockedUntil),
        [d, f] = n.useState(null);
    return (
        n.useEffect(() => {
            if (null == r) return;
            let e = setTimeout(() => f(r.decisionId), Math.max(r.fetchedAt + r.ttlMillis - Date.now(), 0));
            return () => clearTimeout(e);
        }, [r]),
        t && null != r && r.decisionId !== d && (0, s.s)() && !c ? r : null
    );
}
