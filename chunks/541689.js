n.d(t, { Ab: () => o, F_: () => l, IR: () => _, M1: () => u, SE: () => d, U$: () => c, Xw: () => s, rF: () => a });
var i = n(73153),
    r = n(47899);
function a(e, t) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_SHOWN", dismissibleContent: e, guildId: t });
}
function s(e, t) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent: e, guildId: t });
}
function l(e) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_ACTIONED", dismissibleContent: e });
}
function o() {
    i.h.dispatch({ type: "DCF_RESET" });
}
function d(e) {
    i.h.dispatch({ type: "DCF_DAILY_CAP_OVERRIDE", value: e });
}
function c(e) {
    i.h.dispatch({ type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value: e });
}
function u(e) {
    (i.h.dispatch({ type: "DCF_UPSELL_BACKOFF_OVERRIDE", value: e }), e && (0, r._0)());
}
function _(e, t) {
    i.h.dispatch({ type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent: e, guildId: t });
}
