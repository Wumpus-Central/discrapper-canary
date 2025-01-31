n.d(t, {
    Gd: () => a,
    ME: () => s,
    Ym: () => o,
    _g: () => r,
    hu: () => l
});
var i = n(570140);
function r(e, t, n) {
    i.Z.dispatch({
        type: 'HIGH_FIVE_QUEUE',
        userId: t,
        channelId: n,
        emoji: e
    });
}
function a(e, t) {
    i.Z.dispatch({
        type: 'HIGH_FIVE_REMOVE',
        channelId: t,
        userId: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'HIGH_FIVE_SET_ENABLED',
        enabled: e
    });
}
function o(e, t, n, r) {
    i.Z.dispatch({
        type: 'HIGH_FIVE_COMPLETE',
        waitingUserId: e,
        completingUserId: t,
        channelId: n,
        completingEmoji: r
    });
}
function l(e, t, n) {
    i.Z.dispatch({
        type: 'HIGH_FIVE_COMPLETE_CLEAR',
        firstUserId: e,
        secondUserId: t,
        channelId: n
    });
}
