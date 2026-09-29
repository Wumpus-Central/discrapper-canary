n.d(t, { E: () => A });
var l = n(512750),
    u = n(17928),
    r = n(645619),
    i = n(383272),
    o = n(998418),
    s = n(568065);
function A(e, t) {
    var n, A;
    let _ = (0, u.bG)([r.A], () => r.A.getStateForGuild(e)),
        E = _?.allPowerups[l.d0],
        a = (0, o.Ay)(e, E);
    return (
        (n = (0, i.lY)(e, t)),
        (A = a.type),
        n && null != E && null != E.storeRemovalDate && A === s.b_.POWERUP_ACTIVATED
    );
}
