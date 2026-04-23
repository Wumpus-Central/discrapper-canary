n.d(t, { A: () => A, e: () => a });
var i,
    r = n(17928),
    l = n(228366),
    a =
        (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
        (i.FETCHING = "FETCHING"),
        (i.SUCCESS = "SUCCESS"),
        (i.FAILURE = "FAILURE"),
        i);
let s = [],
    o = {},
    d = {},
    u = "NOT_FETCHED",
    c = [],
    h = "NOT_FETCHED",
    E = [];
function _(e) {
    if (0 !== Object.keys(e).length) {
        for (let [t, n] of Object.entries(e)) {
            let e = new Set(n.map((e) => e.config_id)),
                i = o[t]?.filter((t) => !e.has(t.config_id)) ?? [];
            o[t] = [...i, ...n];
        }
        (o = { ...o }), (d = { ...d, ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])) });
    }
}
class p extends r.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return o[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
        return o[e] ?? s;
    }
    getFetchState(e) {
        return d[e] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
        return u;
    }
    getDeveloperFetchState() {
        return h;
    }
    getAllConfigsByApplication() {
        return o;
    }
    getFeaturedApplicationIds() {
        return c;
    }
    getDeveloperApplicationIds() {
        return E;
    }
}
let A = new p(l.h, {
    LOGOUT: function () {
        (o = {}), (d = {}), (u = "NOT_FETCHED"), (c = []), (h = "NOT_FETCHED"), (E = []);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
        u = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
        (u = "SUCCESS"), (c = Object.keys(e.configs)), _(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
        u = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function (e) {
        h = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
        (h = "SUCCESS"), (E = Object.keys(e.configs)), _(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
        h = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
        d = { ...d, [e.applicationId]: "FETCHING" };
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        _({ [e.applicationId]: e.configs });
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
        d = { ...d, [e.applicationId]: "FAILURE" };
    },
});
