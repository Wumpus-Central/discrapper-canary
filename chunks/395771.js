n.d(t, { A: () => s });
var i = n(17928),
    l = n(73153);
let a = null;
class r extends i.Ay.Store {
    isCapturing() {
        return null != a;
    }
    getCapturingApp() {
        return a;
    }
}
let s = new r(l.h, {
    CONJURE_SNAPSHOT_CAPTURE_SET: function (e) {
        let { app: t } = e;
        if (a?.appId === t?.appId && a?.appName === t?.appName) return !1;
        a = t;
    },
});
