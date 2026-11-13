var l = n(260498);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            return {
                projectId: e.id,
                projectName: e.name,
                guildId: t,
                projectGuildId: e.guild_id,
                isOwner: (0, l.PV)(e),
                canRemix: (0, l.H_)(e),
            };
        },
    },
);
