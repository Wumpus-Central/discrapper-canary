var i,
    a = r(442837),
    o = r(846519),
    s = r(570140),
    l = r(981631);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = {},
    d = {},
    f = 120000;
function p(e) {
    let { applicationId: n, activityType: r } = e,
        i = c[n];
    if (null == i || i[r] !== l.OcF.FAILED) return !1;
    delete i[r];
}
function h(e, n, r) {
    var i;
    let { applicationId: a } = r,
        u = null !== (i = c[a]) && void 0 !== i ? i : {};
    if (((u[n] = e), (c[a] = u), !__OVERLAY__ && e === l.OcF.FAILED)) {
        null != d[a] && d[a].stop();
        let e = new o.V7();
        e.start(f, () =>
            s.Z.dispatch({
                type: 'ACTIVITY_LAUNCH_FAIL',
                applicationId: a,
                activityType: n
            })
        ),
            (d[a] = e);
    }
}
function _(e) {
    let { activityLauncherStates: n } = e;
    c = { ...n };
}
function m(e) {
    return h(l.OcF.COMPLETE, l.mFx.JOIN, e);
}
class g extends (i = a.ZP.Store) {
    getState(e, n) {
        let r = c[e];
        return null == r ? void 0 : r[n];
    }
    getStates() {
        return c;
    }
}
u(g, 'displayName', 'ActivityLauncherStore'),
    (n.Z = new g(s.Z, {
        OVERLAY_INITIALIZE: _,
        ACTIVITY_JOIN_LOADING: (e) => h(l.OcF.LOADING, l.mFx.JOIN, e),
        ACTIVITY_JOIN_FAILED: (e) => h(l.OcF.FAILED, l.mFx.JOIN, e),
        ACTIVITY_JOIN: m,
        EMBEDDED_ACTIVITY_CLOSE: m,
        ACTIVITY_LAUNCH_FAIL: p
    }));
