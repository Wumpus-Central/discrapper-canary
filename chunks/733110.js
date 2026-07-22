"use strict";
n.r(t), n.d(t, { FetchState: () => c, default: () => m });
var i,
    r = n(17928),
    a = n(228366),
    s = n(734057),
    l = n(134861),
    o = n(232835),
    d = n(403362),
    c = (((i = {}).NOT_FETCHED = "NOT_FETCHED"), (i.FETCHING = "FETCHING"), (i.FETCHED = "FETCHED"), i);
let u = new Map(),
    _ = [],
    E = [],
    A = "NOT_FETCHED",
    h = new Map(),
    I = 0;
function f() {
    E = (_ = [...u.values()]).filter((e) => {
        let { application: t } = e;
        return null == t.parent_id;
    });
}
function p(e, t) {
    if (null == t) (A = e), h.clear(), (I += 1);
    else {
        for (let n of t) h.set(n, e);
        I += 1;
    }
}
class T extends r.Ay.Store {
    static displayName = "AuthorizedAppsStore";
    initialize() {
        this.waitFor(s.A, l.A, o.A);
    }
    getNewestTokenForApplication(e) {
        return null == e ? null : (u.get(e) ?? null);
    }
    getNewestTokens() {
        return _;
    }
    getNewestTokensForNonChildrenApplications() {
        return E;
    }
    getFetchState() {
        return A;
    }
    getFetchStateForApplication(e) {
        return "FETCHING" === A || "FETCHED" === A ? A : (h.get(e) ?? A);
    }
    getApplicationFetchStateVersion() {
        return I;
    }
}
let m = new T(a.h, {
    USER_AUTHORIZED_APPS_REQUEST: function (e) {
        "full" === e.request.type ? p("FETCHING") : p("FETCHING", e.request.applicationIds);
    },
    USER_AUTHORIZED_APPS_REQUEST_CANCELLED: function (e) {
        let t = !1;
        for (let n of e.applicationIds) "FETCHING" === h.get(n) && (h.delete(n), (t = !0));
        t && (I += 1);
    },
    USER_AUTHORIZED_APPS_REQUEST_FAILED: function (e) {
        "full" === e.request.type ? p("FETCHED") : p("FETCHED", e.request.applicationIds);
    },
    USER_AUTHORIZED_APPS_UPDATE: function (e) {
        if (e.isFullFetch) p("FETCHED"), (u = new Map(Object.entries(e.tokens).filter(d.QE))), f();
        else {
            for (let [t, n] of (p("FETCHED", Object.keys(e.tokens)), Object.entries(e.tokens)))
                null == n ? u.delete(t) : u.set(t, n);
            f();
        }
    },
    OAUTH2_TOKEN_CREATE: function (e) {
        let { id: t, application: n, scopes: i } = e;
        u.set(n.id, { id: t, application: n, scopes: i }), f();
    },
    OAUTH2_TOKEN_DELETE: function (e) {
        let { id: t, applicationId: n } = e,
            i = u.get(n);
        if (null == i || i.id !== t) return !1;
        u.delete(i.application.id), f();
    },
    LOGOUT: function () {
        (u = new Map()), (_ = []), (E = []), (A = "NOT_FETCHED"), h.clear(), (I += 1);
    },
});
