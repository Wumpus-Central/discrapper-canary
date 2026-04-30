n.d(t, { A: () => i });
var r = n(228366);
let i = {
    startTyping(e) {
        r.h.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
    },
    stopTyping(e) {
        r.h.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
    },
};
