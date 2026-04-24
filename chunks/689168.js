a.d(t, { A: () => b });
var n = a(17928),
    r = a(451988),
    l = a(228366),
    i = a(375492),
    s = a(461213),
    o = a(652215);
let c = {},
    d = {};
function u(e, t, a) {
    null != d[e] && d[e].stop();
    let n = new r.Ep();
    n.start(a, () => l.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (d[e] = n);
}
function h(e, t, a) {
    let { applicationId: n, remotePartyId: r } = a;
    if (e === o.eAD.COMPLETE) {
        delete c[n]?.[t], null != d[n] && (d[n].stop(), delete d[n]);
        return;
    }
    let l = c[n] ?? {};
    (l[t] = { state: e, remotePartyId: r }),
        (c[n] = l),
        __OVERLAY__ || e !== o.eAD.FAILED ? e === o.eAD.LOADING && null != r && u(n, t, 15e3) : u(n, t, 12e4);
}
function p(e) {
    return h(o.eAD.COMPLETE, o.xL.JOIN, e);
}
function m() {
    let e = Object.entries(c)
            .map((e) => {
                let [t, a] = e;
                return { applicationId: t, remotePartyId: a[o.xL.JOIN]?.remotePartyId };
            })
            .filter((e) => {
                let { remotePartyId: t } = e;
                return null != t;
            }),
        t = !1;
    return (
        e.forEach((e) => {
            let { applicationId: a, remotePartyId: n } = e,
                r = i.A.getApplicationActivity(a),
                l = s.A.getApplicationActivity(a);
            (r?.party?.id === n || l?.party?.id === n) &&
                (h(o.eAD.COMPLETE, o.xL.JOIN, { applicationId: a, remotePartyId: n }), (t = !0));
        }),
        t
    );
}
class f extends n.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([i.A, s.A], m);
    }
    getState(e, t) {
        let a = c[e];
        return a?.[t]?.state;
    }
    getStates() {
        return c;
    }
}
let b = new f(l.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        c = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => h(o.eAD.LOADING, o.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => h(o.eAD.FAILED, o.xL.JOIN, e),
    ACTIVITY_JOIN: p,
    EMBEDDED_ACTIVITY_CLOSE: p,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: a } = e,
            n = c[t];
        if (null == n) return !1;
        delete n[a];
    },
});
