n.d(t, { A: () => y });
var r = n(17928),
    l = n(451988),
    i = n(228366),
    a = n(375492),
    u = n(461213),
    o = n(652215);
let s = {},
    d = {};
function c(e, t, n) {
    null != d[e] && d[e].stop();
    let r = new l.Ep();
    r.start(n, () => i.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: e, activityType: t })), (d[e] = r);
}
function A(e, t, n) {
    let { applicationId: r, remotePartyId: l } = n;
    if (e === o.eAD.COMPLETE) {
        delete s[r]?.[t], null != d[r] && (d[r].stop(), delete d[r]);
        return;
    }
    let i = s[r] ?? {};
    (i[t] = { state: e, remotePartyId: l }),
        (s[r] = i),
        __OVERLAY__ || e !== o.eAD.FAILED ? e === o.eAD.LOADING && null != l && c(r, t, 15e3) : c(r, t, 12e4);
}
function f(e) {
    return A(o.eAD.COMPLETE, o.xL.JOIN, e);
}
function p() {
    let e = Object.entries(s)
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
                l = a.A.getApplicationActivity(n),
                i = u.A.getApplicationActivity(n);
            (l?.party?.id === r || i?.party?.id === r) &&
                (A(o.eAD.COMPLETE, o.xL.JOIN, { applicationId: n, remotePartyId: r }), (t = !0));
        }),
        t
    );
}
class m extends r.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([a.A, u.A], p);
    }
    getState(e, t) {
        let n = s[e];
        return n?.[t]?.state;
    }
    getStates() {
        return s;
    }
}
let y = new m(i.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { activityLauncherStates: t } = e;
        s = { ...t };
    },
    ACTIVITY_JOIN_LOADING: (e) => A(o.eAD.LOADING, o.xL.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => A(o.eAD.FAILED, o.xL.JOIN, e),
    ACTIVITY_JOIN: f,
    EMBEDDED_ACTIVITY_CLOSE: f,
    ACTIVITY_LAUNCH_FAIL: function (e) {
        let { applicationId: t, activityType: n } = e,
            r = s[t];
        if (null == r) return !1;
        delete r[n];
    },
});
