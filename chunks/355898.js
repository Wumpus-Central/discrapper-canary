"use strict";
n.d(t, { M: () => a, e: () => r });
var i = n(228366);
function r(e, t) {
    i.h.dispatch({ type: "GAME_UPSELL_DISMISS_CLEAR", applicationId: e, dismissibleContent: t });
}
function a(e, t) {
    i.h.dispatch({ type: "GAME_UPSELL_DISMISS", applicationIds: e, dismissedAt: Date.now(), dismissibleContent: t });
}
