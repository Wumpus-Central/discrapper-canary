t.d(e, { H: () => c });
var a = t(64700),
    s = t(17928),
    d = t(919638),
    u = t(52074),
    r = t(725613),
    l = t(652215);
function c(i) {
    let {
            hasRequestedStartTimes: e,
            startTime: t,
            isGuildUnavailable: c,
        } = (0, s.cf)([r.A, d.A], () => ({
            hasRequestedStartTimes: r.A.hasRequestedStartTimes(i.guild_id),
            startTime: r.A.getStartTime(i),
            isGuildUnavailable: d.A.isUnavailable(i.guild_id),
        })),
        p = i.type === l.rbe.GUILD_VOICE;
    return (
        a.useEffect(() => {
            e || !p || c || (0, u.U)(i.guild_id);
        }, [p, i.guild_id, e, c]),
        t
    );
}
