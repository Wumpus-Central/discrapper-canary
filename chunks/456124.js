l.d(t, { E: () => A });
var n = l(512750),
    u = l(17928),
    r = l(645619),
    i = l(383272),
    o = l(998418),
    s = l(568065);
function A(e, t) {
    var l, A;
    let _ = (0, u.bG)([r.A], () => r.A.getStateForGuild(e)),
        E = _?.allPowerups[n.d0],
        a = (0, o.Ay)(e, E);
    return (
        (l = (0, i.lY)(e, t)),
        (A = a.type),
        l && null != E && null != E.storeRemovalDate && A === s.b_.POWERUP_ACTIVATED
    );
}
