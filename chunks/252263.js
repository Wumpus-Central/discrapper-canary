"use strict";
n.d(t, { B: () => i });
var r = n(73153);
function i(e) {
    let { channelId: t, enabled: n } = e;
    r.h.dispatch({ type: "SET_THREADS_ALSO_SEND_TO_CHANNEL", channelId: t, enabled: n });
}
