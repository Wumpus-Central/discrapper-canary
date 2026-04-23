"use strict";
n.d(t, { A: () => u });
var i = n(311907),
    r = n(73153),
    l = n(613057);
let s = null,
    a = [l.Hi.REDISTRIBUTABLE_INSTALL_FAILED, l.Hi.POST_INSTALL_FAILED, l.Hi.POST_INSTALL_CANCELLED],
    o = [l.Hi.APPLICATION_NOT_FOUND, l.Hi.APPLICATION_LOAD_FAILED, l.Hi.INTERRUPTED, l.Hi.DESERIALIZATION_FAILED];
class c extends i.Ay.Store {
    static displayName = "DispatchApplicationErrorStore";
    getLastError() {
        return s;
    }
}
let u = new c(r.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != s && null != s.code && a.includes(s.code) && (s = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        s = null != t.code && o.includes(t.code) ? null : t;
    },
});
