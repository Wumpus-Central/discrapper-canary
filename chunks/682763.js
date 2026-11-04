var i = n(73153),
    r = n(181435);
function a(e) {
    let { pid: t, name: n, type: a, data: s, logType: l = r.QJ.Info } = e;
    return i.h.dispatch({
        type: "OVERLAY_ADD_DEBUG_BREADCRUMB",
        breadcrumb: { pid: t, type: a, name: n, data: s, logType: l },
    });
}
(n(672396),
    n.d(
        t,
        {},
        {
            C7: function (e) {
                return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_FOCUS_LOST", pid: e });
            },
            Fd: function () {
                return i.h.dispatch({ type: "OVERLAY_OOP_UI_INITIALIZED" });
            },
            Lt: function (e) {
                return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_UNTRACK_GAME", pid: e });
            },
            Mi: function () {
                return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS" });
            },
            Mq: function () {
                return i.h.dispatch({ type: "OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS" });
            },
            P_: function () {
                return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE" });
            },
            _r: function (e, t, n, i) {
                return a({ pid: e, name: t, type: r.ON.OOPModule, data: n, logType: i });
            },
            aS: a,
            bF: function (e) {
                return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW", lastAssociatedPID: e ?? -1 });
            },
            cS: function (e, t, n) {
                return i.h.dispatch({
                    type: "OVERLAY_V3_NATIVE_FOCUS_GAINED",
                    pid: e,
                    windowHandle: t,
                    windowClass: n,
                });
            },
            dK: function (e, t, n, i) {
                return a({ pid: e, name: t, type: r.ON.Flux, data: n, logType: i });
            },
            hJ: function (e) {
                return i.h.dispatch({ type: "OVERLAY_V3_POST_CREATE_POPOUT", createWindowTriggeringPID: e });
            },
            i0: function (e) {
                return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED", initialized: e });
            },
            lo: function (e, t, n) {
                return i.h.dispatch({
                    type: "OVERLAY_V3_WINDOW_CREATION_FAILURE",
                    createWindowTriggeringPID: e,
                    error: t,
                    nativeWindowHandle: n,
                });
            },
            mD: function (e, t, n) {
                let { crashType: r, isCrashedDisabled: a } = n;
                return i.h.dispatch({ type: "OVERLAY_CRASHED", pid: e, error: t, crashType: r, isCrashedDisabled: a });
            },
            oW: function (e) {
                return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN", pid: e });
            },
            ot: function (e, t) {
                return i.h.dispatch({
                    type: "OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW",
                    refreshingPID: e,
                    lastAssociatedPID: t,
                });
            },
            pi: function (e, t) {
                return i.h.dispatch({
                    type: "OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS",
                    createWindowTriggeringPID: e,
                    nativeWindowHandle: t,
                });
            },
            wK: function (e) {
                return i.h.dispatch({ type: "OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", error: e });
            },
            wX: function (e) {
                return i.h.dispatch({ type: "OVERLAY_V3_PRE_CREATE_POPOUT", createWindowTriggeringPID: e });
            },
            wb: function (e) {
                return i.h.dispatch({ type: "OVERLAY_V3_NATIVE_TRACK_GAME", pid: e });
            },
            x8: function (e, t) {
                return i.h.dispatch({ type: "OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE", applicationId: e, enabled: t });
            },
        },
    ));
