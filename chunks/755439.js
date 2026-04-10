"use strict";
n.d(t, { A: () => u });
var i = n(311907),
    r = n(73153),
    s = n(613057);
let l = null,
    a = [s.Hi.REDISTRIBUTABLE_INSTALL_FAILED, s.Hi.POST_INSTALL_FAILED, s.Hi.POST_INSTALL_CANCELLED],
    c = [s.Hi.APPLICATION_NOT_FOUND, s.Hi.APPLICATION_LOAD_FAILED, s.Hi.INTERRUPTED, s.Hi.DESERIALIZATION_FAILED];
class o extends i.Ay.Store {
    static displayName = "DispatchApplicationErrorStore";
    getLastError() {
        return l;
    }
}
let u = new o(r.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != l && null != l.code && a.includes(l.code) && (l = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        l = null != t.code && c.includes(t.code) ? null : t;
    },
});
