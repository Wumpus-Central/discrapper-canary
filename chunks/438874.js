n.d(t, { A: () => a });
var i = n(294384),
    l = n(998418),
    s = n(568065);
function a(e, t) {
    let n = (0, l.Ay)(e, t),
        a = n.type !== s.b_.INACTIVE,
        r = n.type === s.b_.TIER_OVERRIDE_ACTIVATED,
        o = (0, i.A)(e, t, "GuildPowerupCardFooterAdmin"),
        d = s.HO;
    return { showToggleButton: (a || !o) && !r, showConfigureButton: a && d.has(t.skuId), isPowerupActive: a };
}
