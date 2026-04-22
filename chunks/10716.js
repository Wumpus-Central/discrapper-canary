"use strict";
n.d(t, { $: () => c, A: () => h });
var r,
    i = n(311907),
    s = n(73153),
    a = n(20015),
    o = n(253932),
    l = n(652215);
function u() {
    return { lastUsedObject: {}, useActivityUrlOverride: !1, activityUrlOverride: null, filter: "" };
}
let d = u();
var c =
    (((r = {}).INITIALIZED = "INITIALIZED"), (r.LOADING = "LOADING"), (r.LOADED = "LOADED"), (r.ERROR = "ERROR"), r);
let _ = "INITIALIZED",
    f = [];
class E extends i.Ay.PersistedStore {
    static displayName = "DeveloperActivityShelfStore";
    static persistKey = "DeveloperActivityShelfStore";
    initialize(e) {
        d = { ...u(), ...(e ?? {}) };
    }
    static migrations = [(e) => (delete e.isEnabled, { ...e })];
    getState() {
        return d;
    }
    getIsEnabled() {
        return o.Q_.getSetting() && f.length > 0;
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
        return this.getIsEnabled() ? d.filter : "";
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? f : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != f.find((t) => t.id === e);
    }
}
let h = new E(s.h, {
    LOGOUT: function () {
        (d = u()), (_ = "INITIALIZED"), (f = []);
    },
    DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function () {
        d.useActivityUrlOverride = !d.useActivityUrlOverride;
    },
    DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function (e) {
        let { activityUrlOverride: t } = e;
        d.activityUrlOverride = t;
    },
    DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function (e) {
        let { applicationId: t, timestamp: n } = e;
        if (null == f.find((e) => e.id === t)) return !1;
        d.lastUsedObject[t] = n;
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
        _ = "LOADING";
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function (e) {
        let { applications: t } = e;
        (_ = "LOADED"), (f = t.filter((e) => (0, a.n)(e, l.gfo.EMBEDDED)));
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function (e) {
        let { type: t } = e;
        _ = "ERROR";
    },
    DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function (e) {
        let { filter: t } = e;
        d.filter = t;
    },
    USER_SETTINGS_PROTO_UPDATE() {},
});
