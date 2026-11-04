var i = n(855986),
    r = n(71393),
    a = n(652215);
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            return (0, i.bG)([r.A], () => {
                let t = r.A.getGuild(e);
                return null != t && t.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS);
            });
        },
        aF: function (e, t) {
            let n = r.A.getGuild(e);
            return null != n && n.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS);
        },
        jV: function (e, t) {
            return (0, i.bG)([r.A], () => {
                let t = r.A.getGuild(e);
                return null != t && t.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS);
            });
        },
    },
);
