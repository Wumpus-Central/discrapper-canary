i.d(t, { A: () => R, e: () => r });
var E,
    s = i(17928),
    n = i(228366),
    r =
        (((E = {}).NOT_FETCHED = "NOT_FETCHED"),
        (E.FETCHING = "FETCHING"),
        (E.SUCCESS = "SUCCESS"),
        (E.FAILURE = "FAILURE"),
        E);
let l = [],
    a = {},
    _ = {},
    S = "NOT_FETCHED",
    A = [],
    c = "NOT_FETCHED",
    o = [];
function I(e) {
    if (0 !== Object.keys(e).length) {
        for (let [t, i] of Object.entries(e)) {
            let e = new Set(i.map((e) => e.config_id)),
                E = a[t]?.filter((t) => !e.has(t.config_id)) ?? [];
            a[t] = [...E, ...i];
        }
        (a = { ...a }), (_ = { ..._, ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])) });
    }
}
function d() {
    (a = {}), (_ = {}), (S = "NOT_FETCHED"), (A = []), (c = "NOT_FETCHED"), (o = []);
}
class T extends s.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return a[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
        return a[e] ?? l;
    }
    getFetchState(e) {
        return _[e] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
        return S;
    }
    getDeveloperFetchState() {
        return c;
    }
    getAllConfigsByApplication() {
        return a;
    }
    getFeaturedApplicationIds() {
        return A;
    }
    getDeveloperApplicationIds() {
        return o;
    }
}
let R = new T(n.h, {
    LOGOUT: d,
    APPLICATION_WIDGET_CONFIG_DEBUG_RESET: d,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
        S = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
        (S = "SUCCESS"), (A = Object.keys(e.configs)), I(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
        S = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function () {
        c = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
        (c = "SUCCESS"), (o = Object.keys(e.configs)), I(e.configs);
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
        c = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
        _ = { ..._, [e.applicationId]: "FETCHING" };
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        I({ [e.applicationId]: e.configs });
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
        _ = { ..._, [e.applicationId]: "FAILURE" };
    },
});
