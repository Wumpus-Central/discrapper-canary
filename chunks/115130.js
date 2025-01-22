r.d(n, {
    O: function () {
        return i;
    }
});
var i,
    a,
    o = r(789020);
var s = r(442837),
    l = r(570140),
    u = r(695346),
    c = r(630388),
    d = r(981631);
function f(e, n, r) {
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
function p() {
    return {
        lastUsedObject: {},
        useActivityUrlOverride: !1,
        activityUrlOverride: null,
        filter: ''
    };
}
let h = p();
!(function (e) {
    (e.INITIALIZED = 'INITIALIZED'), (e.LOADING = 'LOADING'), (e.LOADED = 'LOADED'), (e.ERROR = 'ERROR');
})(i || (i = {}));
let _ = 'INITIALIZED',
    m = [];
function g() {
    (h = p()), (_ = 'INITIALIZED'), (m = []);
}
function E() {
    h.useActivityUrlOverride = !h.useActivityUrlOverride;
}
function v(e) {
    let { activityUrlOverride: n } = e;
    h.activityUrlOverride = n;
}
function y(e) {
    let { applicationId: n, timestamp: r } = e;
    if (null == m.find((e) => e.id === n)) return !1;
    h.lastUsedObject[n] = r;
}
function b(e) {
    let { applications: n } = e;
    (_ = 'LOADED'), (m = n.filter((e) => null != e.flags && (0, c.yE)(e.flags, d.udG.EMBEDDED)));
}
function I(e) {
    let { type: n } = e;
    _ = 'ERROR';
}
function T(e) {
    let { filter: n } = e;
    h.filter = n;
}
class S extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        h = {
            ...p(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return h;
    }
    getIsEnabled() {
        return u.Sb.getSetting() && m.length > 0;
    }
    getLastUsedObject() {
        return h.lastUsedObject;
    }
    getUseActivityUrlOverride() {
        return this.getIsEnabled() && h.useActivityUrlOverride;
    }
    getActivityUrlOverride() {
        return this.getIsEnabled() ? h.activityUrlOverride : null;
    }
    getFetchState() {
        return _;
    }
    getFilter() {
        return this.getIsEnabled() ? h.filter : '';
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? m : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != m.find((n) => n.id === e);
    }
}
f(S, 'displayName', 'DeveloperActivityShelfStore'),
    f(S, 'persistKey', 'DeveloperActivityShelfStore'),
    f(S, 'migrations', [(e) => (delete e.isEnabled, { ...e })]),
    (n.Z = new S(l.Z, {
        LOGOUT: g,
        DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: E,
        DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: v,
        DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: y,
        DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
            _ = 'LOADING';
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: b,
        DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: I,
        DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: T,
        USER_SETTINGS_PROTO_UPDATE() {}
    }));
