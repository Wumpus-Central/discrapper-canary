n.d(t, { A: () => A, e: () => a });
var r,
    l = n(311907),
    i = n(73153),
    a =
        (((r = {}).NOT_FETCHED = "NOT_FETCHED"),
        (r.FETCHING = "FETCHING"),
        (r.SUCCESS = "SUCCESS"),
        (r.FAILURE = "FAILURE"),
        r);
let s = [],
    o = {},
    u = {},
    c = "NOT_FETCHED",
    d = [],
    _ = "NOT_FETCHED",
    p = [];
function h(e) {
    if (0 !== Object.keys(e).length) {
        for (let [t, n] of Object.entries(e)) {
            let e = new Set(n.map((e) => e.config_id)),
                r = o[t]?.filter((t) => !e.has(t.config_id)) ?? [];
            o[t] = [...r, ...n];
        }
        (o = { ...o }), (u = { ...u, ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])) });
    }
}
class m extends l.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return o[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
        return o[e] ?? s;
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
        return o;
    }
    getFeaturedApplicationIds() {
        return d;
    }
    getDeveloperApplicationIds() {
        return p;
    }
}
let A = new m(i.h, {
    LOGOUT: function () {
        (o = {}), (u = {}), (c = "NOT_FETCHED"), (d = []), (_ = "NOT_FETCHED"), (p = []);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
        c = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
        (c = "SUCCESS"), (d = Object.keys(e.configs)), h(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
        c = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function (e) {
        _ = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
        (_ = "SUCCESS"), (p = Object.keys(e.configs)), h(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
        _ = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
        u = { ...u, [e.applicationId]: "FETCHING" };
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        h({ [e.applicationId]: e.configs });
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
        u = { ...u, [e.applicationId]: "FAILURE" };
    },
});
