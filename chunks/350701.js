i.d(t, { A: () => s });
var c = i(734057),
    d = i(763827),
    e = i(528767),
    o = i(174459),
    a = i(652215);
function s(n, t, i) {
    o.default.track(a.HAw.VOICE_CALL_TRANSFER, {
        source_platform: null != i ? e.A.getSessionById(i)?.clientInfo.os : "discord_client",
        guild_id: c.A.getChannel(n)?.guild_id,
        channel_id: n,
        rtc_connection_id: d.A.getRTCConnectionId(),
        target_platform: t,
    });
}
