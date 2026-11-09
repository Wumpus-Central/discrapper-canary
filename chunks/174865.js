var r = n(260498);
n.d(
    e,
    {},
    {
        A: function (t, e) {
            return {
                projectId: t.id,
                projectName: t.name,
                guildId: e,
                projectGuildId: t.guild_id,
                isOwner: (0, r.PV)(t),
                canRemix: (0, r.H_)(t),
            };
        },
    },
);
