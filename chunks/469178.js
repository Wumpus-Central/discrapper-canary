"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    s = n(311907),
    l = n(820512),
    a = n(591346),
    r = n(769022);
function o(e) {
    let { channel: t } = e,
        { enableHistoryHover: n } = (0, a.G8)({ guildId: t.guild_id, location: "VoiceChannelHistoryTracking" }),
        o = (0, s.bG)([r.A], () => r.A.getHistoryExists(t.id));
    return (
        i.useEffect(() => {
            n && !o && ((0, l.H)(t.id), (0, l.q)(t.id));
        }, [t.id, n, o]),
        null
    );
}
