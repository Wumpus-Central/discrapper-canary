n.d(t, { A: () => s });
var l = n(17928),
    i = n(73153);
let a = null;
class r extends l.Ay.Store {
    isCapturing() {
        return null != a;
    }
    getCapturingApp() {
        return a;
    }
}
let s = new r(i.h, {
    CONJURE_SNAPSHOT_CAPTURE_SET: function (e) {
        let { app: t } = e;
        if (a?.appId === t?.appId && a?.appName === t?.appName) return !1;
        a = t;
    },
});
