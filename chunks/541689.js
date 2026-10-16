n.d(t, { Ab: () => l, IR: () => u, M1: () => c, SE: () => o, U$: () => d, Xw: () => s, rF: () => a });
var i = n(73153),
    r = n(47899);
function a(e, t) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_SHOWN", dismissibleContent: e, guildId: t });
}
function s(e, t) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent: e, guildId: t });
}
function l() {
    i.h.dispatch({ type: "DCF_RESET" });
}
function o(e) {
    i.h.dispatch({ type: "DCF_DAILY_CAP_OVERRIDE", value: e });
}
function d(e) {
    i.h.dispatch({ type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value: e });
}
function c(e) {
    (i.h.dispatch({ type: "DCF_UPSELL_BACKOFF_OVERRIDE", value: e }), e && (0, r._0)());
}
function u(e, t) {
    i.h.dispatch({ type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent: e, guildId: t });
}
