n.d(t, {
    GG: function () {
        return i;
    },
    R2: function () {
        return o;
    },
    h7: function () {
        return r;
    },
    rh: function () {
        return s;
    }
});
var l = n(570140);
function r(e, t, n) {
    return new Promise((r) => {
        setTimeout(() => {
            l.Z.dispatch({
                type: 'ACTIVITY_INVITE_MODAL_OPEN',
                activity: e,
                isPrivate: t,
                context: n,
                resolve: r
            });
        }, 0);
    });
}
function s(e) {
    l.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_QUERY',
        query: e
    });
}
function i(e) {
    l.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        channelId: e
    });
}
function o(e) {
    l.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        userId: e
    });
}
