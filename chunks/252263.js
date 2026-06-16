"use strict";
n.d(t, { B: () => r });
var i = n(228366);
function r(e) {
    let { channelId: t, enabled: n } = e;
    i.h.dispatch({ type: "SET_THREADS_ALSO_SEND_TO_CHANNEL", channelId: t, enabled: n });
}
