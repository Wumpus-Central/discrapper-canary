n.d(t, { A: () => h, e: () => l });
var i,
    s = n(17928),
    a = n(228366),
    l =
        (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
        (i.FETCHING = "FETCHING"),
        (i.SUCCESS = "SUCCESS"),
        (i.FAILURE = "FAILURE"),
        i);
let r = [],
    E = {},
    o = {},
    c = "NOT_FETCHED",
    d = [],
    _ = "NOT_FETCHED",
    S = [];
function u(e) {
    if (0 !== Object.keys(e).length) {
        for (let [t, n] of Object.entries(e)) {
            let e = new Set(n.map((e) => e.config_id)),
                i = E[t]?.filter((t) => !e.has(t.config_id)) ?? [];
            E[t] = [...i, ...n];
        }
        (E = { ...E }), (o = { ...o, ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])) });
    }
}
function A() {
    (E = {}), (o = {}), (c = "NOT_FETCHED"), (d = []), (_ = "NOT_FETCHED"), (S = []);
}
class I extends s.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return E[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
        return E[e] ?? r;
    }
    getFetchState(e) {
        return o[e] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
        return c;
    }
    getDeveloperFetchState() {
        return _;
    }
    getAllConfigsByApplication() {
        return E;
    }
    getFeaturedApplicationIds() {
        return d;
    }
    getDeveloperApplicationIds() {
        return S;
    }
}
let h = new I(a.h, {
    LOGOUT: A,
    APPLICATION_WIDGET_CONFIG_DEBUG_RESET: A,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
        c = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
        (c = "SUCCESS"), (d = Object.keys(e.configs)), u(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
        c = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function () {
        _ = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
        (_ = "SUCCESS"), (S = Object.keys(e.configs)), u(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
        _ = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
        o = { ...o, [e.applicationId]: "FETCHING" };
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        u({ [e.applicationId]: e.configs });
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
        o = { ...o, [e.applicationId]: "FAILURE" };
    },
});
