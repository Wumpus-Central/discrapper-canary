e.d(t, { A: () => A });
var r = e(512750),
    d = e(17928),
    n = e(71393),
    s = e(294384),
    a = e(998418),
    o = e(568065),
    i = e(652215);
function A(u, t) {
    let e = (0, a.Ay)(u, t),
        A = (0, d.bG)([n.A], () => n.A.getGuild(u)?.features.has(i.GuildFeatures.GUILD_THEME) === !0, [u]),
        c = t.skuId === r.d0,
        p = e.type !== o.b_.INACTIVE || (c && A),
        I = e.type === o.b_.TIER_OVERRIDE_ACTIVATED,
        h = (0, s.Ay)(u, t, "GuildPowerupCardFooterAdmin"),
        k = o.HO;
    return { showToggleButton: (p || !h) && !I, showConfigureButton: p && k.has(t.skuId), isPowerupActive: p };
}
