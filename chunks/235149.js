i.d(t, { A: () => r });
var l = i(64700),
    n = i(311907),
    a = i(317525),
    s = i(384684);
function r(e) {
    let t = (0, n.bG)([a.A], () => a.A.getSortedRoles(e)),
        i = (0, n.bG)([s.A], () => s.A.getSubscriptionRoles(e));
    return l.useMemo(() => t.filter((e) => i.has(e.id)), [t, i]);
}
