n.d(t, {
    C7: () => C,
    Fd: () => l,
    Lt: () => _,
    Mi: () => c,
    Mq: () => s,
    P_: () => o,
    _r: () => S,
    aS: () => g,
    bF: () => f,
    cS: () => N,
    dK: () => m,
    hJ: () => A,
    i0: () => R,
    lo: () => I,
    mD: () => T,
    oW: () => O,
    ot: () => p,
    pi: () => h,
    wK: () => d,
    wX: () => E,
    wb: () => u,
    x8: () => a,
});
var i = n(73153),
    r = n(181435);
function a(e, t) {
    return i.h.dispatch({ type: "OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE", applicationId: e, enabled: t });
}
function s() {
    return i.h.dispatch({ type: "OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS" });
}
function l() {
    return i.h.dispatch({ type: "OVERLAY_OOP_UI_INITIALIZED" });
}
function o() {
    return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE" });
}
function d(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", error: e });
}
function c() {
    return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS" });
}
function u(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_TRACK_GAME", pid: e });
}
function _(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_UNTRACK_GAME", pid: e });
}
function E(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_PRE_CREATE_POPOUT", createWindowTriggeringPID: e });
}
function A(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_POST_CREATE_POPOUT", createWindowTriggeringPID: e });
}
function h(e, t) {
    return i.h.dispatch({
        type: "OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS",
        createWindowTriggeringPID: e,
        nativeWindowHandle: t,
    });
}
function I(e, t, n) {
    return i.h.dispatch({
        type: "OVERLAY_V3_WINDOW_CREATION_FAILURE",
        createWindowTriggeringPID: e,
        error: t,
        nativeWindowHandle: n,
    });
}
function f(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW", lastAssociatedPID: e ?? -1 });
}
function p(e, t) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW", refreshingPID: e, lastAssociatedPID: t });
}
function T(e, t, n) {
    let { crashType: r, isCrashedDisabled: a } = n;
    return i.h.dispatch({ type: "OVERLAY_CRASHED", pid: e, error: t, crashType: r, isCrashedDisabled: a });
}
function g(e) {
    let { pid: t, name: n, type: a, data: s, logType: l = r.QJ.Info } = e;
    return i.h.dispatch({
        type: "OVERLAY_ADD_DEBUG_BREADCRUMB",
        breadcrumb: { pid: t, type: a, name: n, data: s, logType: l },
    });
}
function m(e, t, n, i) {
    return g({ pid: e, name: t, type: r.ON.Flux, data: n, logType: i });
}
function S(e, t, n, i) {
    return g({ pid: e, name: t, type: r.ON.OOPModule, data: n, logType: i });
}
function N(e, t, n) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_FOCUS_GAINED", pid: e, windowHandle: t, windowClass: n });
}
function C(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_FOCUS_LOST", pid: e });
}
function O(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN", pid: e });
}
function R(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED", initialized: e });
}
n(672396);
