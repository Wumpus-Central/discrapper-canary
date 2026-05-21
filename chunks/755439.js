n.d(t, { A: () => d });
var i = n(17928),
    l = n(228366),
    r = n(613057);
let s = null,
    a = [r.Hi.REDISTRIBUTABLE_INSTALL_FAILED, r.Hi.POST_INSTALL_FAILED, r.Hi.POST_INSTALL_CANCELLED],
    c = [r.Hi.APPLICATION_NOT_FOUND, r.Hi.APPLICATION_LOAD_FAILED, r.Hi.INTERRUPTED, r.Hi.DESERIALIZATION_FAILED];
class o extends i.Ay.Store {
    static displayName = "DispatchApplicationErrorStore";
    getLastError() {
        return s;
    }
}
let d = new o(l.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != s && null != s.code && a.includes(s.code) && (s = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        s = null != t.code && c.includes(t.code) ? null : t;
    },
});
