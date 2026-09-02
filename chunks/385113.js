i.d(t, { A: () => m, e: () => a });
var s,
    n = i(17928),
    r = i(228366),
    a =
        (((s = {}).NOT_FETCHED = "NOT_FETCHED"),
        (s.FETCHING = "FETCHING"),
        (s.SUCCESS = "SUCCESS"),
        (s.FAILURE = "FAILURE"),
        s);
let l = [],
    c = {},
    o = {},
    d = "NOT_FETCHED",
    h = [],
    u = "NOT_FETCHED",
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
    (c = {}), (o = {}), (d = "NOT_FETCHED"), (h = []), (u = "NOT_FETCHED"), (j = []);
}
class f extends n.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return c[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
        return c[e] ?? l;
    }
    getFetchState(e) {
        return o[e] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
        return d;
    }
    getDeveloperFetchState() {
        return u;
    }
    getAllConfigsByApplication() {
        return c;
    }
    getFeaturedApplicationIds() {
        return h;
    }
    getDeveloperApplicationIds() {
        return j;
    }
}
let m = new f(r.h, {
    LOGOUT: v,
    APPLICATION_WIDGET_CONFIG_DEBUG_RESET: v,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
        d = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
        (d = "SUCCESS"), (h = Object.keys(e.configs)), x(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
        d = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function () {
        u = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
        (u = "SUCCESS"), (j = Object.keys(e.configs)), x(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
        u = "FAILURE";
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
