I.d(e, { A: () => _ });
var A = I(17928),
    n = I(451988),
    i = I(73153),
    l = I(480595),
    r = I(461213),
    a = I(652215);
let L = {},
    u = {};
function c(t, e, I) {
    null != u[t] && u[t].stop();
    let A = new n.Ep();
    (A.start(I, () => i.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: t, activityType: e })), (u[t] = A));
}
function p(t, e, I) {
    let { applicationId: A, remotePartyId: n } = I;
    if (t === a.eAD.COMPLETE) {
        (delete L[A]?.[e], null != u[A] && (u[A].stop(), delete u[A]));
        return;
    }
    let i = L[A] ?? {};
    ((i[e] = { state: t, remotePartyId: n }),
        (L[A] = i),
        __OVERLAY__ || t !== a.eAD.FAILED ? t === a.eAD.LOADING && c(A, e, null != n ? 15e3 : 12e4) : c(A, e, 12e4));
}
function O(t) {
    return ("ACTIVITY_JOIN" !== t.type || null == t.parentApplicationId) && p(a.eAD.COMPLETE, a.xL.JOIN, t);
}
function T() {
    let t = Object.entries(L)
            .map((t) => {
                let [e, I] = t;
                return { applicationId: e, remotePartyId: I[a.xL.JOIN]?.remotePartyId };
            })
            .filter((t) => {
                let { remotePartyId: e } = t;
                return null != e;
            }),
        e = !1;
    return (
        t.forEach((t) => {
            let { applicationId: I, remotePartyId: A } = t,
                n = l.A.getApplicationActivity(I),
                i = r.A.getApplicationActivity(I);
            (n?.party?.id === A || i?.party?.id === A) &&
                (p(a.eAD.COMPLETE, a.xL.JOIN, { applicationId: I, remotePartyId: A }), (e = !0));
        }),
        e
    );
}
class E extends A.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([l.A, r.A], T);
    }
    getState(t, e) {
        let I = L[t];
        return I?.[e]?.state;
    }
    getStates() {
        return L;
    }
}
let _ = new E(i.h, {
    OVERLAY_INITIALIZE: function (t) {
        let { activityLauncherStates: e } = t;
        L = { ...e };
    },
    ACTIVITY_JOIN_LOADING: (t) => p(a.eAD.LOADING, a.xL.JOIN, t),
    ACTIVITY_JOIN_NAVIGATION_COMPLETE: (t) => p(a.eAD.COMPLETE, a.xL.JOIN, t),
    ACTIVITY_JOIN_FAILED: (t) => p(a.eAD.FAILED, a.xL.JOIN, t),
    ACTIVITY_JOIN: O,
    EMBEDDED_ACTIVITY_CLOSE: O,
    ACTIVITY_LAUNCH_FAIL: function (t) {
        let { applicationId: e, activityType: I } = t,
            A = L[e];
        if (null == A) return !1;
        delete A[I];
    },
});
