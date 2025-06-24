n.d(t, { Z: () => l });
var r = n(570140);
let l = {
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
