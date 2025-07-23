(n.d(t, {
    O: () => f,
    Z: () => T
}),
    n(997841));
var r,
    i = n(442837),
    a = n(570140),
    o = n(695346),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
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
let _ = d();
var f = (function (e) {
    return ((e.INITIALIZED = 'INITIALIZED'), (e.LOADING = 'LOADING'), (e.LOADED = 'LOADED'), (e.ERROR = 'ERROR'), e);
})({});
let p = 'INITIALIZED',
    h = [];
function m() {
    ((_ = d()), (p = 'INITIALIZED'), (h = []));
}
function g() {
    _.useActivityUrlOverride = !_.useActivityUrlOverride;
}
function E(e) {
    let { activityUrlOverride: t } = e;
    _.activityUrlOverride = t;
}
function b(e) {
    let { applicationId: t, timestamp: n } = e;
    if (null == h.find((e) => e.id === t)) return !1;
    _.lastUsedObject[t] = n;
}
function y(e) {
    let { applications: t } = e;
    ((p = 'LOADED'), (h = t.filter((e) => null != e.flags && (0, s.yE)(e.flags, l.udG.EMBEDDED))));
}
function O(e) {
    let { type: t } = e;
    p = 'ERROR';
}
function v(e) {
    let { filter: t } = e;
    _.filter = t;
}
class I extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        _ = u({}, d(), null != e ? e : {});
    }
    getState() {
        return _;
    }
    getIsEnabled() {
        return o.Sb.getSetting() && h.length > 0;
    }
    getLastUsedObject() {
        return _.lastUsedObject;
    }
    getUseActivityUrlOverride() {
        return this.getIsEnabled() && _.useActivityUrlOverride;
    }
    getActivityUrlOverride() {
        return this.getIsEnabled() ? _.activityUrlOverride : null;
    }
    getFetchState() {
        return p;
    }
    getFilter() {
        return this.getIsEnabled() ? _.filter : '';
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? h : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != h.find((t) => t.id === e);
    }
}
(c(I, 'displayName', 'DeveloperActivityShelfStore'), c(I, 'persistKey', 'DeveloperActivityShelfStore'), c(I, 'migrations', [(e) => (delete e.isEnabled, u({}, e))]));
let T = new I(a.Z, {
    LOGOUT: m,
    DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: g,
    DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: E,
    DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: b,
    DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
        p = 'LOADING';
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: y,
    DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: O,
    DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: v,
    USER_SETTINGS_PROTO_UPDATE() {}
});
