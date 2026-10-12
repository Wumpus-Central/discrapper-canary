E.d(e, { A: () => O, e: () => I });
var i,
    n = E(17928),
    C = E(73153),
    I =
        (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
        (i.FETCHING = "FETCHING"),
        (i.SUCCESS = "SUCCESS"),
        (i.FAILURE = "FAILURE"),
        i);
let _ = [],
    T = {},
    c = {},
    o = "NOT_FETCHED",
    r = [],
    A = "NOT_FETCHED",
    F = [];
function a(t) {
    if (0 !== Object.keys(t).length) {
        for (let [e, E] of Object.entries(t)) {
            let t = new Set(E.map((t) => t.config_id)),
                i = T[e]?.filter((e) => !t.has(e.config_id)) ?? [];
            T[e] = [...i, ...E];
        }
        ((T = { ...T }), (c = { ...c, ...Object.fromEntries(Object.keys(t).map((t) => [t, "SUCCESS"])) }));
    }
}
function p() {
    ((T = {}), (c = {}), (o = "NOT_FETCHED"), (r = []), (A = "NOT_FETCHED"), (F = []));
}
class s extends n.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(t) {
        return T[t]?.[0] ?? void 0;
    }
    getConfigs(t) {
        return T[t] ?? _;
    }
    getFetchState(t) {
        return c[t] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
        return o;
    }
    getDeveloperFetchState() {
        return A;
    }
    getAllConfigsByApplication() {
        return T;
    }
    getFeaturedApplicationIds() {
        return r;
    }
    getDeveloperApplicationIds() {
        return F;
    }
}
let O = new s(C.h, {
    LOGOUT: p,
    APPLICATION_WIDGET_CONFIG_DEBUG_RESET: p,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (t) {
        o = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (t) {
        ((o = "SUCCESS"), (r = Object.keys(t.configs)), a(t.configs));
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
        o = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function () {
        A = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (t) {
        ((A = "SUCCESS"), (F = Object.keys(t.configs)), a(t.configs));
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
        A = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function (t) {
        c = { ...c, [t.applicationId]: "FETCHING" };
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (t) {
        a({ [t.applicationId]: t.configs });
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (t) {
        c = { ...c, [t.applicationId]: "FAILURE" };
    },
});
