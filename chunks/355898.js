n.d(t, { M: () => i, e: () => s });
var l = n(228366);
function s(e, t) {
    l.h.dispatch({ type: "GAME_UPSELL_DISMISS_CLEAR", applicationId: e, dismissibleContent: t });
}
function i(e, t) {
    l.h.dispatch({ type: "GAME_UPSELL_DISMISS", applicationIds: e, dismissedAt: Date.now(), dismissibleContent: t });
}
