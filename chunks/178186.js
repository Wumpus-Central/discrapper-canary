n.d(t, { Ey: () => u, O$: () => s, Rw: () => o, S9: () => d, q0: () => a });
var r = n(636537),
    i = n(228366),
    l = n(652215);
function a() {
    i.h.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
}
function d() {
    i.h.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
}
function s() {
    i.h.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
}
function u(e) {
    return r.Bo.del({ url: l.Rsh.DELETE_SAFETY_WARNINGS(e), rejectWithError: !1 });
}
function o(e, t) {
    return r.Bo.post({ url: l.Rsh.ADD_SAFETY_WARNING(e), body: { safety_warning_type: t }, rejectWithError: !1 });
}
