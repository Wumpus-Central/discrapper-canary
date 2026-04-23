"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = null,
    a = !1;
class o extends i.Ay.Store {
    static displayName = "DispatchApplicationLaunchSetupStore";
    getLastProgress() {
        return s;
    }
    isRunning() {
        return a;
    }
}
let l = new o(r.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        a = !0;
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function (e) {
        let { progress: t, total: n, name: i } = e;
        s = { progress: t, total: n, name: i };
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        (s = null), (a = !1);
    },
});
