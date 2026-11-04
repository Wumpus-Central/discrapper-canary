var i = n(855986),
    l = n(71393),
    s = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.bG)([l.A], () => {
                let t = l.A.getGuild(e);
                return null != t && t.features.has(s.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
            });
        },
        o: function (e) {
            let t = l.A.getGuild(e);
            return null != t && t.features.has(s.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
        },
    },
);
