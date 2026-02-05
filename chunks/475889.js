n.d(t, { H: () => c });
var i = n(64700),
    l = n(574381),
    s = n(311907),
    a = n(858466),
    r = n(725613),
    o = n(661470),
    d = n(652215);
function c(e) {
    let { hasRequestedStartTimes: t, startTime: n } = (0, s.cf)([r.A], () => ({
            hasRequestedStartTimes: r.A.hasRequestedStartTimes(e.guild_id),
            startTime: r.A.getStartTime(e),
        })),
        c = (0, o.a)(e.guild_id, "useStartTime"),
        u = ((0, l.un)() || (0, l.m0)()) && !c,
        h = e.type === d.rbe.GUILD_VOICE;
    return (
        i.useEffect(() => {
            t || !h || u || (0, a.U)(e.guild_id);
        }, [h, e.guild_id, t, u]),
        n
    );
}
