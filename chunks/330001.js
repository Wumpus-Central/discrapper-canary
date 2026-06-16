"use strict";
n.d(t, { W: () => a });
var i = n(734057),
    r = n(174459),
    s = n(652215);
function a(e) {
    var t;
    let n;
    r.default.track(s.HAw.WAVE_CTA_CLICKED, {
        channel_id: e.channelId,
        source: e.source,
        dm_has_message_history: ((t = e.channelId), (n = i.A.getChannel(t)), n?.lastMessageId != null),
    });
}
