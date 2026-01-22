n.d(t, {
    H: () => u,
});
var r = n(64700),
    l = n(574381),
    i = n(311907),
    a = n(858466),
    s = n(725613),
    o = n(661470),
    c = n(652215);

function u(e) {
    let { hasRequestedStartTimes: t, startTime: n } = (0, i.cf)([s.A], () => ({
            hasRequestedStartTimes: s.A.hasRequestedStartTimes(e.guild_id),
            startTime: s.A.getStartTime(e),
        })),
        u = (0, o.a)(e.guild_id, "useStartTime"),
        d = ((0, l.un)() || (0, l.m0)()) && !u,
        f = e.type === c.rbe.GUILD_VOICE;
    return (
        r.useEffect(() => {
            t || !f || d || (0, a.U)(e.guild_id);
        }, [f, e.guild_id, t, d]),
        n
    );
}
