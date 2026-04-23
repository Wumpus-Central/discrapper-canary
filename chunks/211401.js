"use strict";
n.d(t, { R: () => i, k: () => s });
var r = n(73153);
function i(e, t, n, i) {
    r.h.dispatch({ type: "APP_LAUNCHER_SHOW", entrypoint: e, activeViewType: t, initialState: n, activeChannelId: i });
}
function s(e) {
    r.h.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
}
