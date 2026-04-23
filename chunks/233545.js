"use strict";
n.d(t, { Et: () => d, VN: () => l, YW: () => u, _w: () => f, c4: () => c, ho: () => o, z0: () => _ });
var r = n(73153),
    i = n(77729),
    s = n(698723),
    a = n(412780);
function o(e) {
    r.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN", section: e }), r.h.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
}
function l() {
    r.h.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
}
function u() {
    r.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
}
function c(e) {
    r.h.dispatch({ type: "RTC_DEBUG_MODAL_SET_SECTION", section: e });
}
function d(e) {
    (0, s.A)("connection_replay_log_enabled", e, a.Ay.shouldRecordNextConnection()),
        r.h.dispatch({ type: "RTC_DEBUG_SET_RECORDING_FLAG", value: e });
}
function _(e, t, n) {
    r.h.dispatch({ type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId: e, context: t, quality: n });
}
function f() {
    i.A.fileManager.showOpenDialog({ filters: [{ name: "All Files", extensions: ["*"] }] }).then((e) => {
        let t = 0 === e.length ? "" : e[0];
        r.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: t });
    });
}
