i.d(t, { Z: () => s });
var n = i(73800),
    l = i(442837),
    r = i(485386),
    a = i(687476);
function s(e) {
    let t = (0, l.e7)([r.Z], () => r.Z.getRoles(e)),
        i = (0, l.e7)([a.Z], () => a.Z.getSubscriptionRoles(e));
    return n.useMemo(() => Object.values(t).filter((e) => i.has(e.id)), [t, i]);
}
