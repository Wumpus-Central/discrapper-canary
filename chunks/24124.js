n.d(t, {
    GG: () => o,
    R2: () => s,
    h7: () => i,
    rh: () => a
});
var r = n(570140);
function i(e, t, n) {
    return new Promise((i) => {
        setTimeout(() => {
            r.Z.dispatch({
                type: 'ACTIVITY_INVITE_MODAL_OPEN',
                activity: e,
                isPrivate: t,
                context: n,
                resolve: i
            });
        }, 0);
    });
}
function a(e) {
    r.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_QUERY',
        query: e
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        channelId: e
    });
}
function s(e) {
    r.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        userId: e
    });
}
