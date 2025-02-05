n.d(t, {
    GG: () => a,
    R2: () => s,
    h7: () => i,
    rh: () => r
});
var l = n(570140);
function i(e, t, n) {
    return new Promise((i) => {
        setTimeout(() => {
            l.Z.dispatch({
                type: 'ACTIVITY_INVITE_MODAL_OPEN',
                activity: e,
                isPrivate: t,
                context: n,
                resolve: i
            });
        }, 0);
    });
}
function r(e) {
    l.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_QUERY',
        query: e
    });
}
function a(e) {
    l.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        channelId: e
    });
}
function s(e) {
    l.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        userId: e
    });
}
