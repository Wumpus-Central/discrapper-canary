l.d(t, { A: () => d });
var n = l(512750),
    i = l(17928),
    r = l(71393),
    s = l(294384),
    o = l(998418),
    a = l(568065),
    u = l(652215);
function d(e, t) {
    let l = (0, o.Ay)(e, t),
        d = (0, i.bG)([r.A], () => r.A.getGuild(e)?.features.has(u.GuildFeatures.GUILD_THEME) === !0, [e]),
        c = t.skuId === n.d0,
        m = l.type !== a.b_.INACTIVE || (c && d),
        p = l.type === a.b_.TIER_OVERRIDE_ACTIVATED,
        g = (0, s.A)(e, t, "GuildPowerupCardFooterAdmin"),
        x = a.HO;
    return { showToggleButton: (m || !g) && !p, showConfigureButton: m && x.has(t.skuId), isPowerupActive: m };
}
