n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    l = n(317525),
    a = n(384684);
function o(e) {
    let t = (0, i.bG)([l.A], () => l.A.getSortedRoles(e)),
        n = (0, i.bG)([a.A], () => a.A.getSubscriptionRoles(e));
    return r.useMemo(() => t.filter((e) => n.has(e.id)), [t, n]);
}
