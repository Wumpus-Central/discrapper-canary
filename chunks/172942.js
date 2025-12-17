n.d(t, { P: () => o });
var r = n(442837),
    i = n(309761),
    l = n(168611),
    a = n(981631);
function o(e) {
    let { hasRequestedStartTimes: t, startTime: n } = (0, r.cj)([l.Z], () => ({
            hasRequestedStartTimes: l.Z.hasRequestedStartTimes(e.guild_id),
            startTime: l.Z.getStartTime(e),
        })),
        o = e.type === a.d4z.GUILD_VOICE;
    return !t && o && (0, i.i)(e.guild_id), n;
}
