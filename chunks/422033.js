"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let s = null,
    a = !1;
class o extends r.Ay.Store {
    static displayName = "DispatchApplicationLaunchSetupStore";
    getLastProgress() {
        return s;
    }
    isRunning() {
        return a;
    }
}
let l = new o(i.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        a = !0;
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function (e) {
        let { progress: t, total: n, name: r } = e;
        s = { progress: t, total: n, name: r };
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        (s = null), (a = !1);
    },
});
