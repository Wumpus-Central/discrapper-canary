n.d(t, { A: () => T });
var i = n(17928),
    r = n(451988),
    a = n(228366),
    s = n(375492),
    _ = n(461213),
    l = n(652215);
let o = {},
    E = {};
function d(e, t, n) {
    null != E[e] && E[e].stop();
    let i = new r.Ep();
    i.start(n, () => a.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (E[e] = i);
}
function c(e, t, n) {
    let { applicationId: i, remotePartyId: r } = n;
    if (e === l.eAD.COMPLETE) {
        delete o[i]?.[t], null != E[i] && (E[i].stop(), delete E[i]);
        return;
    }
    let a = o[i] ?? {};
    (a[t] = { state: e, remotePartyId: r }),
        (o[i] = a),
        __OVERLAY__ || e !== l.eAD.FAILED ? e === l.eAD.LOADING && null != r && d(i, t, 15e3) : d(i, t, 12e4);
}
function u(e) {
    return c(l.eAD.COMPLETE, l.xL.JOIN, e);
}
function I() {
    let e = Object.entries(o)
            .map((e) => {
                let [t, n] = e;
                return { applicationId: t, remotePartyId: n[l.xL.JOIN]?.remotePartyId };
            })
            .filter((e) => {
                let { remotePartyId: t } = e;
                return null != t;
            }),
        t = !1;
    return (
        e.forEach((e) => {
            let { applicationId: n, remotePartyId: i } = e,
                r = s.A.getApplicationActivity(n),
                a = _.A.getApplicationActivity(n);
            (r?.party?.id === i || a?.party?.id === i) &&
                (c(l.eAD.COMPLETE, l.xL.JOIN, { applicationId: n, remotePartyId: i }), (t = !0));
        }),
        t
    );
}
class A extends i.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([s.A, _.A], I);
    }
    getState(e, t) {
        let n = o[e];
        return n?.[t]?.state;
    }
    getStates() {
        return o;
    }
}
let T = new A(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        o = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => c(l.eAD.LOADING, l.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => c(l.eAD.FAILED, l.xL.JOIN, e),
    ACTIVITY_JOIN: u,
    EMBEDDED_ACTIVITY_CLOSE: u,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: n } = e,
            i = o[t];
        if (null == i) return !1;
        delete i[n];
    },
});
