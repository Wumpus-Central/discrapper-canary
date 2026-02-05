"use strict";
n.d(t, { A: () => I });
var r = n(311907),
    i = n(451988),
    a = n(73153),
    s = n(375492),
    o = n(461213),
    l = n(652215);
let u = {},
    c = {},
    d = 12e4,
    _ = 15e3;
function f(e) {
    let { applicationId: t, activityType: n } = e,
        r = u[t];
    if (null == r) return !1;
    delete r[n];
}
function p(e, t, n) {
    null != c[e] && c[e].stop();
    let r = new i.Ep();
    r.start(n, () => a.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (c[e] = r);
}
function h(e, t, n) {
    let { applicationId: r, remotePartyId: i } = n;
    if (e === l.eAD.COMPLETE) {
        delete u[r]?.[t], null != c[r] && (c[r].stop(), delete c[r]);
        return;
    }
    let a = u[r] ?? {};
    (a[t] = { state: e, remotePartyId: i }),
        (u[r] = a),
        __OVERLAY__ || e !== l.eAD.FAILED ? e === l.eAD.LOADING && null != i && p(r, t, _) : p(r, t, d);
}
function m(e) {
    let { activityLauncherStates: t } = e;
    u = { ...t };
}
function g(e) {
    return h(l.eAD.COMPLETE, l.xL.JOIN, e);
}
function E() {
    let e = Object.entries(u)
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
            let { applicationId: n, remotePartyId: r } = e,
                i = s.A.getApplicationActivity(n),
                a = o.A.getApplicationActivity(n);
            (i?.party?.id === r || a?.party?.id === r) &&
                (h(l.eAD.COMPLETE, l.xL.JOIN, { applicationId: n, remotePartyId: r }), (t = !0));
        }),
        t
    );
}
class A extends r.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([s.A, o.A], E);
    }
    getState(e, t) {
        let n = u[e];
        return n?.[t]?.state;
    }
    getStates() {
        return u;
    }
}
let I = new A(a.h, {
    OVERLAY_INITIALIZE: m,
    ACTIVITY_JOIN_LOADING: (e) => h(l.eAD.LOADING, l.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => h(l.eAD.FAILED, l.xL.JOIN, e),
    ACTIVITY_JOIN: g,
    EMBEDDED_ACTIVITY_CLOSE: g,
    ACTIVITY_LAUNCH_FAIL: f,
});
