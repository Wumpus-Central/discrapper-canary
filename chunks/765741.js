n.d(t, { A: () => _ });
var i = n(812729),
    r = n.n(i),
    a = n(17928),
    s = n(228366);
let l = {},
    o = 0,
    d = {},
    c = {};
class u extends a.Ay.Store {
    static displayName = "SocialSdkApplicationStore";
    getApplicationIdForPID(e) {
        let t = c[e];
        for (let [n, [i, r]] of Object.entries(l))
            if (i === e) {
                let e = d[n];
                if (null == t || e === t) return r;
            }
    }
}
let _ = new u(s.h, {
    START_SESSION: function () {
        ((l = {}), (o = 0), (d = {}), (c = {}));
    },
    LOCAL_ACTIVITY_UPDATE: function (e) {
        let { socketId: t, pid: n, applicationId: i } = e,
            a = d[t];
        null == a && ((a = ++o), (d[t] = a));
        let s = !1;
        if (null != n) {
            let e = c[n],
                t = null != e && Object.keys(l).some((t) => d[t] === e);
            (null == e || a >= e || !t) && ((s = a !== e), (c[n] = a));
        }
        if ((null == i || r()(l[t], [n, i])) && !s) return !1;
        null != i && (l[t] = [n, i]);
    },
    RPC_APP_CONNECTED: function (e) {
        let { socketId: t } = e;
        return ((d[t] = ++o), !1);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { socketId: t } = e;
        if (null == l[t]) return !1;
        delete l[t];
    },
});
