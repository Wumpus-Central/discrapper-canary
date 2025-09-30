n.d(t, { K: () => s });
var r = n(442837),
    i = n(208126),
    a = n(887614),
    o = n(981631);
let s = (0, r.Kb)([a.Z], {
    queryId: (e) => o.McO.ACTIVITIES_DISCORD_CONFIG(e.definition.name),
    get: (e) => a.Z.getOne(e.definition.name),
    load: async (e, t) => {
        let { enabled: n } = t.getConfig({ location: "useActivitiesDiscordConfig" });
        n && (await (0, i.t)(t.definition.name));
    },
    useStateHook: r.e7,
});
