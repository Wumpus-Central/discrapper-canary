"use strict";
n.d(t, { H: () => d });
var l = n(64700),
    i = n(574381),
    s = n(311907),
    a = n(919638),
    r = n(858466),
    o = n(869180),
    u = n(725613),
    c = n(652215);
function d(e) {
    let {
            hasRequestedStartTimes: t,
            startTime: n,
            isGuildUnavailable: d,
        } = (0, s.cf)([u.A, a.A], () => ({
            hasRequestedStartTimes: u.A.hasRequestedStartTimes(e.guild_id),
            startTime: u.A.getStartTime(e),
            isGuildUnavailable: a.A.isUnavailable(e.guild_id),
        })),
        m = (0, o.a)(e.guild_id, "useStartTime"),
        g = ((0, i.un)() || (0, i.m0)()) && !m,
        h = e.type === c.rbe.GUILD_VOICE;
    return (
        l.useEffect(() => {
            t || !h || g || d || (0, r.U)(e.guild_id);
        }, [h, e.guild_id, t, g, d]),
        n
    );
}
