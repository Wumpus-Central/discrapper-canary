n.d(t, { A: () => c });
var i = n(64700),
    l = n(311907),
    s = n(725613),
    a = n(820512),
    r = n(591346),
    o = n(769022);
function c(e) {
    let { channel: t } = e,
        { enableHistoryHover: n } = (0, r.G8)({ guildId: t.guild_id, location: "VoiceChannelHistoryTracking" }),
        c = (0, l.bG)([o.A], () => o.A.getHistoryExists(t.id)),
        d = (0, l.bG)([s.A], () => s.A.getStartTime(t));
    return (
        i.useEffect(() => {
            !n || null == d || c || ((0, a.H)(t.id), (0, a.q)(t.id));
        }, [t.id, n, c, d]),
        null
    );
}
