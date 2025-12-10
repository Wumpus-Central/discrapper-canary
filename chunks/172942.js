n.d(t, { P: () => a });
var r = n(442837),
    i = n(309761),
    l = n(168611),
    o = n(981631);
function a(e) {
    let { hasRequestedStartTimes: t, startTime: n } = (0, r.cj)([l.Z], () => ({
            hasRequestedStartTimes: l.Z.hasRequestedStartTimes(e.guild_id),
            startTime: l.Z.getStartTime(e),
        })),
        a = e.type === o.d4z.GUILD_VOICE;
    return !t && a && (0, i.i)(e.guild_id), n;
}
