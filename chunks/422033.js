"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = null,
    s = !1;
class l extends i.Ay.Store {
    static displayName = "DispatchApplicationLaunchSetupStore";
    getLastProgress() {
        return a;
    }
    isRunning() {
        return s;
    }
}
let o = new l(r.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        s = !0;
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function (e) {
        let { progress: t, total: n, name: i } = e;
        a = { progress: t, total: n, name: i };
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        (a = null), (s = !1);
    },
});
