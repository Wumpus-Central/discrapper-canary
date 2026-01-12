n.d(t, { P: () => u });
var r = n(473749),
    i = n(818710),
    l = n(442837),
    a = n(309761),
    o = n(168611),
    s = n(662237),
    c = n(981631);
function u(e) {
    let { hasRequestedStartTimes: t, startTime: n } = (0, l.cj)([o.Z], () => ({
            hasRequestedStartTimes: o.Z.hasRequestedStartTimes(e.guild_id),
            startTime: o.Z.getStartTime(e),
        })),
        u = (0, s.S)(e.guild_id, "useStartTime"),
        d = ((0, i.gn)() || (0, i.Dt)()) && !u,
        p = e.type === c.d4z.GUILD_VOICE;
    return (
        r.useEffect(() => {
            t || !p || d || (0, a.i)(e.guild_id);
        }, [p, e.guild_id, t, d]),
        n
    );
}
