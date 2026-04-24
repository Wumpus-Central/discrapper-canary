n.d(t, { A: () => m });
var a = n(17928),
    i = n(451988),
    l = n(228366),
    r = n(375492),
    o = n(461213),
    s = n(652215);
let c = {},
    d = {};
function u(e, t, n) {
    null != d[e] && d[e].stop();
    let a = new i.Ep();
    a.start(n, () => l.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (d[e] = a);
}
function _(e, t, n) {
    let { applicationId: a, remotePartyId: i } = n;
    if (e === s.eAD.COMPLETE) {
        delete c[a]?.[t], null != d[a] && (d[a].stop(), delete d[a]);
        return;
    }
    let l = c[a] ?? {};
    (l[t] = { state: e, remotePartyId: i }),
        (c[a] = l),
        __OVERLAY__ || e !== s.eAD.FAILED ? e === s.eAD.LOADING && null != i && u(a, t, 15e3) : u(a, t, 12e4);
}
function p(e) {
    return _(s.eAD.COMPLETE, s.xL.JOIN, e);
}
function f() {
    let e = Object.entries(c)
            .map((e) => {
                let [t, n] = e;
                return { applicationId: t, remotePartyId: n[s.xL.JOIN]?.remotePartyId };
            })
            .filter((e) => {
                let { remotePartyId: t } = e;
                return null != t;
            }),
        t = !1;
    return (
        e.forEach((e) => {
            let { applicationId: n, remotePartyId: a } = e,
                i = r.A.getApplicationActivity(n),
                l = o.A.getApplicationActivity(n);
            (i?.party?.id === a || l?.party?.id === a) &&
                (_(s.eAD.COMPLETE, s.xL.JOIN, { applicationId: n, remotePartyId: a }), (t = !0));
        }),
        t
    );
}
class h extends a.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([r.A, o.A], f);
    }
    getState(e, t) {
        let n = c[e];
        return n?.[t]?.state;
    }
    getStates() {
        return c;
    }
}
let m = new h(l.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        c = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => _(s.eAD.LOADING, s.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => _(s.eAD.FAILED, s.xL.JOIN, e),
    ACTIVITY_JOIN: p,
    EMBEDDED_ACTIVITY_CLOSE: p,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: n } = e,
            a = c[t];
        if (null == a) return !1;
        delete a[n];
    },
});
