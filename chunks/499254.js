n.d(t, {
    Hm: () => o,
    Tv: () => s,
    __: () => r,
    yT: () => a
});
var i = n(570140);
function r(e, t, n) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_SHOW',
        entrypoint: e,
        activeViewType: t,
        initialState: n
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_DISMISS',
        closeReason: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD',
        channelId: e
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD',
        channelId: e
    });
}
