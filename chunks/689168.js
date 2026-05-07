"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(451988),
    s = n(228366),
    a = n(480595),
    o = n(461213),
    l = n(652215);
let u = {},
    c = {};
function d(e, t, n) {
    null != c[e] && c[e].stop();
    let i = new r.Ep();
    i.start(n, () => s.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (c[e] = i);
}
function _(e, t, n) {
    let { applicationId: i, remotePartyId: r } = n;
    if (e === l.eAD.COMPLETE) {
        delete u[i]?.[t], null != c[i] && (c[i].stop(), delete c[i]);
        return;
    }
    let s = u[i] ?? {};
    (s[t] = { state: e, remotePartyId: r }),
        (u[i] = s),
        __OVERLAY__ || e !== l.eAD.FAILED ? e === l.eAD.LOADING && d(i, t, null != r ? 15e3 : 12e4) : d(i, t, 12e4);
}
function f(e) {
    return _(l.eAD.COMPLETE, l.xL.JOIN, e);
}
function h() {
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
            let { applicationId: n, remotePartyId: i } = e,
                r = a.A.getApplicationActivity(n),
                s = o.A.getApplicationActivity(n);
            (r?.party?.id === i || s?.party?.id === i) &&
                (_(l.eAD.COMPLETE, l.xL.JOIN, { applicationId: n, remotePartyId: i }), (t = !0));
        }),
        t
    );
}
class p extends i.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([a.A, o.A], h);
    }
    getState(e, t) {
        let n = u[e];
        return n?.[t]?.state;
    }
    getStates() {
        return u;
    }
}
let E = new p(s.h, {
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
            i = u[t];
        if (null == i) return !1;
        delete i[n];
    },
});
