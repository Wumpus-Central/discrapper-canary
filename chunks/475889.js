"use strict";
n.d(t, { H: () => d });
var l = n(64700),
    a = n(574381),
    s = n(311907),
    i = n(919638),
    r = n(52074),
    o = n(869180),
    c = n(725613),
    u = n(652215);
function d(e) {
    let {
            hasRequestedStartTimes: t,
            startTime: n,
            isGuildUnavailable: d,
        } = (0, s.cf)([c.A, i.A], () => ({
            hasRequestedStartTimes: c.A.hasRequestedStartTimes(e.guild_id),
            startTime: c.A.getStartTime(e),
            isGuildUnavailable: i.A.isUnavailable(e.guild_id),
        })),
        m = (0, o.a)(e.guild_id, "useStartTime"),
        g = ((0, a.un)() || (0, a.m0)()) && !m,
        h = e.type === u.rbe.GUILD_VOICE;
    return (
        l.useEffect(() => {
            t || !h || g || d || (0, r.U)(e.guild_id);
        }, [h, e.guild_id, t, g, d]),
        n
    );
}
