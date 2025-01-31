n.d(t, { Z: () => r });
var i = n(570140);
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
