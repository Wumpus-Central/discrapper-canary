n.d(t, { A: () => d });
var i = n(17928),
    l = n(228366),
    r = n(613057);
let a = null,
    o = [r.Hi.REDISTRIBUTABLE_INSTALL_FAILED, r.Hi.POST_INSTALL_FAILED, r.Hi.POST_INSTALL_CANCELLED],
    s = [r.Hi.APPLICATION_NOT_FOUND, r.Hi.APPLICATION_LOAD_FAILED, r.Hi.INTERRUPTED, r.Hi.DESERIALIZATION_FAILED];
class u extends i.Ay.Store {
    static displayName = "DispatchApplicationErrorStore";
    getLastError() {
        return a;
    }
}
let d = new u(l.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != a && null != a.code && o.includes(a.code) && (a = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        a = null != t.code && s.includes(t.code) ? null : t;
    },
});
