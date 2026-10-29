l.d(t, { A: () => u });
var i = l(512750),
    n = l(17928),
    s = l(71393),
    r = l(294384),
    o = l(998418),
    a = l(568065),
    d = l(652215);
function u(e, t) {
    let l = (0, o.Ay)(e, t),
        u = (0, n.bG)([s.A], () => s.A.getGuild(e)?.features.has(d.GuildFeatures.GUILD_THEME) === !0, [e]),
        c = t.skuId === i.d0,
        m = l.type !== a.b_.INACTIVE || (c && u),
        p = l.type === a.b_.TIER_OVERRIDE_ACTIVATED,
        x = (0, r.Ay)(e, t, "GuildPowerupCardFooterAdmin"),
        g = a.HO;
    return { showToggleButton: (m || !x) && !p, showConfigureButton: m && g.has(t.skuId), isPowerupActive: m };
}
