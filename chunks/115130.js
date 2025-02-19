n.d(t, {
    O: () => p,
    Z: () => I
}),
    n(789020);
var r,
    i = n(442837),
    o = n(570140),
    a = n(695346),
    s = n(630388),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d() {
    return {
        lastUsedObject: {},
        useActivityUrlOverride: !1,
        activityUrlOverride: null,
        filter: ''
    };
}
let f = d();
var p = (function (e) {
    return (e.INITIALIZED = 'INITIALIZED'), (e.LOADING = 'LOADING'), (e.LOADED = 'LOADED'), (e.ERROR = 'ERROR'), e;
})({});
let _ = 'INITIALIZED',
    h = [];
function m() {
    (f = d()), (_ = 'INITIALIZED'), (h = []);
}
function g() {
    f.useActivityUrlOverride = !f.useActivityUrlOverride;
}
function E(e) {
    let { activityUrlOverride: t } = e;
    f.activityUrlOverride = t;
}
function v(e) {
    let { applicationId: t, timestamp: n } = e;
    if (null == h.find((e) => e.id === t)) return !1;
    f.lastUsedObject[t] = n;
}
function b(e) {
    let { applications: t } = e;
    (_ = 'LOADED'), (h = t.filter((e) => null != e.flags && (0, s.yE)(e.flags, l.udG.EMBEDDED)));
}
function y(e) {
    let { type: t } = e;
    _ = 'ERROR';
}
function O(e) {
    let { filter: t } = e;
    f.filter = t;
}
class S extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        f = u({}, d(), null != e ? e : {});
    }
    getState() {
        return f;
    }
    getIsEnabled() {
        return a.Sb.getSetting() && h.length > 0;
    }
    getLastUsedObject() {
        return f.lastUsedObject;
    }
    getUseActivityUrlOverride() {
        return this.getIsEnabled() && f.useActivityUrlOverride;
    }
    getActivityUrlOverride() {
        return this.getIsEnabled() ? f.activityUrlOverride : null;
    }
    getFetchState() {
        return _;
    }
    getFilter() {
        return this.getIsEnabled() ? f.filter : '';
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? h : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != h.find((t) => t.id === e);
    }
}
c(S, 'displayName', 'DeveloperActivityShelfStore'), c(S, 'persistKey', 'DeveloperActivityShelfStore'), c(S, 'migrations', [(e) => (delete e.isEnabled, u({}, e))]);
let I = new S(o.Z, {
    LOGOUT: m,
    DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: g,
    DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: E,
    DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: v,
    DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
        _ = 'LOADING';
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: b,
    DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: y,
    DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: O,
    USER_SETTINGS_PROTO_UPDATE() {}
});
