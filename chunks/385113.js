n.d(t, { A: () => g, e: () => s });
var i,
    a = n(311907),
    l = n(73153),
    s =
        (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
        (i.FETCHING = "FETCHING"),
        (i.SUCCESS = "SUCCESS"),
        (i.FAILURE = "FAILURE"),
        i);
let r = {},
    o = {},
    c = "NOT_FETCHED",
    d = [];
class u extends a.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return r[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
        return r[e] ?? [];
    }
    getFetchState(e) {
        return o[e] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
        return c;
    }
    getAllConfigsByApplication() {
        return r;
    }
    getFeaturedApplicationIds() {
        return d;
    }
}
let g = new u(l.h, {
    LOGOUT: function () {
        (r = {}), (o = {}), (c = "NOT_FETCHED"), (d = []);
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
        c = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
        (c = "SUCCESS"),
            (d = e.applicationIds),
            (r = { ...r, ...e.configs }),
            (o = { ...o, ...Object.fromEntries(e.applicationIds.map((e) => [e, "SUCCESS"])) });
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
        c = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
        o = { ...o, [e.applicationId]: "FETCHING" };
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
        (r = { ...r, [e.applicationId]: e.configs }), (o = { ...o, [e.applicationId]: "SUCCESS" });
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
        o = { ...o, [e.applicationId]: "FAILURE" };
    },
});
