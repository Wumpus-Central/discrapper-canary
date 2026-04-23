"use strict";
n.r(t), n.d(t, { FetchState: () => _, default: () => I });
var i,
    r = n(17928),
    s = n(228366),
    a = n(403362),
    o = n(734057),
    l = n(134861),
    d = n(232835),
    _ = (((i = {}).NOT_FETCHED = "NOT_FETCHED"), (i.FETCHING = "FETCHING"), (i.FETCHED = "FETCHED"), i);
let u = new Map(),
    c = [],
    E = [],
    h = "NOT_FETCHED",
    m = new Map(),
    f = 0;
function g() {
    E = (c = [...u.values()]).filter((e) => {
        let { application: t } = e;
        return null == t.parent_id;
    });
}
function p(e, t) {
    if (null == t) (h = e), m.clear(), (f += 1);
    else {
        for (let n of t) m.set(n, e);
        f += 1;
    }
}
class A extends r.Ay.Store {
    static displayName = "AuthorizedAppsStore";
    initialize() {
        this.waitFor(o.A, l.A, d.A);
    }
    getNewestTokenForApplication(e) {
        return null == e ? null : (u.get(e) ?? null);
    }
    getNewestTokens() {
        return c;
    }
    getNewestTokensForNonChildrenApplications() {
        return E;
    }
    getFetchState() {
        return h;
    }
    getFetchStateForApplication(e) {
        return "FETCHING" === h || "FETCHED" === h ? h : (m.get(e) ?? h);
    }
    getApplicationFetchStateVersion() {
        return f;
    }
}
let I = new A(s.h, {
    USER_AUTHORIZED_APPS_REQUEST: function (e) {
        "full" === e.request.type ? p("FETCHING") : p("FETCHING", e.request.applicationIds);
    },
    USER_AUTHORIZED_APPS_REQUEST_FAILED: function (e) {
        "full" === e.request.type ? p("FETCHED") : p("FETCHED", e.request.applicationIds);
    },
    USER_AUTHORIZED_APPS_UPDATE: function (e) {
        if (e.isFullFetch) p("FETCHED"), (u = new Map(Object.entries(e.tokens).filter(a.QE))), g();
        else {
            for (let [t, n] of (p("FETCHED", Object.keys(e.tokens)), Object.entries(e.tokens)))
                null == n ? u.delete(t) : u.set(t, n);
            g();
        }
    },
    OAUTH2_TOKEN_CREATE: function (e) {
        let { id: t, application: n, scopes: i } = e;
        u.set(n.id, { id: t, application: n, scopes: i }), g();
    },
    OAUTH2_TOKEN_DELETE: function (e) {
        let { id: t, applicationId: n } = e,
            i = u.get(n);
        if (null == i || i.id !== t) return !1;
        u.delete(i.application.id), g();
    },
});
