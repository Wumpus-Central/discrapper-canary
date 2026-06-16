"use strict";
n.d(t, { A: () => r });
var i = n(228366);
let r = {
    startTyping(e) {
        i.h.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
    },
    stopTyping(e) {
        i.h.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
    },
};
