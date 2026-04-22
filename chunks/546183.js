"use strict";
n.r(t), n.d(t, { FetchState: () => d, default: () => I });
var r,
    i = n(311907),
    s = n(73153),
    a = n(403362),
    o = n(734057),
    l = n(134861),
    u = n(320501),
    d = (((r = {}).NOT_FETCHED = "NOT_FETCHED"), (r.FETCHING = "FETCHING"), (r.FETCHED = "FETCHED"), r);
let c = new Map(),
    _ = [],
    f = [],
    E = "NOT_FETCHED",
    h = new Map(),
    p = 0;
function m() {
    f = (_ = [...c.values()]).filter((e) => {
        let { application: t } = e;
        return null == t.parent_id;
    });
}
function g(e, t) {
    if (null == t) (E = e), h.clear(), (p += 1);
    else {
        for (let n of t) h.set(n, e);
        p += 1;
    }
}
class A extends i.Ay.Store {
    static displayName = "AuthorizedAppsStore";
    initialize() {
        this.waitFor(o.A, l.A, u.A);
    }
    getNewestTokenForApplication(e) {
        return null == e ? null : (c.get(e) ?? null);
    }
    getNewestTokens() {
        return _;
    }
    getNewestTokensForNonChildrenApplications() {
        return f;
    }
    getFetchState() {
        return E;
    }
    getFetchStateForApplication(e) {
        return "FETCHING" === E || "FETCHED" === E ? E : (h.get(e) ?? E);
    }
    getApplicationFetchStateVersion() {
        return p;
    }
}
let I = new A(s.h, {
    USER_AUTHORIZED_APPS_REQUEST: function (e) {
        "full" === e.request.type ? g("FETCHING") : g("FETCHING", e.request.applicationIds);
    },
    USER_AUTHORIZED_APPS_REQUEST_FAILED: function (e) {
        "full" === e.request.type ? g("FETCHED") : g("FETCHED", e.request.applicationIds);
    },
    USER_AUTHORIZED_APPS_UPDATE: function (e) {
        if (e.isFullFetch) g("FETCHED"), (c = new Map(Object.entries(e.tokens).filter(a.QE))), m();
        else {
            for (let [t, n] of (g("FETCHED", Object.keys(e.tokens)), Object.entries(e.tokens)))
                null == n ? c.delete(t) : c.set(t, n);
            m();
        }
    },
    OAUTH2_TOKEN_CREATE: function (e) {
        let { id: t, application: n, scopes: r } = e;
        c.set(n.id, { id: t, application: n, scopes: r }), m();
    },
    OAUTH2_TOKEN_DELETE: function (e) {
        let { id: t, applicationId: n } = e,
            r = c.get(n);
        if (null == r || r.id !== t) return !1;
        c.delete(r.application.id), m();
    },
});
