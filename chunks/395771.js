var i = n(855986),
    r = n(73153);
let l = null,
    s = {},
    a = new Set();
class o extends i.Ay.Store {
    isCapturing() {
        return null != l;
    }
    getCapturingApp() {
        return l;
    }
    getFailure(e) {
        return s[e] ?? null;
    }
    hasRequested(e) {
        return a.has(e);
    }
}
let u = new o(r.h, {
    CONJURE_SNAPSHOT_CAPTURE_SET: function (e) {
        let { app: t } = e;
        if (l?.appId === t?.appId && l?.appName === t?.appName) return !1;
        l = t;
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
        ((l = null), (s = {}), (a = new Set()));
    },
});
n.d(t, {}, { A: u });
