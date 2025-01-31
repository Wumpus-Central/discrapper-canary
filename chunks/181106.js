n.d(t, { Z: () => g });
var i,
    r = n(442837),
    a = n(846519),
    s = n(570140),
    o = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = {},
    c = {},
    d = 120000;
function f(e) {
    let { applicationId: t, activityType: n } = e,
        i = u[t];
    if (null == i || i[n] !== o.OcF.FAILED) return !1;
    delete i[n];
}
function _(e, t, n) {
    var i;
    let { applicationId: r } = n,
        l = null !== (i = u[r]) && void 0 !== i ? i : {};
    if (((l[t] = e), (u[r] = l), !__OVERLAY__ && e === o.OcF.FAILED)) {
        null != c[r] && c[r].stop();
        let e = new a.V7();
        e.start(d, () =>
            s.Z.dispatch({
                type: 'ACTIVITY_LAUNCH_FAIL',
                applicationId: r,
                activityType: t
            })
        ),
            (c[r] = e);
    }
}
function p(e) {
    let { activityLauncherStates: t } = e;
    u = { ...t };
}
function h(e) {
    return _(o.OcF.COMPLETE, o.mFx.JOIN, e);
}
class m extends (i = r.ZP.Store) {
    getState(e, t) {
        let n = u[e];
        return null == n ? void 0 : n[t];
    }
    getStates() {
        return u;
    }
}
l(m, 'displayName', 'ActivityLauncherStore');
let g = new m(s.Z, {
    OVERLAY_INITIALIZE: p,
    ACTIVITY_JOIN_LOADING: (e) => _(o.OcF.LOADING, o.mFx.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => _(o.OcF.FAILED, o.mFx.JOIN, e),
    ACTIVITY_JOIN: h,
    EMBEDDED_ACTIVITY_CLOSE: h,
    ACTIVITY_LAUNCH_FAIL: f
});
