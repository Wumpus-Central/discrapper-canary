l.d(s, { M: () => a, e: () => i });
var t = l(228366);
function i(e, s) {
    t.h.dispatch({ type: "GAME_UPSELL_DISMISS_CLEAR", applicationId: e, dismissibleContent: s });
}
function a(e, s) {
    t.h.dispatch({ type: "GAME_UPSELL_DISMISS", applicationIds: e, dismissedAt: Date.now(), dismissibleContent: s });
}
