n.d(e, { A: () => o });
var A = n(17928),
    i = n(451988),
    I = n(228366),
    l = n(480595),
    r = n(461213),
    a = n(652215);
let u = {},
    c = {};
function p(t, e, n) {
    null != c[t] && c[t].stop();
    let A = new i.Ep();
    A.start(n, () => I.h.dispatch({ type: "ACTIVITY_LAUNCH_FAIL", applicationId: t, activityType: e })), (c[t] = A);
}
function L(t, e, n) {
    let { applicationId: A, remotePartyId: i } = n;
    if (t === a.eAD.COMPLETE) {
        delete u[A]?.[e], null != c[A] && (c[A].stop(), delete c[A]);
        return;
    }
    let I = u[A] ?? {};
    (I[e] = { state: t, remotePartyId: i }),
        (u[A] = I),
        __OVERLAY__ || t !== a.eAD.FAILED ? t === a.eAD.LOADING && p(A, e, null != i ? 15e3 : 12e4) : p(A, e, 12e4);
}
function s(t) {
    return ("ACTIVITY_JOIN" !== t.type || null == t.parentApplicationId) && L(a.eAD.COMPLETE, a.xL.JOIN, t);
}
function O() {
    let t = Object.entries(u)
            .map((t) => {
                let [e, n] = t;
                return { applicationId: e, remotePartyId: n[a.xL.JOIN]?.remotePartyId };
            })
            .filter((t) => {
                let { remotePartyId: e } = t;
                return null != e;
            }),
        e = !1;
    return (
        t.forEach((t) => {
            let { applicationId: n, remotePartyId: A } = t,
                i = l.A.getApplicationActivity(n),
                I = r.A.getApplicationActivity(n);
            (i?.party?.id === A || I?.party?.id === A) &&
                (L(a.eAD.COMPLETE, a.xL.JOIN, { applicationId: n, remotePartyId: A }), (e = !0));
        }),
        e
    );
}
class _ extends A.Ay.Store {
    static displayName = "ActivityLauncherStore";
    initialize() {
        this.syncWith([l.A, r.A], O);
    }
    getState(t, e) {
        let n = u[t];
        return n?.[e]?.state;
    }
    getStates() {
        return u;
    }
}
let o = new _(I.h, {
    OVERLAY_INITIALIZE: function (t) {
        let { activityLauncherStates: e } = t;
        u = { ...e };
    },
    ACTIVITY_JOIN_LOADING: (t) => L(a.eAD.LOADING, a.xL.JOIN, t),
    ACTIVITY_JOIN_FAILED: (t) => L(a.eAD.FAILED, a.xL.JOIN, t),
    ACTIVITY_JOIN: s,
    EMBEDDED_ACTIVITY_CLOSE: s,
    ACTIVITY_LAUNCH_FAIL: function (t) {
        let { applicationId: e, activityType: n } = t,
            A = u[e];
        if (null == A) return !1;
        delete A[n];
    },
});
