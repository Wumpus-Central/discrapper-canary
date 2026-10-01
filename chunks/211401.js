n.d(t, { R: () => i, k: () => r });
var l = n(73153);
function i(e, t, n, i) {
    l.h.dispatch({ type: "APP_LAUNCHER_SHOW", entrypoint: e, activeViewType: t, initialState: n, activeChannelId: i });
}
function r(e) {
    l.h.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
}
