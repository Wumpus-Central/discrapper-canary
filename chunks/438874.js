l.d(t, { A: () => u });
var n = l(512750),
    i = l(17928),
    s = l(71393),
    r = l(294384),
    o = l(998418),
    a = l(568065),
    d = l(652215);
function u(e, t) {
    let l = (0, o.Ay)(e, t),
        u = (0, i.bG)([s.A], () => s.A.getGuild(e)?.features.has(d.GuildFeatures.GUILD_THEME) === !0, [e]),
        c = t.skuId === n.d0,
        m = l.type !== a.b_.INACTIVE || (c && u),
        p = l.type === a.b_.TIER_OVERRIDE_ACTIVATED,
        g = (0, r.Ay)(e, t, "GuildPowerupCardFooterAdmin"),
        f = a.HO;
    return { showToggleButton: (m || !g) && !p, showConfigureButton: m && f.has(t.skuId), isPowerupActive: m };
}
