"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    s = n(820512),
    l = n(591346);
function a(e) {
    let { channel: t } = e,
        { enableHistoryHover: n } = (0, l.G8)({ guildId: t.guild_id, location: "VoiceChannelHistoryTracking" });
    return (
        i.useEffect(() => {
            n && (0, s.H)(t.id);
        }, [t.id, n]),
        null
    );
}
