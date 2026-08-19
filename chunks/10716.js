"use strict";
n.d(t, { $: () => u, A: () => h });
var i,
    r = n(17928),
    a = n(228366),
    s = n(20015),
    l = n(885386),
    o = n(652215);
function d() {
    return { lastUsedObject: {}, useActivityUrlOverride: !1, activityUrlOverride: null, filter: "" };
}
let c = d();
var u =
    (((i = {}).INITIALIZED = "INITIALIZED"), (i.LOADING = "LOADING"), (i.LOADED = "LOADED"), (i.ERROR = "ERROR"), i);
let _ = "INITIALIZED",
    E = [];
class A extends r.Ay.PersistedStore {
    static displayName = "DeveloperActivityShelfStore";
    static persistKey = "DeveloperActivityShelfStore";
    initialize(e) {
        c = { ...d(), ...(e ?? {}) };
    }
    static migrations = [(e) => (delete e.isEnabled, { ...e })];
    getState() {
        return c;
    }
    getIsEnabled() {
        return l.Q_.getSetting() && E.length > 0;
    }
    getLastUsedObject() {
        return c.lastUsedObject;
    }
    getUseActivityUrlOverride() {
        return this.getIsEnabled() && c.useActivityUrlOverride;
    }
    getActivityUrlOverride() {
        return this.getIsEnabled() ? c.activityUrlOverride : null;
    }
    getFetchState() {
        return _;
    }
    getFilter() {
        return this.getIsEnabled() ? c.filter : "";
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? E : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != E.find((t) => t.id === e);
    }
}
let h = new A(a.h, {
    LOGOUT: function () {
        (c = d()), (_ = "INITIALIZED"), (E = []);
    },
    DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function () {
        c.useActivityUrlOverride = !c.useActivityUrlOverride;
    },
    DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function (e) {
        let { activityUrlOverride: t } = e;
        c.activityUrlOverride = t;
    },
    DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function (e) {
        let { applicationId: t, timestamp: n } = e;
        if (null == E.find((e) => e.id === t)) return !1;
        c.lastUsedObject[t] = n;
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
        _ = "LOADING";
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function (e) {
        let { applications: t } = e;
        (_ = "LOADED"), (E = t.filter((e) => (0, s.n)(e, o.gfo.EMBEDDED)));
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function (e) {
        let { type: t } = e;
        _ = "ERROR";
    },
    DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function (e) {
        let { filter: t } = e;
        c.filter = t;
    },
    USER_SETTINGS_PROTO_UPDATE() {},
});
