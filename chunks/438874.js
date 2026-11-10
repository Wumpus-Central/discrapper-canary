var l = n(512750),
    s = n(855986),
    i = n(71393),
    r = n(294384),
    o = n(998418),
    a = n(568065),
    d = n(652215);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, o.Ay)(e, t),
                u = (0, s.bG)([i.A], () => i.A.getGuild(e)?.features.has(d.GuildFeatures.GUILD_THEME) === !0, [e]),
                c = t.skuId === l.d0,
                m = n.type !== a.b_.INACTIVE || (c && u),
                p = n.type === a.b_.TIER_OVERRIDE_ACTIVATED,
                g = (0, r.Ay)(e, t, "GuildPowerupCardFooterAdmin"),
                f = a.HO,
                h = m && f.has(t.skuId);
            return { showToggleButton: (m || !g) && !p, showConfigureButton: h, isPowerupActive: m };
        },
    },
);
