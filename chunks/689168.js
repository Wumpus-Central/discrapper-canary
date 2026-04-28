"use strict";
n.d(t, { A: () => h });
var r = n(17928),
    a = n(451988),
    i = n(228366),
    l = n(375492),
    s = n(461213),
    o = n(652215);
let c = {},
    d = {};
function u(e, t, n) {
    null != d[e] && d[e].stop();
    let r = new a.Ep();
    r.start(n, () => i.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (d[e] = r);
}
function _(e, t, n) {
    let { applicationId: r, remotePartyId: a } = n;
    if (e === o.eAD.COMPLETE) {
        delete c[r]?.[t], null != d[r] && (d[r].stop(), delete d[r]);
        return;
    }
    let i = c[r] ?? {};
    (i[t] = { state: e, remotePartyId: a }),
        (c[r] = i),
        __OVERLAY__ || e !== o.eAD.FAILED ? e === o.eAD.LOADING && null != a && u(r, t, 15e3) : u(r, t, 12e4);
}
function p(e) {
    return _(o.eAD.COMPLETE, o.xL.JOIN, e);
}
function f() {
    let e = Object.entries(c)
            .map((e) => {
                let [t, n] = e;
                return { applicationId: t, remotePartyId: n[o.xL.JOIN]?.remotePartyId };
            })
            .filter((e) => {
                let { remotePartyId: t } = e;
                return null != t;
            }),
        t = !1;
    return (
        e.forEach((e) => {
            let { applicationId: n, remotePartyId: r } = e,
                a = l.A.getApplicationActivity(n),
                i = s.A.getApplicationActivity(n);
            (a?.party?.id === r || i?.party?.id === r) &&
                (_(o.eAD.COMPLETE, o.xL.JOIN, { applicationId: n, remotePartyId: r }), (t = !0));
        }),
        t
    );
}
class m extends r.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([l.A, s.A], f);
    }
    getState(e, t) {
        let n = c[e];
        return n?.[t]?.state;
    }
    getStates() {
        return c;
    }
}
let h = new m(i.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        c = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => _(o.eAD.LOADING, o.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => _(o.eAD.FAILED, o.xL.JOIN, e),
    ACTIVITY_JOIN: p,
    EMBEDDED_ACTIVITY_CLOSE: p,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: n } = e,
            r = c[t];
        if (null == r) return !1;
        delete r[n];
    },
});
