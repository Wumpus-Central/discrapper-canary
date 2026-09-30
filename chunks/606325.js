n.d(t, { Je: () => r, Lk: () => a, sk: () => s });
var i = n(228366);
function r(e) {
    i.h.dispatch({ type: "FRIENDS_LIST_SET_GROUPING_MODE", mode: e });
}
function a(e) {
    i.h.dispatch({ type: "FRIENDS_LIST_SET_VOICE_GROUPING_ENABLED", enabled: e });
}
function s() {
    i.h.dispatch({ type: "FRIENDS_LIST_TEAR_DOWN" });
}
