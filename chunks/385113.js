"use strict";
n.d(t, { A: () => m, e: () => a });
var i,
    r = n(17928),
    s = n(228366),
    a =
        (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
        (i.FETCHING = "FETCHING"),
        (i.SUCCESS = "SUCCESS"),
        (i.FAILURE = "FAILURE"),
        i);
let o = [],
    l = {},
    u = {},
    c = "NOT_FETCHED",
    d = [],
    _ = "NOT_FETCHED",
    h = [];
function f(e) {
    if (0 !== Object.keys(e).length) {
        for (let [t, n] of Object.entries(e)) {
            let e = new Set(n.map((e) => e.config_id)),
                i = l[t]?.filter((t) => !e.has(t.config_id)) ?? [];
            l[t] = [...i, ...n];
        }
        (l = { ...l }), (u = { ...u, ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])) });
    }
}
function p() {
    (l = {}), (u = {}), (c = "NOT_FETCHED"), (d = []), (_ = "NOT_FETCHED"), (h = []);
}
class E extends r.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return l[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
        return l[e] ?? o;
    }
    getFetchState(e) {
        return u[e] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
        return c;
    }
    getDeveloperFetchState() {
        return _;
    }
    getAllConfigsByApplication() {
        return l;
    }
    getFeaturedApplicationIds() {
        return d;
    }
    getDeveloperApplicationIds() {
        return h;
    }
}
let m = new E(s.h, {
    LOGOUT: p,
    APPLICATION_WIDGET_CONFIG_DEBUG_RESET: p,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
        c = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
        (c = "SUCCESS"), (d = Object.keys(e.configs)), f(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
        c = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function () {
        _ = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
        (_ = "SUCCESS"), (h = Object.keys(e.configs)), f(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
        _ = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
        u = { ...u, [e.applicationId]: "FETCHING" };
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        f({ [e.applicationId]: e.configs });
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
        u = { ...u, [e.applicationId]: "FAILURE" };
    },
});
