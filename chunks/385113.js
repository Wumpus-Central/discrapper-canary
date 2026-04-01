"use strict";
n.d(t, { A: () => g, e: () => s });
var r = n(311907),
    i = n(73153),
    s = (function (e) {
        return (
            (e.NOT_FETCHED = "NOT_FETCHED"),
            (e.FETCHING = "FETCHING"),
            (e.SUCCESS = "SUCCESS"),
            (e.FAILURE = "FAILURE"),
            e
        );
    })({});
let a = {},
    o = {},
    l = "NOT_FETCHED",
    u = [];
function c() {
    (a = {}), (o = {}), (l = "NOT_FETCHED"), (u = []);
}
function d(e) {
    l = "FETCHING";
}
function _(e) {
    (l = "SUCCESS"),
        (u = e.applicationIds),
        (a = { ...a, ...e.configs }),
        (o = { ...o, ...Object.fromEntries(e.applicationIds.map((e) => [e, "SUCCESS"])) });
}
function f() {
    l = "FAILURE";
}
function p(e) {
    o = { ...o, [e.applicationId]: "FETCHING" };
}
function h(e) {
    (a = { ...a, [e.applicationId]: e.configs }), (o = { ...o, [e.applicationId]: "SUCCESS" });
}
function m(e) {
    o = { ...o, [e.applicationId]: "FAILURE" };
}
class E extends r.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return a[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
        return a[e] ?? [];
    }
    getFetchState(e) {
        return o[e] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
        return l;
    }
    getAllConfigsByApplication() {
        return a;
    }
    getFeaturedApplicationIds() {
        return u;
    }
}
let g = new E(i.h, {
    LOGOUT: c,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: d,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: _,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: f,
    APPLICATION_WIDGET_CONFIG_FETCH_START: p,
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: h,
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: m,
});
