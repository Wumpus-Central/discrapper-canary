"use strict";
n.d(t, { Et: () => u, VN: () => o, YW: () => d, _w: () => E, c4: () => c, ho: () => l, z0: () => _ });
var i = n(228366),
    r = n(77729),
    a = n(855302),
    s = n(412780);
function l(e) {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN", section: e }), i.h.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
}
function o() {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
}
function d() {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
}
function c(e) {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_SET_SECTION", section: e });
}
function u(e) {
    (0, a.A)("connection_replay_log_enabled", e, s.Ay.shouldRecordNextConnection()),
        i.h.dispatch({ type: "RTC_DEBUG_SET_RECORDING_FLAG", value: e });
}
function _(e, t, n) {
    i.h.dispatch({ type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId: e, context: t, quality: n });
}
function E() {
    r.A.fileManager.showOpenDialog({ filters: [{ name: "All Files", extensions: ["*"] }] }).then((e) => {
        let t = 0 === e.length ? "" : e[0];
        i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: t });
    });
}
