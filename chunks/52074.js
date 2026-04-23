"use strict";
n.d(t, { U: () => r });
var i = n(228366),
    a = n(366853);
function r(e) {
    i.h.dispatch({ type: "FETCH_CHANNEL_INFO", guildId: e }),
        a.A.getSocket().requestChannelInfo(e, ["status", "voice_start_time"]);
}
