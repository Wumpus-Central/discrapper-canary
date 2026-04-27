"use strict";
r.d(t, { A: () => h });
var n = r(17928),
    i = r(451988),
    a = r(228366),
    s = r(375492),
    l = r(461213),
    o = r(652215);
let c = {},
    d = {};
function u(e, t, r) {
    null != d[e] && d[e].stop();
    let n = new i.Ep();
    n.start(r, () => a.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (d[e] = n);
}
function _(e, t, r) {
    let { applicationId: n, remotePartyId: i } = r;
    if (e === o.eAD.COMPLETE) {
        delete c[n]?.[t], null != d[n] && (d[n].stop(), delete d[n]);
        return;
    }
    let a = c[n] ?? {};
    (a[t] = { state: e, remotePartyId: i }),
        (c[n] = a),
        __OVERLAY__ || e !== o.eAD.FAILED ? e === o.eAD.LOADING && null != i && u(n, t, 15e3) : u(n, t, 12e4);
}
function p(e) {
    return _(o.eAD.COMPLETE, o.xL.JOIN, e);
}
function f() {
    let e = Object.entries(c)
            .map((e) => {
                let [t, r] = e;
                return { applicationId: t, remotePartyId: r[o.xL.JOIN]?.remotePartyId };
            })
            .filter((e) => {
                let { remotePartyId: t } = e;
                return null != t;
            }),
        t = !1;
    return (
        e.forEach((e) => {
            let { applicationId: r, remotePartyId: n } = e,
                i = s.A.getApplicationActivity(r),
                a = l.A.getApplicationActivity(r);
            (i?.party?.id === n || a?.party?.id === n) &&
                (_(o.eAD.COMPLETE, o.xL.JOIN, { applicationId: r, remotePartyId: n }), (t = !0));
        }),
        t
    );
}
class m extends n.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([s.A, l.A], f);
    }
    getState(e, t) {
        let r = c[e];
        return r?.[t]?.state;
    }
    getStates() {
        return c;
    }
}
let h = new m(a.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        c = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => _(o.eAD.LOADING, o.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => _(o.eAD.FAILED, o.xL.JOIN, e),
    ACTIVITY_JOIN: p,
    EMBEDDED_ACTIVITY_CLOSE: p,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: r } = e,
            n = c[t];
        if (null == n) return !1;
        delete n[r];
    },
});
