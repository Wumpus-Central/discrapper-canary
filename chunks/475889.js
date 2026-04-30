t.d(e, { H: () => p });
var a = t(64700),
    d = t(574381),
    s = t(17928),
    u = t(919638),
    r = t(52074),
    l = t(869180),
    c = t(725613),
    n = t(652215);
function p(i) {
    let {
            hasRequestedStartTimes: e,
            startTime: t,
            isGuildUnavailable: p,
        } = (0, s.cf)([c.A, u.A], () => ({
            hasRequestedStartTimes: c.A.hasRequestedStartTimes(i.guild_id),
            startTime: c.A.getStartTime(i),
            isGuildUnavailable: u.A.isUnavailable(i.guild_id),
        })),
        _ = (0, l.a)(i.guild_id, "useStartTime"),
        h = ((0, d.un)() || (0, d.m0)()) && !_,
        g = i.type === n.rbe.GUILD_VOICE;
    return (
        a.useEffect(() => {
            e || !g || h || p || (0, r.U)(i.guild_id);
        }, [g, i.guild_id, e, h, p]),
        t
    );
}
