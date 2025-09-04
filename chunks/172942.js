n.d(t, { P: () => s });
var r = n(442837),
    i = n(309761),
    l = n(973285),
    o = n(168611),
    a = n(981631);
function s(e) {
    let { hasRequestedStartTimes: t, startTime: n } = (0, r.cj)([o.Z], () => ({
            hasRequestedStartTimes: o.Z.hasRequestedStartTimes(e.guild_id),
            startTime: o.Z.getStartTime(e),
        })),
        { enabled: s } = l.W.useExperiment({
            guildId: e.guild_id,
            location: "useStartTime",
        });
    if (!s) return;
    let c = e.type === a.d4z.GUILD_VOICE;
    return !t && c && (0, i.i)(e.guild_id), n;
}
