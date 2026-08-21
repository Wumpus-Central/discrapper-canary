n.d(t, { A: () => l });
var i = n(228366);
let l = {
    startTyping(e) {
        i.h.dispatch({ type: "TYPING_START_LOCAL", channelId: e });
    },
    stopTyping(e) {
        i.h.dispatch({ type: "TYPING_STOP_LOCAL", channelId: e });
    },
};
