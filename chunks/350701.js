var c = i(734057),
    d = i(495867),
    e = i(528767),
    o = i(129230),
    a = i(652215);
i.d(
    t,
    {},
    {
        A: function (n, t, i) {
            o.default.track(a.HAw.VOICE_CALL_TRANSFER, {
                source_platform: null != i ? e.A.getSessionById(i)?.clientInfo.os : "discord_client",
                guild_id: c.A.getChannel(n)?.guild_id,
                channel_id: n,
                rtc_connection_id: d.A.getRTCConnectionId(),
                target_platform: t,
            });
        },
    },
);
