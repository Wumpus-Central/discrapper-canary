n.d(t, { Et: () => _, VN: () => o, YW: () => d, _w: () => u, c4: () => c, ho: () => l, z0: () => E });
var i = n(228366),
    a = n(77729),
    r = n(698723),
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
function _(e) {
    (0, r.A)("connection_replay_log_enabled", e, s.Ay.shouldRecordNextConnection()),
        i.h.dispatch({ type: "RTC_DEBUG_SET_RECORDING_FLAG", value: e });
}
function E(e, t, n) {
    i.h.dispatch({ type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId: e, context: t, quality: n });
}
function u() {
    a.A.fileManager.showOpenDialog({ filters: [{ name: "All Files", extensions: ["*"] }] }).then((e) => {
        let t = 0 === e.length ? "" : e[0];
        i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: t });
    });
}
