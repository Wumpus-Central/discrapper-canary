n.d(t, {
    $: () => p,
    A: () => S,
}),
    n(938796);
var r,
    i = n(665260),
    a = n(311907),
    s = n(73153),
    o = n(253932),
    l = n(652215);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        filter: "",
    };
}
let f = d();
var p = (function (e) {
    return (e.INITIALIZED = "INITIALIZED"), (e.LOADING = "LOADING"), (e.LOADED = "LOADED"), (e.ERROR = "ERROR"), e;
})({});
let _ = "INITIALIZED",
    h = [];

function m() {
    (f = d()), (_ = "INITIALIZED"), (h = []);
}

function g() {
    f.useActivityUrlOverride = !f.useActivityUrlOverride;
}

function E(e) {
    let { activityUrlOverride: t } = e;
    f.activityUrlOverride = t;
}

function b(e) {
    let { applicationId: t, timestamp: n } = e;
    if (null == h.find((e) => e.id === t)) return !1;
    f.lastUsedObject[t] = n;
}

function y(e) {
    let { applications: t } = e;
    (_ = "LOADED"), (h = t.filter((e) => null != e.flags && (0, i.Lt)(e.flags, l.gfo.EMBEDDED)));
}

function O(e) {
    let { type: t } = e;
    _ = "ERROR";
}

function A(e) {
    let { filter: t } = e;
    f.filter = t;
}
class v extends (r = a.Ay.PersistedStore) {
    initialize(e) {
        f = u({}, d(), null != e ? e : {});
    }
    getState() {
        return f;
    }
    getIsEnabled() {
        return o.Q_.getSetting() && h.length > 0;
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
        return this.getIsEnabled() ? f.filter : "";
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? h : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != h.find((t) => t.id === e);
    }
}
c(v, "displayName", "DeveloperActivityShelfStore"),
    c(v, "persistKey", "DeveloperActivityShelfStore"),
    c(v, "migrations", [(e) => (delete e.isEnabled, u({}, e))]);
let S = new v(s.h, {
    LOGOUT: m,
    DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: g,
    DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: E,
    DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: b,
    DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
        _ = "LOADING";
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: y,
    DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: O,
    DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: A,
    USER_SETTINGS_PROTO_UPDATE() {},
});
