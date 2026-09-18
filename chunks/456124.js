n.d(t, { E: () => A });
var u = n(512750),
    l = n(17928),
    r = n(645619),
    i = n(383272),
    o = n(998418),
    s = n(568065);
function A(e, t) {
    var n, A;
    let E = (0, l.bG)([r.A], () => r.A.getStateForGuild(e)),
        _ = E?.allPowerups[u.d0],
        a = (0, o.Ay)(e, _);
    return (
        (n = (0, i.lY)(e, t)),
        (A = a.type),
        n && null != _ && null != _.storeRemovalDate && A === s.b_.POWERUP_ACTIVATED
    );
}
