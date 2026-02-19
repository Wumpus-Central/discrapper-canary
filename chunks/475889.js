"use strict";
n.d(t, { H: () => d });
var i = n(64700),
    s = n(574381),
    l = n(311907),
    r = n(858466),
    a = n(725613),
    o = n(661470),
    c = n(652215);
function d(e) {
    let { hasRequestedStartTimes: t, startTime: n } = (0, l.cf)([a.A], () => ({
            hasRequestedStartTimes: a.A.hasRequestedStartTimes(e.guild_id),
            startTime: a.A.getStartTime(e),
        })),
        d = (0, o.a)(e.guild_id, "useStartTime"),
        u = ((0, s.un)() || (0, s.m0)()) && !d,
        h = e.type === c.rbe.GUILD_VOICE;
    return (
        i.useEffect(() => {
            t || !h || u || (0, r.U)(e.guild_id);
        }, [h, e.guild_id, t, u]),
        n
    );
}
