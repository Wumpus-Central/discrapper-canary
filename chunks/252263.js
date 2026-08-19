"use strict";
n.d(t, { B: () => i });
var l = n(228366);
function i(e) {
    let { channelId: t, enabled: n } = e;
    l.h.dispatch({ type: "SET_THREADS_ALSO_SEND_TO_CHANNEL", channelId: t, enabled: n });
}
