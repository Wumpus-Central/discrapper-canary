n.d(t, { A: () => l });
var r = n(734057),
    i = n(383501),
    a = n(528767),
    s = n(954571),
    o = n(652215);
function l(e, t, n) {
    var l, c;
    s.default.track(o.HAw.VOICE_CALL_TRANSFER, {
        source_platform:
            null != n ? (null == (l = a.A.getSessionById(n)) ? void 0 : l.clientInfo.os) : "discord_client",
        guild_id: null == (c = r.A.getChannel(e)) ? void 0 : c.guild_id,
        channel_id: e,
        rtc_connection_id: i.A.getRTCConnectionId(),
        target_platform: t,
    });
}
