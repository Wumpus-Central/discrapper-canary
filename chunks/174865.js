n.d(t, { A: () => l });
var r = n(260498);
function l(e, t) {
    return {
        projectId: e.id,
        projectName: e.name,
        guildId: t,
        projectGuildId: e.guild_id,
        isOwner: (0, r.PV)(e),
        canRemix: (0, r.H_)(e),
    };
}
