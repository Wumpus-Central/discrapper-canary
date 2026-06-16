n.d(t, { A: () => d });
var l = n(512750),
    i = n(17928),
    r = n(71393),
    a = n(294384),
    s = n(998418),
    o = n(568065),
    u = n(652215);
function d(e, t) {
    let n = (0, s.Ay)(e, t),
        d = (0, i.bG)([r.A], () => r.A.getGuild(e)?.features.has(u.GuildFeatures.GUILD_THEME) === !0, [e]),
        c = t.skuId === l.d0,
        p = n.type !== o.b_.INACTIVE || (c && d),
        E = n.type === o.b_.TIER_OVERRIDE_ACTIVATED,
        A = (0, a.A)(e, t, "GuildPowerupCardFooterAdmin"),
        f = o.HO;
    return { showToggleButton: (p || !A) && !E, showConfigureButton: p && f.has(t.skuId), isPowerupActive: p };
}
