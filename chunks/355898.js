t.d(s, { M: () => n, e: () => l });
var i = t(228366);
function l(e, s) {
    i.h.dispatch({ type: "GAME_UPSELL_DISMISS_CLEAR", applicationId: e, dismissibleContent: s });
}
function n(e, s) {
    i.h.dispatch({ type: "GAME_UPSELL_DISMISS", applicationIds: e, dismissedAt: Date.now(), dismissibleContent: s });
}
