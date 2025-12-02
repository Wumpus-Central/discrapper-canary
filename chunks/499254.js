n.d(t, {
    _: () => i,
    y: () => a,
});
var r = n(570140);
function i(e, t, n, i) {
    r.Z.dispatch({
        type: "APP_LAUNCHER_SHOW",
        entrypoint: e,
        activeViewType: t,
        initialState: n,
        activeChannelId: i,
    });
}
function a(e) {
    r.Z.dispatch({
        type: "APP_LAUNCHER_DISMISS",
        closeReason: e,
    });
}
