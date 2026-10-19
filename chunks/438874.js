n.d(t, { A: () => d });
var l = n(512750),
    i = n(17928),
    s = n(71393),
    r = n(294384),
    o = n(998418),
    a = n(568065),
    u = n(652215);
function d(e, t) {
    let n = (0, o.Ay)(e, t),
        d = (0, i.bG)([s.A], () => s.A.getGuild(e)?.features.has(u.GuildFeatures.GUILD_THEME) === !0, [e]),
        c = t.skuId === l.d0,
        m = n.type !== a.b_.INACTIVE || (c && d),
        p = n.type === a.b_.TIER_OVERRIDE_ACTIVATED,
        x = (0, r.Ay)(e, t, "GuildPowerupCardFooterAdmin"),
        g = a.HO;
    return { showToggleButton: (m || !x) && !p, showConfigureButton: m && g.has(t.skuId), isPowerupActive: m };
}
