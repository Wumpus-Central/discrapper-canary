n.d(t, { Et: () => d, VN: () => l, YW: () => o, _w: () => u, c4: () => E, ho: () => _, z0: () => c });
var i = n(228366),
    r = n(77729),
    a = n(698723),
    s = n(412780);
function _(e) {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN", section: e }), i.h.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" });
}
function l() {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
}
function o() {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
}
function E(e) {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_SET_SECTION", section: e });
}
function d(e) {
    (0, a.A)("connection_replay_log_enabled", e, s.Ay.shouldRecordNextConnection()),
        i.h.dispatch({ type: "RTC_DEBUG_SET_RECORDING_FLAG", value: e });
}
function c(e, t, n) {
    i.h.dispatch({ type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId: e, context: t, quality: n });
}
function u() {
    r.A.fileManager.showOpenDialog({ filters: [{ name: "All Files", extensions: ["*"] }] }).then((e) => {
        let t = 0 === e.length ? "" : e[0];
        i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: t });
    });
}
