i.d(e, { fT: () => a, jt: () => r, kv: () => l });
var n = i(228366);
function l(t) {
    n.h.dispatch({ type: "GAME_MODE_SET_ENABLED", enabled: t });
}
function a(t) {
    n.h.dispatch({ type: "GAME_MODE_SUPPRESS_PROMPT", gameId: t });
}
function r() {
    n.h.dispatch({ type: "GAME_MODE_RESET_PROMPT_SUPPRESSION" });
}
