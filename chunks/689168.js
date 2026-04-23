"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(451988),
    s = n(73153),
    a = n(375492),
    o = n(461213),
    l = n(652215);
let u = {},
    c = {};
function d(e, t, n) {
    null != c[e] && c[e].stop();
    let r = new i.Ep();
    r.start(n, () => s.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (c[e] = r);
}
function _(e, t, n) {
    let { applicationId: r, remotePartyId: i } = n;
    if (e === l.eAD.COMPLETE) {
        delete u[r]?.[t], null != c[r] && (c[r].stop(), delete c[r]);
        return;
    }
    let s = u[r] ?? {};
    (s[t] = { state: e, remotePartyId: i }),
        (u[r] = s),
        __OVERLAY__ || e !== l.eAD.FAILED ? e === l.eAD.LOADING && null != i && d(r, t, 15e3) : d(r, t, 12e4);
}
function f(e) {
    return _(l.eAD.COMPLETE, l.xL.JOIN, e);
}
function p() {
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
                i = a.A.getApplicationActivity(n),
                s = o.A.getApplicationActivity(n);
            (i?.party?.id === r || s?.party?.id === r) &&
                (_(l.eAD.COMPLETE, l.xL.JOIN, { applicationId: n, remotePartyId: r }), (t = !0));
        }),
        t
    );
}
class h extends r.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([a.A, o.A], p);
    }
    getState(e, t) {
        let n = u[e];
        return n?.[t]?.state;
    }
    getStates() {
        return u;
    }
}
let E = new h(s.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        u = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => _(l.eAD.LOADING, l.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => _(l.eAD.FAILED, l.xL.JOIN, e),
    ACTIVITY_JOIN: f,
    EMBEDDED_ACTIVITY_CLOSE: f,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: n } = e,
            r = u[t];
        if (null == r) return !1;
        delete r[n];
    },
});
