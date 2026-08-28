i.d(t, { A: () => f, e: () => l });
var s,
    n = i(17928),
    r = i(228366),
    l =
        (((s = {}).NOT_FETCHED = "NOT_FETCHED"),
        (s.FETCHING = "FETCHING"),
        (s.SUCCESS = "SUCCESS"),
        (s.FAILURE = "FAILURE"),
        s);
let a = [],
    c = {},
    o = {},
    d = "NOT_FETCHED",
    u = [],
    h = "NOT_FETCHED",
    j = [];
function x(e) {
    if (0 !== Object.keys(e).length) {
        for (let [t, i] of Object.entries(e)) {
            let e = new Set(i.map((e) => e.config_id)),
                s = c[t]?.filter((t) => !e.has(t.config_id)) ?? [];
            c[t] = [...s, ...i];
        }
        (c = { ...c }), (o = { ...o, ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])) });
    }
}
function v() {
    (c = {}), (o = {}), (d = "NOT_FETCHED"), (u = []), (h = "NOT_FETCHED"), (j = []);
}
class m extends n.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return c[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
        return c[e] ?? a;
    }
    getFetchState(e) {
        return o[e] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
        return d;
    }
    getDeveloperFetchState() {
        return h;
    }
    getAllConfigsByApplication() {
        return c;
    }
    getFeaturedApplicationIds() {
        return u;
    }
    getDeveloperApplicationIds() {
        return j;
    }
}
let f = new m(r.h, {
    LOGOUT: v,
    APPLICATION_WIDGET_CONFIG_DEBUG_RESET: v,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
        d = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
        (d = "SUCCESS"), (u = Object.keys(e.configs)), x(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
        d = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function () {
        h = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
        (h = "SUCCESS"), (j = Object.keys(e.configs)), x(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
        h = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
        o = { ...o, [e.applicationId]: "FETCHING" };
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        x({ [e.applicationId]: e.configs });
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
        o = { ...o, [e.applicationId]: "FAILURE" };
    },
});
