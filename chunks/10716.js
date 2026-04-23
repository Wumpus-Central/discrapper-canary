"use strict";
n.d(t, { $: () => u, A: () => m });
var i,
    r = n(17928),
    s = n(228366),
    a = n(20015),
    o = n(253932),
    l = n(652215);
function d() {
    return { lastUsedObject: {}, useActivityUrlOverride: !1, activityUrlOverride: null, filter: "" };
}
let _ = d();
var u =
    (((i = {}).INITIALIZED = "INITIALIZED"), (i.LOADING = "LOADING"), (i.LOADED = "LOADED"), (i.ERROR = "ERROR"), i);
let c = "INITIALIZED",
    E = [];
class h extends r.Ay.PersistedStore {
    static displayName = "DeveloperActivityShelfStore";
    static persistKey = "DeveloperActivityShelfStore";
    initialize(e) {
        _ = { ...d(), ...(e ?? {}) };
    }
    static migrations = [(e) => (delete e.isEnabled, { ...e })];
    getState() {
        return _;
    }
    getIsEnabled() {
        return o.Q_.getSetting() && E.length > 0;
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
        return c;
    }
    getFilter() {
        return this.getIsEnabled() ? _.filter : "";
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? E : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != E.find((t) => t.id === e);
    }
}
let m = new h(s.h, {
    LOGOUT: function () {
        (_ = d()), (c = "INITIALIZED"), (E = []);
    },
    DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function () {
        _.useActivityUrlOverride = !_.useActivityUrlOverride;
    },
    DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function (e) {
        let { activityUrlOverride: t } = e;
        _.activityUrlOverride = t;
    },
    DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function (e) {
        let { applicationId: t, timestamp: n } = e;
        if (null == E.find((e) => e.id === t)) return !1;
        _.lastUsedObject[t] = n;
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
        c = "LOADING";
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function (e) {
        let { applications: t } = e;
        (c = "LOADED"), (E = t.filter((e) => (0, a.n)(e, l.gfo.EMBEDDED)));
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function (e) {
        let { type: t } = e;
        c = "ERROR";
    },
    DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function (e) {
        let { filter: t } = e;
        _.filter = t;
    },
    USER_SETTINGS_PROTO_UPDATE() {},
});
