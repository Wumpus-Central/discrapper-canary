n.d(t, { p: () => A });
var u = n(512750),
    l = n(17928),
    r = n(645619),
    i = n(313205),
    o = n(998418),
    s = n(568065);
function A(e, t) {
    let n = (0, l.bG)([r.A], () => r.A.getStateForGuild(e)),
        A = n?.allPowerups[u.zY],
        _ = (0, o.Ay)(e, A);
    return (0, i.e8)(e, t) && null != A && null != A.storeRemovalDate && _.type === s.b_.POWERUP_ACTIVATED;
}
