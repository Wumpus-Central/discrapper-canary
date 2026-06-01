"use strict";
n.d(t, { U: () => a });
var i = n(228366),
    r = n(587626),
    s = n(309698);
function a(e) {
    s.A.hasRequestedStatuses(e) ||
        (i.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: e }),
        r.A.getSocket().requestChannelInfo(e, ["status", "voice_start_time"]));
}
