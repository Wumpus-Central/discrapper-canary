"use strict";
n.d(t, { A: () => N, e: () => s });
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
let a = [],
    o = {},
    l = {},
    u = "NOT_FETCHED",
    c = [],
    d = "NOT_FETCHED",
    _ = [];
function f(e) {
    if (0 !== Object.keys(e).length) {
        for (let [t, n] of Object.entries(e)) {
            let e = new Set(n.map((e) => e.config_id)),
                r = o[t]?.filter((t) => !e.has(t.config_id)) ?? [];
            o[t] = [...r, ...n];
        }
        (o = { ...o }), (l = { ...l, ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])) });
    }
}
function p() {
    (o = {}), (l = {}), (u = "NOT_FETCHED"), (c = []), (d = "NOT_FETCHED"), (_ = []);
}
function h(e) {
    u = "FETCHING";
}
function m(e) {
    (u = "SUCCESS"), (c = Object.keys(e.configs)), f(e.configs);
}
function E() {
    u = "FAILURE";
}
function g(e) {
    d = "FETCHING";
}
function A(e) {
    (d = "SUCCESS"), (_ = Object.keys(e.configs)), f(e.configs);
}
function I() {
    d = "FAILURE";
}
function T(e) {
    l = { ...l, [e.applicationId]: "FETCHING" };
}
function S(e) {
    f({ [e.applicationId]: e.configs });
}
function y(e) {
    l = { ...l, [e.applicationId]: "FAILURE" };
}
class v extends r.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return o[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
        return o[e] ?? a;
    }
    getFetchState(e) {
        return l[e] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
        return u;
    }
    getDeveloperFetchState() {
        return d;
    }
    getAllConfigsByApplication() {
        return o;
    }
    getFeaturedApplicationIds() {
        return c;
    }
    getDeveloperApplicationIds() {
        return _;
    }
}
let N = new v(i.h, {
    LOGOUT: p,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: h,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: m,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: E,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: g,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: A,
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: I,
    APPLICATION_WIDGET_CONFIG_FETCH_START: T,
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: S,
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: y,
});
