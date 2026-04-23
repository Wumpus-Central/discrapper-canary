n.d(t, { A: () => _ });
var r = n(311907),
    i = n(451988),
    l = n(73153),
    a = n(375492),
    o = n(461213),
    u = n(652215);
let s = {},
    c = {};
function d(e, t, n) {
    null != c[e] && c[e].stop();
    let r = new i.Ep();
    r.start(n, () => l.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (c[e] = r);
}
function A(e, t, n) {
    let { applicationId: r, remotePartyId: i } = n;
    if (e === u.eAD.COMPLETE) {
        delete s[r]?.[t], null != c[r] && (c[r].stop(), delete c[r]);
        return;
    }
    let l = s[r] ?? {};
    (l[t] = { state: e, remotePartyId: i }),
        (s[r] = l),
        __OVERLAY__ || e !== u.eAD.FAILED ? e === u.eAD.LOADING && null != i && d(r, t, 15e3) : d(r, t, 12e4);
}
function f(e) {
    return A(u.eAD.COMPLETE, u.xL.JOIN, e);
}
function g() {
    let e = Object.entries(s)
            .map((e) => {
                let [t, n] = e;
                return { applicationId: t, remotePartyId: n[u.xL.JOIN]?.remotePartyId };
            })
            .filter((e) => {
                let { remotePartyId: t } = e;
                return null != t;
            }),
        t = !1;
    return (
        e.forEach((e) => {
            let { applicationId: n, remotePartyId: r } = e,
                i = a.A.getApplicationActivity(n),
                l = o.A.getApplicationActivity(n);
            (i?.party?.id === r || l?.party?.id === r) &&
                (A(u.eAD.COMPLETE, u.xL.JOIN, { applicationId: n, remotePartyId: r }), (t = !0));
        }),
        t
    );
}
class m extends r.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([a.A, o.A], g);
    }
    getState(e, t) {
        let n = s[e];
        return n?.[t]?.state;
    }
    getStates() {
        return s;
    }
}
let _ = new m(l.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        s = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => A(u.eAD.LOADING, u.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => A(u.eAD.FAILED, u.xL.JOIN, e),
    ACTIVITY_JOIN: f,
    EMBEDDED_ACTIVITY_CLOSE: f,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: n } = e,
            r = s[t];
        if (null == r) return !1;
        delete r[n];
    },
});
