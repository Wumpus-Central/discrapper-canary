n.d(t, {
    O: () => f,
    Z: () => b
}),
    n(789020);
var i,
    r = n(442837),
    a = n(570140),
    s = n(695346),
    o = n(630388),
    l = n(981631);
function u(e, t, n) {
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
function c() {
    return {
        lastUsedObject: {},
        useActivityUrlOverride: !1,
        activityUrlOverride: null,
        filter: ''
    };
}
let d = c();
var f = (function (e) {
    return (e.INITIALIZED = 'INITIALIZED'), (e.LOADING = 'LOADING'), (e.LOADED = 'LOADED'), (e.ERROR = 'ERROR'), e;
})({});
let _ = 'INITIALIZED',
    p = [];
function h() {
    (d = c()), (_ = 'INITIALIZED'), (p = []);
}
function m() {
    d.useActivityUrlOverride = !d.useActivityUrlOverride;
}
function g(e) {
    let { activityUrlOverride: t } = e;
    d.activityUrlOverride = t;
}
function E(e) {
    let { applicationId: t, timestamp: n } = e;
    if (null == p.find((e) => e.id === t)) return !1;
    d.lastUsedObject[t] = n;
}
function v(e) {
    let { applications: t } = e;
    (_ = 'LOADED'), (p = t.filter((e) => null != e.flags && (0, o.yE)(e.flags, l.udG.EMBEDDED)));
}
function y(e) {
    let { type: t } = e;
    _ = 'ERROR';
}
function I(e) {
    let { filter: t } = e;
    d.filter = t;
}
class T extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        d = {
            ...c(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return d;
    }
    getIsEnabled() {
        return s.Sb.getSetting() && p.length > 0;
    }
    getLastUsedObject() {
        return d.lastUsedObject;
    }
    getUseActivityUrlOverride() {
        return this.getIsEnabled() && d.useActivityUrlOverride;
    }
    getActivityUrlOverride() {
        return this.getIsEnabled() ? d.activityUrlOverride : null;
    }
    getFetchState() {
        return _;
    }
    getFilter() {
        return this.getIsEnabled() ? d.filter : '';
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? p : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != p.find((t) => t.id === e);
    }
}
u(T, 'displayName', 'DeveloperActivityShelfStore'), u(T, 'persistKey', 'DeveloperActivityShelfStore'), u(T, 'migrations', [(e) => (delete e.isEnabled, { ...e })]);
let b = new T(a.Z, {
    LOGOUT: h,
    DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: m,
    DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: g,
    DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: E,
    DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
        _ = 'LOADING';
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: v,
    DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: y,
    DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: I,
    USER_SETTINGS_PROTO_UPDATE() {}
});
