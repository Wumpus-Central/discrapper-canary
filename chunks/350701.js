"use strict";
n.d(t, { A: () => o });
var i = n(734057),
    r = n(763827),
    a = n(528767),
    s = n(174459),
    l = n(652215);
function o(e, t, n) {
    s.default.track(l.HAw.VOICE_CALL_TRANSFER, {
        source_platform: null != n ? a.A.getSessionById(n)?.clientInfo.os : "discord_client",
        guild_id: i.A.getChannel(e)?.guild_id,
        channel_id: e,
        rtc_connection_id: r.A.getRTCConnectionId(),
        target_platform: t,
    });
}
