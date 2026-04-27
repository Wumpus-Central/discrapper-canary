a.d(t, { A: () => b });
var r = a(17928),
    n = a(451988),
    l = a(228366),
    i = a(375492),
    s = a(461213),
    o = a(652215);
let c = {},
    d = {};
function u(e, t, a) {
    null != d[e] && d[e].stop();
    let r = new n.Ep();
    r.start(a, () => l.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (d[e] = r);
}
function h(e, t, a) {
    let { applicationId: r, remotePartyId: n } = a;
    if (e === o.eAD.COMPLETE) {
        delete c[r]?.[t], null != d[r] && (d[r].stop(), delete d[r]);
        return;
    }
    let l = c[r] ?? {};
    (l[t] = { state: e, remotePartyId: n }),
        (c[r] = l),
        __OVERLAY__ || e !== o.eAD.FAILED ? e === o.eAD.LOADING && null != n && u(r, t, 15e3) : u(r, t, 12e4);
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
            let { applicationId: a, remotePartyId: r } = e,
                n = i.A.getApplicationActivity(a),
                l = s.A.getApplicationActivity(a);
            (n?.party?.id === r || l?.party?.id === r) &&
                (h(o.eAD.COMPLETE, o.xL.JOIN, { applicationId: a, remotePartyId: r }), (t = !0));
        }),
        t
    );
}
class f extends r.Ay.Store {
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
            r = c[t];
        if (null == r) return !1;
        delete r[a];
    },
});
