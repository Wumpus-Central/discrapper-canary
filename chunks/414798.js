s.d(t, { A: () => i });
var h = s(73153);
let i = {
    startTyping(p) {
        h.h.dispatch({ type: "TYPING_START_LOCAL", channelId: p });
    },
    stopTyping(p) {
        h.h.dispatch({ type: "TYPING_STOP_LOCAL", channelId: p });
    },
};
