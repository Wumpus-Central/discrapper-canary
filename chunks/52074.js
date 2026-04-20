"use strict";
n.d(t, { U: () => s });
var r = n(73153),
    i = n(142120);
function s(e) {
    r.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: e }),
        i.A.getSocket().requestChannelInfo(e, ["status", "voice_start_time"]);
}
