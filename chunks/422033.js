"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153);
let a = null,
    s = !1;
function o(e) {
    let { progress: t, total: n, name: r } = e;
    a = { progress: t, total: n, name: r };
}
function l() {
    (a = null), (s = !1);
}
function u() {
    s = !0;
}
class c extends r.Ay.Store {
    static displayName = "DispatchApplicationLaunchSetupStore";
    getLastProgress() {
        return a;
    }
    isRunning() {
        return s;
    }
}
let d = new c(i.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: u,
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: o,
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: l,
});
