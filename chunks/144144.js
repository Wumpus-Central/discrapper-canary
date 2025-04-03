t.d(n, { Z: () => i });
var r = t(570140);
let i = {
    startTyping(e) {
        r.Z.dispatch({
            type: 'TYPING_START_LOCAL',
            channelId: e
        });
    },
    stopTyping(e) {
        r.Z.dispatch({
            type: 'TYPING_STOP_LOCAL',
            channelId: e
        });
    }
};
