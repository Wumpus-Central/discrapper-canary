"use strict";
n.d(t, { A: () => l });
var r = n(734057),
    i = n(383501),
    a = n(528767),
    s = n(954571),
    o = n(652215);
function l(e, t, n) {
    s.default.track(o.HAw.VOICE_CALL_TRANSFER, {
        source_platform: null != n ? a.A.getSessionById(n)?.clientInfo.os : "discord_client",
        guild_id: r.A.getChannel(e)?.guild_id,
        channel_id: e,
        rtc_connection_id: i.A.getRTCConnectionId(),
        target_platform: t,
    });
}
