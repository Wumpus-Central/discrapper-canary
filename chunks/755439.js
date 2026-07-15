"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    a = n(613057);
let s = null,
    l = [a.Hi.REDISTRIBUTABLE_INSTALL_FAILED, a.Hi.POST_INSTALL_FAILED, a.Hi.POST_INSTALL_CANCELLED],
    o = [a.Hi.APPLICATION_NOT_FOUND, a.Hi.APPLICATION_LOAD_FAILED, a.Hi.INTERRUPTED, a.Hi.DESERIALIZATION_FAILED];
class d extends i.Ay.Store {
    static displayName = "DispatchApplicationErrorStore";
    getLastError() {
        return s;
    }
}
let c = new d(r.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != s && null != s.code && l.includes(s.code) && (s = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        s = null != t.code && o.includes(t.code) ? null : t;
    },
});
