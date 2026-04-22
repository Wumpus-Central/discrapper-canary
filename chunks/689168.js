"use strict";
a.d(t, { A: () => b });
var r = a(311907),
    l = a(451988),
    n = a(73153),
    i = a(375492),
    s = a(461213),
    o = a(652215);
let d = {},
    c = {};
function u(e, t, a) {
    null != c[e] && c[e].stop();
    let r = new l.Ep();
    r.start(a, () => n.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (c[e] = r);
}
function h(e, t, a) {
    let { applicationId: r, remotePartyId: l } = a;
    if (e === o.eAD.COMPLETE) {
        delete d[r]?.[t], null != c[r] && (c[r].stop(), delete c[r]);
        return;
    }
    let n = d[r] ?? {};
    (n[t] = { state: e, remotePartyId: l }),
        (d[r] = n),
        __OVERLAY__ || e !== o.eAD.FAILED ? e === o.eAD.LOADING && null != l && u(r, t, 15e3) : u(r, t, 12e4);
}
function p(e) {
    return h(o.eAD.COMPLETE, o.xL.JOIN, e);
}
function _() {
    let e = Object.entries(d)
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
                l = i.A.getApplicationActivity(a),
                n = s.A.getApplicationActivity(a);
            (l?.party?.id === r || n?.party?.id === r) &&
                (h(o.eAD.COMPLETE, o.xL.JOIN, { applicationId: a, remotePartyId: r }), (t = !0));
        }),
        t
    );
}
class m extends r.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([i.A, s.A], _);
    }
    getState(e, t) {
        let a = d[e];
        return a?.[t]?.state;
    }
    getStates() {
        return d;
    }
}
let b = new m(n.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        d = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => h(o.eAD.LOADING, o.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => h(o.eAD.FAILED, o.xL.JOIN, e),
    ACTIVITY_JOIN: p,
    EMBEDDED_ACTIVITY_CLOSE: p,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: a } = e,
            r = d[t];
        if (null == r) return !1;
        delete r[a];
    },
});
