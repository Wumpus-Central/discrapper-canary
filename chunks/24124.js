n.d(t, {
    GG: () => a,
    R2: () => o,
    h7: () => i,
    rh: () => l,
});
var r = n(570140);
function i(e, t, n) {
    return new Promise((i) => {
        setTimeout(() => {
            r.Z.dispatch({
                type: "ACTIVITY_INVITE_MODAL_OPEN",
                activity: e,
                isPrivate: t,
                context: n,
                resolve: i,
            });
        }, 0);
    });
}
function l(e) {
    r.Z.dispatch({
        type: "ACTIVITY_INVITE_MODAL_QUERY",
        query: e,
    });
}
function a(e) {
    r.Z.dispatch({
        type: "ACTIVITY_INVITE_MODAL_SEND",
        channelId: e,
    });
}
function o(e) {
    r.Z.dispatch({
        type: "ACTIVITY_INVITE_MODAL_SEND",
        userId: e,
    });
}
