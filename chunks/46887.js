r.d(t, { Z: () => a });
var n = r(192379),
    i = r(442837),
    l = r(430824),
    s = r(687476);
function a(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getRoles(e)),
        r = (0, i.e7)([s.Z], () => s.Z.getSubscriptionRoles(e));
    return n.useMemo(() => Object.values(t).filter((e) => r.has(e.id)), [t, r]);
}
