"use strict";
n.d(t, { Ab: () => a, IR: () => u, SE: () => o, U$: () => l, Xw: () => s, rF: () => r });
var i = n(228366);
function r(e, t) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_SHOWN", dismissibleContent: e, guildId: t });
}
function s(e, t) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent: e, guildId: t });
}
function a() {
    i.h.dispatch({ type: "DCF_RESET" });
}
function o(e) {
    i.h.dispatch({ type: "DCF_DAILY_CAP_OVERRIDE", value: e });
}
function l(e) {
    i.h.dispatch({ type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value: e });
}
function u(e, t) {
    i.h.dispatch({ type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent: e, guildId: t });
}
