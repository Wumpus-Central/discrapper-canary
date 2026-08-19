"use strict";
n.d(t, { R: () => i, k: () => s });
var l = n(228366);
function i(e, t, n, i) {
    l.h.dispatch({ type: "APP_LAUNCHER_SHOW", entrypoint: e, activeViewType: t, initialState: n, activeChannelId: i });
}
function s(e) {
    l.h.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
}
