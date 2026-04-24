"use strict";
n.d(t, { A: () => f });
var a = n(17928),
    r = n(451988),
    i = n(228366),
    l = n(375492),
    s = n(461213),
    o = n(652215);
let c = {},
    d = {};
function u(e, t, n) {
    null != d[e] && d[e].stop();
    let a = new r.Ep();
    a.start(n, () => i.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (d[e] = a);
}
function _(e, t, n) {
    let { applicationId: a, remotePartyId: r } = n;
    if (e === o.eAD.COMPLETE) {
        delete c[a]?.[t], null != d[a] && (d[a].stop(), delete d[a]);
        return;
    }
    let i = c[a] ?? {};
    (i[t] = { state: e, remotePartyId: r }),
        (c[a] = i),
        __OVERLAY__ || e !== o.eAD.FAILED ? e === o.eAD.LOADING && null != r && u(a, t, 15e3) : u(a, t, 12e4);
}
function p(e) {
    return _(o.eAD.COMPLETE, o.xL.JOIN, e);
}
function m() {
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
            let { applicationId: n, remotePartyId: a } = e,
                r = l.A.getApplicationActivity(n),
                i = s.A.getApplicationActivity(n);
            (r?.party?.id === a || i?.party?.id === a) &&
                (_(o.eAD.COMPLETE, o.xL.JOIN, { applicationId: n, remotePartyId: a }), (t = !0));
        }),
        t
    );
}
class h extends a.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([l.A, s.A], m);
    }
    getState(e, t) {
        let n = c[e];
        return n?.[t]?.state;
    }
    getStates() {
        return c;
    }
}
let f = new h(i.h, {
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
            a = c[t];
        if (null == a) return !1;
        delete a[n];
    },
});
