"use strict";
n.d(t, { W: () => a });
var i = n(232835),
    r = n(174459),
    s = n(652215);
function a(e) {
    var t;
    r.default.track(s.HAw.WAVE_CTA_CLICKED, {
        channel_id: e.channelId,
        source: e.source,
        dm_has_message_history: ((t = e.channelId), i.A.getMessages(t).length > 0),
    });
}
