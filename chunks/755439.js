l.d(t, { A: () => c });
var n = l(17928),
    i = l(228366),
    r = l(613057);
let s = null,
    a = [r.Hi.REDISTRIBUTABLE_INSTALL_FAILED, r.Hi.POST_INSTALL_FAILED, r.Hi.POST_INSTALL_CANCELLED],
    u = [r.Hi.APPLICATION_NOT_FOUND, r.Hi.APPLICATION_LOAD_FAILED, r.Hi.INTERRUPTED, r.Hi.DESERIALIZATION_FAILED];
class o extends n.Ay.Store {
    static displayName = "DispatchApplicationErrorStore";
    getLastError() {
        return s;
    }
}
let c = new o(i.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != s && null != s.code && a.includes(s.code) && (s = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        s = null != t.code && u.includes(t.code) ? null : t;
    },
});
