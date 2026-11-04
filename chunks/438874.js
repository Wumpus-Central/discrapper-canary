var n = l(512750),
    i = l(855986),
    s = l(71393),
    r = l(294384),
    o = l(998418),
    a = l(568065),
    d = l(652215);
l.d(
    t,
    {},
    {
        A: function (e, t) {
            let l = (0, o.Ay)(e, t),
                u = (0, i.bG)([s.A], () => s.A.getGuild(e)?.features.has(d.GuildFeatures.GUILD_THEME) === !0, [e]),
                c = t.skuId === n.d0,
                m = l.type !== a.b_.INACTIVE || (c && u),
                p = l.type === a.b_.TIER_OVERRIDE_ACTIVATED,
                g = (0, r.Ay)(e, t, "GuildPowerupCardFooterAdmin"),
                f = a.HO,
                h = m && f.has(t.skuId);
            return { showToggleButton: (m || !g) && !p, showConfigureButton: h, isPowerupActive: m };
        },
    },
);
