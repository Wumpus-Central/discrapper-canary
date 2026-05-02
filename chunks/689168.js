A.d(e, { A: () => _ });
var i = A(17928),
    n = A(451988),
    I = A(228366),
    r = A(480595),
    l = A(461213),
    a = A(652215);
let u = {},
    c = {};
function L(t, e, A) {
    null != c[t] && c[t].stop();
    let i = new n.Ep();
    i.start(A, () => I.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: t, activityType: e })), (c[t] = i);
}
function s(t, e, A) {
    let { applicationId: i, remotePartyId: n } = A;
    if (t === a.eAD.COMPLETE) {
        delete u[i]?.[e], null != c[i] && (c[i].stop(), delete c[i]);
        return;
    }
    let I = u[i] ?? {};
    (I[e] = { state: t, remotePartyId: n }),
        (u[i] = I),
        __OVERLAY__ || t !== a.eAD.FAILED ? t === a.eAD.LOADING && null != n && L(i, e, 15e3) : L(i, e, 12e4);
}
function p(t) {
    return s(a.eAD.COMPLETE, a.xL.JOIN, t);
}
function E() {
    let t = Object.entries(u)
            .map((t) => {
                let [e, A] = t;
                return { applicationId: e, remotePartyId: A[a.xL.JOIN]?.remotePartyId };
            })
            .filter((t) => {
                let { remotePartyId: e } = t;
                return null != e;
            }),
        e = !1;
    return (
        t.forEach((t) => {
            let { applicationId: A, remotePartyId: i } = t,
                n = r.A.getApplicationActivity(A),
                I = l.A.getApplicationActivity(A);
            (n?.party?.id === i || I?.party?.id === i) &&
                (s(a.eAD.COMPLETE, a.xL.JOIN, { applicationId: A, remotePartyId: i }), (e = !0));
        }),
        e
    );
}
class O extends i.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([r.A, l.A], E);
    }
    getState(t, e) {
        let A = u[t];
        return A?.[e]?.state;
    }
    getStates() {
        return u;
    }
}
let _ = new O(I.h, {
    OVERLAY_INITIALIZE: function (t) {
        let { activityLauncherStates: e } = t;
        u = { ...e };
    },
    ACTIVITY_JOIN_LOADING: (t) => s(a.eAD.LOADING, a.xL.JOIN, t),
    ACTIVITY_JOIN_FAILED: (t) => s(a.eAD.FAILED, a.xL.JOIN, t),
    ACTIVITY_JOIN: p,
    EMBEDDED_ACTIVITY_CLOSE: p,
    ACTIVITY_LAUNCH_FAIL: function (t) {
        let { applicationId: e, activityType: A } = t,
            i = u[e];
        if (null == i) return !1;
        delete i[A];
    },
});
