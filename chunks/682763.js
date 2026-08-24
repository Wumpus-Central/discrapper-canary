"use strict";
n.d(t, {
    C7: () => O,
    Fd: () => o,
    Lt: () => E,
    Mi: () => u,
    Mq: () => l,
    P_: () => d,
    _r: () => N,
    aS: () => g,
    bF: () => p,
    cS: () => C,
    dK: () => S,
    hJ: () => h,
    i0: () => L,
    lo: () => f,
    mD: () => m,
    oW: () => R,
    ot: () => T,
    pi: () => I,
    wK: () => c,
    wX: () => A,
    wb: () => _,
    x8: () => s,
});
var i = n(228366),
    r = n(9302),
    a = n(181435);
function s(e, t) {
    return i.h.dispatch({ type: "OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE", applicationId: e, enabled: t });
}
function l() {
    return i.h.dispatch({ type: "OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS" });
}
function o() {
    return i.h.dispatch({ type: "OVERLAY_OOP_UI_INITIALIZED" });
}
function d() {
    return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE" });
}
function c(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", error: e });
}
function u() {
    return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS" });
}
function _(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_TRACK_GAME", pid: e });
}
function E(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_UNTRACK_GAME", pid: e });
}
function A(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_PRE_CREATE_POPOUT", createWindowTriggeringPID: e });
}
function h(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_POST_CREATE_POPOUT", createWindowTriggeringPID: e });
}
function I(e, t) {
    return i.h.dispatch({
        type: "OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS",
        createWindowTriggeringPID: e,
        nativeWindowHandle: t,
    });
}
function f(e, t, n) {
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
function T(e, t) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW", refreshingPID: e, lastAssociatedPID: t });
}
function m(e, t, n) {
    let { crashType: r, isCrashedDisabled: a } = n;
    return i.h.dispatch({ type: "OVERLAY_CRASHED", pid: e, error: t, crashType: r, isCrashedDisabled: a });
}
function g(e) {
    let { pid: t, name: n, type: r, data: s, logType: l = a.QJ.Info } = e;
    return i.h.dispatch({
        type: "OVERLAY_ADD_DEBUG_BREADCRUMB",
        breadcrumb: { pid: t, type: r, name: n, data: s, logType: l },
    });
}
function S(e, t, n, i) {
    return g({ pid: e, name: t, type: a.ON.Flux, data: n, logType: i });
}
function N(e, t, n, i) {
    return g({ pid: e, name: t, type: a.ON.OOPModule, data: n, logType: i });
}
function C(e, t, n) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_FOCUS_GAINED", pid: e, windowHandle: t, windowClass: n });
}
function O(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_FOCUS_LOST", pid: e });
}
function R(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN", pid: e });
}
function L(e) {
    return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED", initialized: e });
}
