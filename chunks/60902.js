n.d(t, { K: () => s });
var r = n(442837),
    i = n(208126),
    a = n(887614),
    o = n(981631);
let s = (0, r.Kb)([a.Z], {
    getQueryId: (e) =>
        e.getConfig({ location: "useActivitiesDiscordConfig" }).enabled
            ? o.McO.ACTIVITIES_DISCORD_CONFIG(e.definition.name)
            : null,
    get: (e) => a.Z.getOne(e.definition.name),
    load: async (e) => {
        let { enabled: t } = e.getConfig({ location: "useActivitiesDiscordConfig" });
        t && (await (0, i.t)(e.definition.name));
    },
});
