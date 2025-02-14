t.d(n, { Z: () => r });
var i = t(570140);
let r = {
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
