n.d(t, { Ab: () => s, IR: () => d, SE: () => l, U$: () => o, Xw: () => a, rF: () => r });
var i = n(228366);
function r(e, t) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_SHOWN", dismissibleContent: e, guildId: t });
}
function a(e, t) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent: e, guildId: t });
}
function s() {
    i.h.dispatch({ type: "DCF_RESET" });
}
function l(e) {
    i.h.dispatch({ type: "DCF_DAILY_CAP_OVERRIDE", value: e });
}
function o(e) {
    i.h.dispatch({ type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value: e });
}
function d(e, t) {
    i.h.dispatch({ type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent: e, guildId: t });
}
