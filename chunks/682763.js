n.d(t, {
    C7: () => I,
    Fd: () => l,
    Lt: () => p,
    Mi: () => d,
    Mq: () => o,
    P_: () => c,
    _r: () => v,
    aS: () => O,
    bF: () => E,
    cS: () => S,
    dK: () => A,
    hJ: () => h,
    i0: () => C,
    lo: () => g,
    mD: () => y,
    oW: () => T,
    ot: () => b,
    pi: () => m,
    wK: () => u,
    wX: () => _,
    wb: () => f,
    x8: () => s,
});
var r = n(73153),
    i = n(9302),
    a = n(181435);

function s(e, t) {
    return r.h.dispatch({
        type: "OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE",
        applicationId: e,
        enabled: t,
    });
}

function o() {
    return r.h.dispatch({
        type: "OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS",
    });
}

function l() {
    return r.h.dispatch({
        type: "OVERLAY_OOP_UI_INITIALIZED",
    });
}

function c() {
    return r.h.dispatch({
        type: "OVERLAY_V3_LOAD_NATIVE_MODULE",
    });
}

function u(e) {
    return r.h.dispatch({
        type: "OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED",
        error: e,
    });
}

function d() {
    return r.h.dispatch({
        type: "OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS",
    });
}

function f(e) {
    return r.h.dispatch({
        type: "OVERLAY_V3_NATIVE_TRACK_GAME",
        pid: e,
    });
}

function p(e) {
    return r.h.dispatch({
        type: "OVERLAY_V3_NATIVE_UNTRACK_GAME",
        pid: e,
    });
}

function _(e) {
    return r.h.dispatch({
        type: "OVERLAY_V3_PRE_CREATE_POPOUT",
        createWindowTriggeringPID: e,
    });
}

function h(e) {
    return r.h.dispatch({
        type: "OVERLAY_V3_POST_CREATE_POPOUT",
        createWindowTriggeringPID: e,
    });
}

function m(e, t) {
    return r.h.dispatch({
        type: "OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS",
        createWindowTriggeringPID: e,
        nativeWindowHandle: t,
    });
}

function g(e, t, n) {
    return r.h.dispatch({
        type: "OVERLAY_V3_WINDOW_CREATION_FAILURE",
        createWindowTriggeringPID: e,
        error: t,
        nativeWindowHandle: n,
    });
}

function E(e) {
    return r.h.dispatch({
        type: "OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW",
        lastAssociatedPID: null != e ? e : i.UNSET_PID,
    });
}

function b(e, t) {
    return r.h.dispatch({
        type: "OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW",
        refreshingPID: e,
        lastAssociatedPID: t,
    });
}

function y(e, t, n) {
    let { crashType: i, isCrashedDisabled: a } = n;
    return r.h.dispatch({
        type: "OVERLAY_CRASHED",
        pid: e,
        error: t,
        crashType: i,
        isCrashedDisabled: a,
    });
}

function O(e) {
    let { pid: t, name: n, type: i, data: s, logType: o = a.QJ.Info } = e;
    return r.h.dispatch({
        type: "OVERLAY_ADD_DEBUG_BREADCRUMB",
        breadcrumb: {
            pid: t,
            type: i,
            name: n,
            data: s,
            logType: o,
        },
    });
}

function A(e, t, n, r) {
    return O({
        pid: e,
        name: t,
        type: a.ON.Flux,
        data: n,
        logType: r,
    });
}

function v(e, t, n, r) {
    return O({
        pid: e,
        name: t,
        type: a.ON.OOPModule,
        data: n,
        logType: r,
    });
}

function S(e, t, n) {
    return r.h.dispatch({
        type: "OVERLAY_V3_NATIVE_FOCUS_GAINED",
        pid: e,
        windowHandle: t,
        windowClass: n,
    });
}

function I(e) {
    return r.h.dispatch({
        type: "OVERLAY_V3_NATIVE_FOCUS_LOST",
        pid: e,
    });
}

function T(e) {
    return r.h.dispatch({
        type: "OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN",
        pid: e,
    });
}

function C(e) {
    return r.h.dispatch({
        type: "OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED",
        initialized: e,
    });
}
