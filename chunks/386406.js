"use strict";
n.d(t, { A: () => r });
var i = n(228366);
let r = {
    clearVADWarning() {
        i.h.dispatch({ type: "PERMISSION_CLEAR_VAD_WARNING" });
    },
    clearSuppressWarning() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        i.h.dispatch({ type: "PERMISSION_CLEAR_SUPPRESS_WARNING", forever: e });
    },
    clearPTTAdminWarning() {
        i.h.dispatch({ type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING" });
    },
    requestElevatedProcess(e) {
        i.h.dispatch({ type: "PERMISSION_REQUEST_ELEVATED_PROCESS", pid: e });
    },
    clearElevatedProcess() {
        i.h.dispatch({ type: "PERMISSION_CLEAR_ELEVATED_PROCESS" });
    },
    continueNonelevatedProcess(e) {
        i.h.dispatch({ type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS", pid: e });
    },
};
