"use strict";
n.d(t, { A: () => E, e: () => a });
var r,
    i = n(311907),
    s = n(73153),
    a =
        (((r = {}).NOT_FETCHED = "NOT_FETCHED"),
        (r.FETCHING = "FETCHING"),
        (r.SUCCESS = "SUCCESS"),
        (r.FAILURE = "FAILURE"),
        r);
let o = [],
    l = {},
    u = {},
    c = "NOT_FETCHED",
    d = [],
    _ = "NOT_FETCHED",
    f = [];
function p(e) {
    if (0 !== Object.keys(e).length) {
        for (let [t, n] of Object.entries(e)) {
            let e = new Set(n.map((e) => e.config_id)),
                r = l[t]?.filter((t) => !e.has(t.config_id)) ?? [];
            l[t] = [...r, ...n];
        }
        (l = { ...l }), (u = { ...u, ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])) });
    }
}
class h extends i.Ay.Store {
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
        return f;
    }
}
let E = new h(s.h, {
    LOGOUT: function () {
        (l = {}), (u = {}), (c = "NOT_FETCHED"), (d = []), (_ = "NOT_FETCHED"), (f = []);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
        c = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
        (c = "SUCCESS"), (d = Object.keys(e.configs)), p(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
        c = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function (e) {
        _ = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
        (_ = "SUCCESS"), (f = Object.keys(e.configs)), p(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
        _ = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
        u = { ...u, [e.applicationId]: "FETCHING" };
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        p({ [e.applicationId]: e.configs });
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
        u = { ...u, [e.applicationId]: "FAILURE" };
    },
});
