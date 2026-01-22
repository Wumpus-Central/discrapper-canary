n.d(t, { A: () => a });
var r = n(294384),
    l = n(998418),
    i = n(568065);
function a(e, t) {
    let n = (0, l.Ay)(e, t),
        a = n.type !== i.b_.INACTIVE,
        s = n.type === i.b_.TIER_OVERRIDE_ACTIVATED,
        o = (0, r.A)(e, t, "GuildPowerupCardFooterAdmin"),
        c = i.HO;
    return {
        showToggleButton: (a || !o) && !s,
        showConfigureButton: a && c.has(t.skuId),
        isPowerupActive: a,
    };
}
