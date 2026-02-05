"use strict";
n.d(t, { A: () => p, e: () => a });
var r = n(311907),
    i = n(73153),
    a = (function (e) {
        return (e.NOT_FETCHED = "NOT_FETCHED"), (e.FETCHING = "FETCHING"), (e.FETCHED = "FETCHED"), e;
    })({});
let s = new Map(),
    o = new Map();
function l(e, t) {
    let n = new Map(t.map((e) => [e.application_id, e]));
    s.set(e, { identities: t, byApplication: n }), o.set(e, "FETCHED");
}
function u(e) {
    o.set(e.userId, "FETCHING");
}
function c(e) {
    o.set(e.userId, "FETCHED"), l(e.userId, e.identities);
}
function d(e) {
    o.set(e.userId, "FETCHED");
}
function _(e) {
    let t = s.get(e.user_id);
    if (null == t) return !1;
    l(
        e.user_id,
        t.identities.filter((t) => t.application_id !== e.application_id),
    );
}
class f extends r.Ay.Store {
    getUserIdentities(e) {
        return s.get(e)?.identities ?? null;
    }
    getUserIdentityByApplication(e, t) {
        return s.get(e)?.byApplication.get(t) ?? null;
    }
    getFetchState(e) {
        return o.get(e) ?? "NOT_FETCHED";
    }
    isFetchingUser(e) {
        return "FETCHING" === this.getFetchState(e);
    }
}
let p = new f(i.h, {
    USER_APPLICATION_IDENTITY_FETCH_USER_START: u,
    USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: c,
    USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: d,
    USER_APPLICATION_IDENTITY_REMOVE: _,
});
