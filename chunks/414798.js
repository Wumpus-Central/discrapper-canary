"use strict";
n.d(t, { A: () => i });
var l = n(228366);
let i = {
    startTyping(e) {
        l.h.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
    },
    stopTyping(e) {
        l.h.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
    },
};
