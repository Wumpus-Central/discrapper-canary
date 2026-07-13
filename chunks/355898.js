n.d(t, { M: () => s, e: () => l });
var i = n(228366);
function l(e, t) {
    i.h.dispatch({ type: "GAME_UPSELL_DISMISS_CLEAR", applicationId: e, dismissibleContent: t });
}
function s(e, t) {
    i.h.dispatch({ type: "GAME_UPSELL_DISMISS", applicationIds: e, dismissedAt: Date.now(), dismissibleContent: t });
}
