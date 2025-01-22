r.d(n, {
    Gd: function () {
        return o;
    },
    ME: function () {
        return s;
    },
    Ym: function () {
        return l;
    },
    _g: function () {
        return a;
    },
    hu: function () {
        return u;
    }
});
var i = r(570140);
function a(e, n, r) {
    i.Z.dispatch({
        type: 'HIGH_FIVE_QUEUE',
        userId: n,
        channelId: r,
        emoji: e
    });
}
function o(e, n) {
    i.Z.dispatch({
        type: 'HIGH_FIVE_REMOVE',
        channelId: n,
        userId: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'HIGH_FIVE_SET_ENABLED',
        enabled: e
    });
}
function l(e, n, r, a) {
    i.Z.dispatch({
        type: 'HIGH_FIVE_COMPLETE',
        waitingUserId: e,
        completingUserId: n,
        channelId: r,
        completingEmoji: a
    });
}
function u(e, n, r) {
    i.Z.dispatch({
        type: 'HIGH_FIVE_COMPLETE_CLEAR',
        firstUserId: e,
        secondUserId: n,
        channelId: r
    });
}
