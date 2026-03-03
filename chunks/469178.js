"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    s = n(977997),
    l = n(591939),
    a = n(376947),
    r = n(573143);
function o(e) {
    let { channel: t } = e,
        n = s.A.getVoiceStatesForChannel(t.id),
        o = null != n && Object.keys(n).length > 0,
        { enableHistoryHover: c } = (0, a.NH)({ guildId: t.guild_id, location: "VoiceChannelHistoryTracking" });
    return (
        i.useEffect(() => {
            c && o && !(0, r.o)(t.id) && (0, l.H)(t.id);
        }, [t.id, c, o]),
        null
    );
}
