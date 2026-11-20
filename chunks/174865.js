var t = i(260498);
i.d(
    l,
    {},
    {
        A: function (n, l) {
            return {
                projectId: n.id,
                projectName: n.name,
                guildId: l,
                projectGuildId: n.guild_id,
                isOwner: (0, t.PV)(n),
                canRemix: (0, t.H_)(n),
            };
        },
    },
);
