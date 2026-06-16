"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    s = n(613057);
let a = null,
    o = [s.Hi.REDISTRIBUTABLE_INSTALL_FAILED, s.Hi.POST_INSTALL_FAILED, s.Hi.POST_INSTALL_CANCELLED],
    l = [s.Hi.APPLICATION_NOT_FOUND, s.Hi.APPLICATION_LOAD_FAILED, s.Hi.INTERRUPTED, s.Hi.DESERIALIZATION_FAILED];
class u extends i.Ay.Store {
    static displayName = "DispatchApplicationErrorStore";
    getLastError() {
        return a;
    }
}
let c = new u(r.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != a && null != a.code && o.includes(a.code) && (a = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        a = null != t.code && l.includes(t.code) ? null : t;
    },
});
