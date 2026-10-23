n.d(t, { A: () => u });
var i = n(17928),
    l = n(73153);
let r = null,
    s = {},
    a = new Set();
class o extends i.Ay.Store {
    isCapturing() {
        return null != r;
    }
    getCapturingApp() {
        return r;
    }
    getFailure(e) {
        return s[e] ?? null;
    }
    hasRequested(e) {
        return a.has(e);
    }
}
let u = new o(l.h, {
    CONJURE_SNAPSHOT_CAPTURE_SET: function (e) {
        let { app: t } = e;
        if (r?.appId === t?.appId && r?.appName === t?.appName) return !1;
        r = t;
    },
    CONJURE_SNAPSHOT_FAILURE_SET: function (e) {
        let { applicationId: t, reason: n } = e;
        if ((s[t] ?? null) === n) return !1;
        if (null == n) {
            let { [t]: e, ...n } = s;
            s = n;
            return;
        }
        s = { ...s, [t]: n };
    },
    CONJURE_SNAPSHOT_REQUESTED: function (e) {
        let { applicationId: t } = e;
        if (a.has(t)) return !1;
        a = new Set([...a, t]);
    },
    LOGOUT: function () {
        ((r = null), (s = {}), (a = new Set()));
    },
});
