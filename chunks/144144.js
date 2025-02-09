n.d(t, { Z: () => o });
var a = n(570140);
let o = {
    startTyping(e) {
        a.Z.dispatch({
            type: 'TYPING_START_LOCAL',
            channelId: e
        });
    },
    stopTyping(e) {
        a.Z.dispatch({
            type: 'TYPING_STOP_LOCAL',
            channelId: e
        });
    }
};
