l.d(t, { A: () => d });
var n = l(512750),
    i = l(17928),
    s = l(71393),
    r = l(294384),
    o = l(998418),
    a = l(568065),
    u = l(652215);
function d(e, t) {
    let l = (0, o.Ay)(e, t),
        d = (0, i.bG)([s.A], () => s.A.getGuild(e)?.features.has(u.GuildFeatures.GUILD_THEME) === !0, [e]),
        c = t.skuId === n.d0,
        m = l.type !== a.b_.INACTIVE || (c && d),
        p = l.type === a.b_.TIER_OVERRIDE_ACTIVATED,
        x = (0, r.Ay)(e, t, "GuildPowerupCardFooterAdmin"),
        g = a.HO;
    return { showToggleButton: (m || !x) && !p, showConfigureButton: m && g.has(t.skuId), isPowerupActive: m };
}
