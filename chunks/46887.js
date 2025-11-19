i.d(t, { Z: () => s });
var n = i(473749),
    r = i(442837),
    l = i(485386),
    a = i(687476);
function s(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.getSortedRoles(e)),
        i = (0, r.e7)([a.Z], () => a.Z.getSubscriptionRoles(e));
    return n.useMemo(() => t.filter((e) => i.has(e.id)), [t, i]);
}
