t.d(n, { Z: () => l });
var i = t(570140);
let l = {
    startTyping(e) {
        i.Z.dispatch({
            type: 'TYPING_START_LOCAL',
            channelId: e
        });
    },
    stopTyping(e) {
        i.Z.dispatch({
            type: 'TYPING_STOP_LOCAL',
            channelId: e
        });
    }
};
