"use strict";
n.d(t, {
    C7: () => v,
    Fd: () => l,
    Lt: () => f,
    Mi: () => d,
    Mq: () => o,
    P_: () => u,
    _r: () => y,
    aS: () => T,
    bF: () => g,
    cS: () => N,
    dK: () => S,
    hJ: () => h,
    i0: () => O,
    lo: () => m,
    mD: () => I,
    oW: () => C,
    ot: () => A,
    pi: () => E,
    wK: () => c,
    wX: () => p,
    wb: () => _,
    x8: () => a,
});
var r = n(73153),
    i = n(9302),
    s = n(181435);
function a(e, t) {
    return r.h.dispatch({ type: "OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE", applicationId: e, enabled: t });
}
function o() {
    return r.h.dispatch({ type: "OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS" });
}
function l() {
    return r.h.dispatch({ type: "OVERLAY_OOP_UI_INITIALIZED" });
}
function u() {
    return r.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE" });
}
function c(e) {
    return r.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", error: e });
}
function d() {
    return r.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS" });
}
function _(e) {
    return r.h.dispatch({ type: "OVERLAY_V3_NATIVE_TRACK_GAME", pid: e });
}
function f(e) {
    return r.h.dispatch({ type: "OVERLAY_V3_NATIVE_UNTRACK_GAME", pid: e });
}
function p(e) {
    return r.h.dispatch({ type: "OVERLAY_V3_PRE_CREATE_POPOUT", createWindowTriggeringPID: e });
}
function h(e) {
    return r.h.dispatch({ type: "OVERLAY_V3_POST_CREATE_POPOUT", createWindowTriggeringPID: e });
}
function E(e, t) {
    return r.h.dispatch({
        type: "OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS",
        createWindowTriggeringPID: e,
        nativeWindowHandle: t,
    });
}
function m(e, t, n) {
    return r.h.dispatch({
        type: "OVERLAY_V3_WINDOW_CREATION_FAILURE",
        createWindowTriggeringPID: e,
        error: t,
        nativeWindowHandle: n,
    });
}
function g(e) {
    return r.h.dispatch({ type: "OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW", lastAssociatedPID: e ?? i.UNSET_PID });
}
function A(e, t) {
    return r.h.dispatch({ type: "OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW", refreshingPID: e, lastAssociatedPID: t });
}
function I(e, t, n) {
    let { crashType: i, isCrashedDisabled: s } = n;
    return r.h.dispatch({ type: "OVERLAY_CRASHED", pid: e, error: t, crashType: i, isCrashedDisabled: s });
}
function T(e) {
    let { pid: t, name: n, type: i, data: a, logType: o = s.QJ.Info } = e;
    return r.h.dispatch({
        type: "OVERLAY_ADD_DEBUG_BREADCRUMB",
        breadcrumb: { pid: t, type: i, name: n, data: a, logType: o },
    });
}
function S(e, t, n, r) {
    return T({ pid: e, name: t, type: s.ON.Flux, data: n, logType: r });
}
function y(e, t, n, r) {
    return T({ pid: e, name: t, type: s.ON.OOPModule, data: n, logType: r });
}
function N(e, t, n) {
    return r.h.dispatch({ type: "OVERLAY_V3_NATIVE_FOCUS_GAINED", pid: e, windowHandle: t, windowClass: n });
}
function v(e) {
    return r.h.dispatch({ type: "OVERLAY_V3_NATIVE_FOCUS_LOST", pid: e });
}
function C(e) {
    return r.h.dispatch({ type: "OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN", pid: e });
}
function O(e) {
    return r.h.dispatch({ type: "OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED", initialized: e });
}
