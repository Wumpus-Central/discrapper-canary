"use strict";
n.d(t, {
    C7: () => R,
    Fd: () => l,
    Lt: () => E,
    Mi: () => u,
    Mq: () => o,
    P_: () => d,
    _r: () => N,
    aS: () => T,
    bF: () => p,
    cS: () => C,
    dK: () => S,
    hJ: () => m,
    i0: () => y,
    lo: () => g,
    mD: () => I,
    oW: () => O,
    ot: () => A,
    pi: () => f,
    wK: () => _,
    wX: () => h,
    wb: () => c,
    x8: () => a,
});
var i = n(228366),
    r = n(9302),
    s = n(181435);
function a(e, t) {
    return i.h.dispatch({ type: "OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE", applicationId: e, enabled: t });
}
function o() {
    return i.h.dispatch({ type: "OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS" });
}
function l() {
    return i.h.dispatch({ type: "OVERLAY_OOP_UI_INITIALIZED" });
}
function d() {
    return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE" });
}
function _(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", error: e });
}
function u() {
    return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS" });
}
function c(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_TRACK_GAME", pid: e });
}
function E(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_UNTRACK_GAME", pid: e });
}
function h(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_PRE_CREATE_POPOUT", createWindowTriggeringPID: e });
}
function m(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_POST_CREATE_POPOUT", createWindowTriggeringPID: e });
}
function f(e, t) {
    return i.h.dispatch({
        type: "OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS",
        createWindowTriggeringPID: e,
        nativeWindowHandle: t,
    });
}
function g(e, t, n) {
    return i.h.dispatch({
        type: "OVERLAY_V3_WINDOW_CREATION_FAILURE",
        createWindowTriggeringPID: e,
        error: t,
        nativeWindowHandle: n,
    });
}
function p(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW", lastAssociatedPID: e ?? r.UNSET_PID });
}
function A(e, t) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW", refreshingPID: e, lastAssociatedPID: t });
}
function I(e, t, n) {
    let { crashType: r, isCrashedDisabled: s } = n;
    return i.h.dispatch({ type: "OVERLAY_CRASHED", pid: e, error: t, crashType: r, isCrashedDisabled: s });
}
function T(e) {
    let { pid: t, name: n, type: r, data: a, logType: o = s.QJ.Info } = e;
    return i.h.dispatch({
        type: "OVERLAY_ADD_DEBUG_BREADCRUMB",
        breadcrumb: { pid: t, type: r, name: n, data: a, logType: o },
    });
}
function S(e, t, n, i) {
    return T({ pid: e, name: t, type: s.ON.Flux, data: n, logType: i });
}
function N(e, t, n, i) {
    return T({ pid: e, name: t, type: s.ON.OOPModule, data: n, logType: i });
}
function C(e, t, n) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_FOCUS_GAINED", pid: e, windowHandle: t, windowClass: n });
}
function R(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_FOCUS_LOST", pid: e });
}
function O(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN", pid: e });
}
function y(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED", initialized: e });
}
