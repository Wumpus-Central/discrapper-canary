s.d(e, { W: () => h });
var n = s(734057),
    c = s(174459),
    d = s(652215);
function h(a) {
    var e;
    let s;
    c.default.track(d.HAw.WAVE_CTA_CLICKED, {
        channel_id: a.channelId,
        source: a.source,
        dm_has_message_history: ((e = a.channelId), (s = n.A.getChannel(e)), s?.lastMessageId != null),
    });
}
