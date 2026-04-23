"use strict";
n.d(t, { U: () => r });
var a = n(73153),
    i = n(142120);
function r(e) {
    a.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: e }),
        i.A.getSocket().requestChannelInfo(e, ["status", "voice_start_time"]);
}
