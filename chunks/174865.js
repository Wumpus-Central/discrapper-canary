var t = i(260498);
i.d(
    n,
    {},
    {
        A: function (l, n) {
            return {
                projectId: l.id,
                projectName: l.name,
                guildId: n,
                projectGuildId: l.guild_id,
                isOwner: (0, t.PV)(l),
                canRemix: (0, t.H_)(l),
            };
        },
    },
);
