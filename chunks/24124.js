n.d(t, {
    GG: () => r,
    R2: () => s,
    h7: () => l,
    rh: () => a
});
var i = n(570140);
function l(e, t, n) {
    return new Promise((l) => {
        setTimeout(() => {
            i.Z.dispatch({
                type: 'ACTIVITY_INVITE_MODAL_OPEN',
                activity: e,
                isPrivate: t,
                context: n,
                resolve: l
            });
        }, 0);
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_QUERY',
        query: e
    });
}
function r(e) {
    i.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        channelId: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        userId: e
    });
}
