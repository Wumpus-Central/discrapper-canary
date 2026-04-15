"use strict";
n.r(t), n.d(t, { FetchState: () => u, default: () => v });
var r = n(311907),
    i = n(73153),
    s = n(403362),
    a = n(734057),
    o = n(134861),
    l = n(320501),
    u = (function (e) {
        return (e.NOT_FETCHED = "NOT_FETCHED"), (e.FETCHING = "FETCHING"), (e.FETCHED = "FETCHED"), e;
    })({});
let c = new Map(),
    d = [],
    _ = [],
    f = "NOT_FETCHED",
    p = new Map(),
    h = 0;
function m() {
    _ = (d = [...c.values()]).filter((e) => {
        let { application: t } = e;
        return null == t.parent_id;
    });
}
function E(e, t) {
    if (null == t) (f = e), p.clear(), (h += 1);
    else {
        for (let n of t) p.set(n, e);
        h += 1;
    }
}
function g(e) {
    "full" === e.request.type ? E("FETCHING") : E("FETCHING", e.request.applicationIds);
}
function A(e) {
    "full" === e.request.type ? E("FETCHED") : E("FETCHED", e.request.applicationIds);
}
function I(e) {
    if (e.isFullFetch) E("FETCHED"), (c = new Map(Object.entries(e.tokens).filter(s.QE))), m();
    else {
        for (let [t, n] of (E("FETCHED", Object.keys(e.tokens)), Object.entries(e.tokens)))
            null == n ? c.delete(t) : c.set(t, n);
        m();
    }
}
function T(e) {
    let { id: t, application: n, scopes: r } = e;
    c.set(n.id, { id: t, application: n, scopes: r }), m();
}
function S(e) {
    let { id: t, applicationId: n } = e,
        r = c.get(n);
    if (null == r || r.id !== t) return !1;
    c.delete(r.application.id), m();
}
class y extends r.Ay.Store {
    static displayName = "AuthorizedAppsStore";
    initialize() {
        this.waitFor(a.A, o.A, l.A);
    }
    getNewestTokenForApplication(e) {
        return null == e ? null : (c.get(e) ?? null);
    }
    getNewestTokens() {
        return d;
    }
    getNewestTokensForNonChildrenApplications() {
        return _;
    }
    getFetchState() {
        return f;
    }
    getFetchStateForApplication(e) {
        return "FETCHING" === f || "FETCHED" === f ? f : (p.get(e) ?? f);
    }
    getApplicationFetchStateVersion() {
        return h;
    }
}
let v = new y(i.h, {
    USER_AUTHORIZED_APPS_REQUEST: g,
    USER_AUTHORIZED_APPS_REQUEST_FAILED: A,
    USER_AUTHORIZED_APPS_UPDATE: I,
    OAUTH2_TOKEN_CREATE: T,
    OAUTH2_TOKEN_DELETE: S,
});
