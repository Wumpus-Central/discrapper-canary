n.d(t, { A: () => T });
var i = n(17928),
    a = n(451988),
    r = n(228366),
    s = n(375492),
    l = n(461213),
    o = n(652215);
let d = {},
    c = {};
function _(e, t, n) {
    null != c[e] && c[e].stop();
    let i = new a.Ep();
    i.start(n, () => r.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (c[e] = i);
}
function E(e, t, n) {
    let { applicationId: i, remotePartyId: a } = n;
    if (e === o.eAD.COMPLETE) {
        delete d[i]?.[t], null != c[i] && (c[i].stop(), delete c[i]);
        return;
    }
    let r = d[i] ?? {};
    (r[t] = { state: e, remotePartyId: a }),
        (d[i] = r),
        __OVERLAY__ || e !== o.eAD.FAILED ? e === o.eAD.LOADING && null != a && _(i, t, 15e3) : _(i, t, 12e4);
}
function u(e) {
    return E(o.eAD.COMPLETE, o.xL.JOIN, e);
}
function A() {
    let e = Object.entries(d)
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
            let { applicationId: n, remotePartyId: i } = e,
                a = s.A.getApplicationActivity(n),
                r = l.A.getApplicationActivity(n);
            (a?.party?.id === i || r?.party?.id === i) &&
                (E(o.eAD.COMPLETE, o.xL.JOIN, { applicationId: n, remotePartyId: i }), (t = !0));
        }),
        t
    );
}
class I extends i.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([s.A, l.A], A);
    }
    getState(e, t) {
        let n = d[e];
        return n?.[t]?.state;
    }
    getStates() {
        return d;
    }
}
let T = new I(r.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        d = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => E(o.eAD.LOADING, o.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => E(o.eAD.FAILED, o.xL.JOIN, e),
    ACTIVITY_JOIN: u,
    EMBEDDED_ACTIVITY_CLOSE: u,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: n } = e,
            i = d[t];
        if (null == i) return !1;
        delete i[n];
    },
});
