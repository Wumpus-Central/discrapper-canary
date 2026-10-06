n.d(t, { VN: () => s, YW: () => l, _w: () => c, c4: () => o, ho: () => a, z0: () => d });
var i = n(73153),
    r = n(77729);
function a(e) {
    (i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN", section: e }),
        i.h.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" }));
}
function s() {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
}
function l() {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
}
function o(e) {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_SET_SECTION", section: e });
}
function d(e, t, n) {
    i.h.dispatch({ type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId: e, context: t, quality: n });
}
function c() {
    r.A.fileManager.showOpenDialog({ filters: [{ name: "All Files", extensions: ["*"] }] }).then((e) => {
        let t = 0 === e.length ? "" : e[0];
        i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: t });
    });
}
