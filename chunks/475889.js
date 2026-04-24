"use strict";
n.d(t, { H: () => u });
var a = n(64700),
    r = n(574381),
    i = n(17928),
    l = n(919638),
    s = n(52074),
    o = n(869180),
    c = n(725613),
    d = n(652215);
function u(e) {
    let {
            hasRequestedStartTimes: t,
            startTime: n,
            isGuildUnavailable: u,
        } = (0, i.cf)([c.A, l.A], () => ({
            hasRequestedStartTimes: c.A.hasRequestedStartTimes(e.guild_id),
            startTime: c.A.getStartTime(e),
            isGuildUnavailable: l.A.isUnavailable(e.guild_id),
        })),
        _ = (0, o.a)(e.guild_id, "useStartTime"),
        p = ((0, r.un)() || (0, r.m0)()) && !_,
        m = e.type === d.rbe.GUILD_VOICE;
    return (
        a.useEffect(() => {
            t || !m || p || u || (0, s.U)(e.guild_id);
        }, [m, e.guild_id, t, p, u]),
        n
    );
}
