var i = n(5180),
    r = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            return !(
                __OVERLAY__ ||
                null == e ||
                e.id === r.ME ||
                (0, i.ai)(e.id) ||
                !e.features.has(r.GuildFeatures.COMMUNITY) ||
                !e.features.has(r.GuildFeatures.GUILD_SERVER_GUIDE) ||
                !e.features.has(r.GuildFeatures.GUILD_ONBOARDING)
            );
        },
    },
);
