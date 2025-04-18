n.d(t, {
    Hm: () => s,
    Tv: () => o,
    __: () => i,
    yT: () => a
});
var r = n(570140);
function i(e, t, n) {
    r.Z.dispatch({
        type: 'APP_LAUNCHER_SHOW',
        entrypoint: e,
        activeViewType: t,
        initialState: n
    });
}
function a(e) {
    r.Z.dispatch({
        type: 'APP_LAUNCHER_DISMISS',
        closeReason: e
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD',
        channelId: e
    });
}
function s(e) {
    r.Z.dispatch({
        type: 'APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD',
        channelId: e
    });
}
