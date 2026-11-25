var l = a(734057),
    t = a(129230),
    i = a(652215);
a.d(
    e,
    {},
    {
        W: function (n) {
            var e;
            let a;
            t.default.track(i.HAw.WAVE_CTA_CLICKED, {
                channel_id: n.channelId,
                source: n.source,
                dm_has_message_history: ((e = n.channelId), (a = l.A.getChannel(e)), a?.lastMessageId != null),
            });
        },
    },
);
