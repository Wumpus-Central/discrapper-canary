"use strict";
n.d(t, { A: () => g });
var a = n(311907),
    i = n(451988),
    r = n(73153),
    l = n(375492),
    s = n(461213),
    d = n(652215);
let o = {},
    c = {};
function u(e, t, n) {
    null != c[e] && c[e].stop();
    let a = new i.Ep();
    a.start(n, () => r.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (c[e] = a);
}
function _(e, t, n) {
    let { applicationId: a, remotePartyId: i } = n;
    if (e === d.eAD.COMPLETE) {
        delete o[a]?.[t], null != c[a] && (c[a].stop(), delete c[a]);
        return;
    }
    let r = o[a] ?? {};
    (r[t] = { state: e, remotePartyId: i }),
        (o[a] = r),
        __OVERLAY__ || e !== d.eAD.FAILED ? e === d.eAD.LOADING && null != i && u(a, t, 15e3) : u(a, t, 12e4);
}
function m(e) {
    return _(d.eAD.COMPLETE, d.xL.JOIN, e);
}
function p() {
    let e = Object.entries(o)
            .map((e) => {
                let [t, n] = e;
                return { applicationId: t, remotePartyId: n[d.xL.JOIN]?.remotePartyId };
            })
            .filter((e) => {
                let { remotePartyId: t } = e;
                return null != t;
            }),
        t = !1;
    return (
        e.forEach((e) => {
            let { applicationId: n, remotePartyId: a } = e,
                i = l.A.getApplicationActivity(n),
                r = s.A.getApplicationActivity(n);
            (i?.party?.id === a || r?.party?.id === a) &&
                (_(d.eAD.COMPLETE, d.xL.JOIN, { applicationId: n, remotePartyId: a }), (t = !0));
        }),
        t
    );
}
class h extends a.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([l.A, s.A], p);
    }
    getState(e, t) {
        let n = o[e];
        return n?.[t]?.state;
    }
    getStates() {
        return o;
    }
}
let g = new h(r.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        o = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => _(d.eAD.LOADING, d.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => _(d.eAD.FAILED, d.xL.JOIN, e),
    ACTIVITY_JOIN: m,
    EMBEDDED_ACTIVITY_CLOSE: m,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: n } = e,
            a = o[t];
        if (null == a) return !1;
        delete a[n];
    },
});
