e.d(t, { A: () => A });
var r = e(512750),
    n = e(17928),
    s = e(71393),
    d = e(294384),
    o = e(998418),
    a = e(568065),
    i = e(652215);
function A(u, t) {
    let e = (0, o.Ay)(u, t),
        A = (0, n.bG)([s.A], () => s.A.getGuild(u)?.features.has(i.GuildFeatures.GUILD_THEME) === !0, [u]),
        c = t.skuId === r.d0,
        p = e.type !== a.b_.INACTIVE || (c && A),
        I = e.type === a.b_.TIER_OVERRIDE_ACTIVATED,
        h = (0, d.A)(u, t, "GuildPowerupCardFooterAdmin"),
        k = a.HO;
    return { showToggleButton: (p || !h) && !I, showConfigureButton: p && k.has(t.skuId), isPowerupActive: p };
}
