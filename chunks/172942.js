n.d(t, { P: () => s });
var r = n(473749),
    i = n(442837),
    l = n(309761),
    a = n(168611),
    o = n(981631);
function s(e) {
    let { hasRequestedStartTimes: t, startTime: n } = (0, i.cj)([a.Z], () => ({
            hasRequestedStartTimes: a.Z.hasRequestedStartTimes(e.guild_id),
            startTime: a.Z.getStartTime(e),
        })),
        s = e.type === o.d4z.GUILD_VOICE;
    return (
        r.useEffect(() => {
            !t && s && (0, l.i)(e.guild_id);
        }, [s, e.guild_id, t]),
        n
    );
}
