s.d(t, { Z: () => r });
var l = s(192379),
    i = s(442837),
    n = s(430824),
    a = s(687476);
function r(e) {
    let t = (0, i.e7)([n.Z], () => n.Z.getRoles(e)),
        s = (0, i.e7)([a.Z], () => a.Z.getSubscriptionRoles(e));
    return l.useMemo(() => Object.values(t).filter((e) => s.has(e.id)), [t, s]);
}
