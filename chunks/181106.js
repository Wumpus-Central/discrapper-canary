n.d(t, { Z: () => E });
var r,
    i = n(442837),
    o = n(846519),
    a = n(570140),
    s = n(981631);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {},
    d = {},
    f = 120000;
function _(e) {
    let { applicationId: t, activityType: n } = e,
        r = u[t];
    if (null == r || r[n] !== s.OcF.FAILED) return !1;
    delete r[n];
}
function p(e, t, n) {
    var r;
    let { applicationId: i } = n,
        l = null != (r = u[i]) ? r : {};
    if (((l[t] = e), (u[i] = l), !__OVERLAY__ && e === s.OcF.FAILED)) {
        null != d[i] && d[i].stop();
        let e = new o.V7();
        e.start(f, () =>
            a.Z.dispatch({
                type: 'ACTIVITY_LAUNCH_FAIL',
                applicationId: i,
                activityType: t
            })
        ),
            (d[i] = e);
    }
}
function h(e) {
    let { activityLauncherStates: t } = e;
    u = c({}, t);
}
function m(e) {
    return p(s.OcF.COMPLETE, s.mFx.JOIN, e);
}
class g extends (r = i.ZP.Store) {
    getState(e, t) {
        let n = u[e];
        return null == n ? void 0 : n[t];
    }
    getStates() {
        return u;
    }
}
l(g, 'displayName', 'ActivityLauncherStore');
let E = new g(a.Z, {
    OVERLAY_INITIALIZE: h,
    ACTIVITY_JOIN_LOADING: (e) => p(s.OcF.LOADING, s.mFx.JOIN, e),
    ACTIVITY_JOIN_FAILED: (e) => p(s.OcF.FAILED, s.mFx.JOIN, e),
    ACTIVITY_JOIN: m,
    EMBEDDED_ACTIVITY_CLOSE: m,
    ACTIVITY_LAUNCH_FAIL: _
});
