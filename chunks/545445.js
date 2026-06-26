n.d(t, { p: () => _ });
var l = n(512750),
    u = n(17928),
    r = n(645619),
    i = n(313205),
    o = n(998418),
    s = n(568065);
function _(e, t) {
    let n = (0, u.bG)([r.A], () => r.A.getStateForGuild(e)),
        _ = n?.allPowerups[l.zY],
        A = (0, o.Ay)(e, _);
    return (0, i.e8)(e, t) && null != _ && null != _.storeRemovalDate && A.type === s.b_.POWERUP_ACTIVATED;
}
