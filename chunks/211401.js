"use strict";
n.d(t, { R: () => r, k: () => s });
var i = n(228366);
function r(e, t, n, r) {
    i.h.dispatch({ type: "APP_LAUNCHER_SHOW", entrypoint: e, activeViewType: t, initialState: n, activeChannelId: r });
}
function s(e) {
    i.h.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
}
