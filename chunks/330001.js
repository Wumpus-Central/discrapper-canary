a.d(e, { W: () => d });
var c = a(232835),
    h = a(174459),
    n = a(652215);
function d(s) {
    var e;
    h.default.track(n.HAw.WAVE_CTA_CLICKED, {
        channel_id: s.channelId,
        source: s.source,
        dm_has_message_history: ((e = s.channelId), c.A.getMessages(e).length > 0),
    });
}
