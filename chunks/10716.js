"use strict";
n.d(t, { $: () => c, A: () => T }), n(938796);
var r = n(665260),
    i = n(311907),
    a = n(73153),
    s = n(253932),
    o = n(652215);
function l() {
    return { lastUsedObject: {}, useActivityUrlOverride: !1, activityUrlOverride: null, filter: "" };
}
let u = l();
var c = (function (e) {
    return (e.INITIALIZED = "INITIALIZED"), (e.LOADING = "LOADING"), (e.LOADED = "LOADED"), (e.ERROR = "ERROR"), e;
})({});
let d = "INITIALIZED",
    _ = [];
function f() {
    (u = l()), (d = "INITIALIZED"), (_ = []);
}
function p() {
    u.useActivityUrlOverride = !u.useActivityUrlOverride;
}
function h(e) {
    let { activityUrlOverride: t } = e;
    u.activityUrlOverride = t;
}
function m(e) {
    let { applicationId: t, timestamp: n } = e;
    if (null == _.find((e) => e.id === t)) return !1;
    u.lastUsedObject[t] = n;
}
function g(e) {
    let { applications: t } = e;
    (d = "LOADED"), (_ = t.filter((e) => null != e.flags && (0, r.Lt)(e.flags, o.gfo.EMBEDDED)));
}
function E(e) {
    let { type: t } = e;
    d = "ERROR";
}
function A(e) {
    let { filter: t } = e;
    u.filter = t;
}
class I extends i.Ay.PersistedStore {
    static displayName = "DeveloperActivityShelfStore";
    static persistKey = "DeveloperActivityShelfStore";
    initialize(e) {
        u = { ...l(), ...(e ?? {}) };
    }
    static migrations = [(e) => (delete e.isEnabled, { ...e })];
    getState() {
        return u;
    }
    getIsEnabled() {
        return s.Q_.getSetting() && _.length > 0;
    }
    getLastUsedObject() {
        return u.lastUsedObject;
    }
    getUseActivityUrlOverride() {
        return this.getIsEnabled() && u.useActivityUrlOverride;
    }
    getActivityUrlOverride() {
        return this.getIsEnabled() ? u.activityUrlOverride : null;
    }
    getFetchState() {
        return d;
    }
    getFilter() {
        return this.getIsEnabled() ? u.filter : "";
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? _ : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != _.find((t) => t.id === e);
    }
}
let T = new I(a.h, {
    LOGOUT: f,
    DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: p,
    DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: h,
    DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: m,
    DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
        d = "LOADING";
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: g,
    DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: E,
    DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: A,
    USER_SETTINGS_PROTO_UPDATE() {},
});
