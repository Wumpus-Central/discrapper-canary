var s = t(582128),
    a = t(855986),
    d = t(225123),
    u = t(919638),
    r = t(52074),
    l = t(725613),
    c = t(652215);
t.d(
    i,
    {},
    {
        H: function (e) {
            let {
                    hasRequestedStartTimes: i,
                    startTime: t,
                    isGuildUnavailable: n,
                } = (0, a.cf)([l.A, u.A], () => ({
                    hasRequestedStartTimes: l.A.hasRequestedStartTimes(e.guild_id),
                    startTime: l.A.getStartTime(e),
                    isGuildUnavailable: u.A.isUnavailable(e.guild_id),
                })),
                p = (0, a.bG)([d.A], () => d.A.isConnected()),
                h = e.type === c.rbe.GUILD_VOICE;
            return (
                s.useEffect(() => {
                    !i && h && !n && p && (0, r.U)(e.guild_id);
                }, [h, e.guild_id, i, n, p]),
                t
            );
        },
    },
);
