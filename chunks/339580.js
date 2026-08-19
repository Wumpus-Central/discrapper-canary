"use strict";
n.d(t, { A: () => u, e: () => s });
var i,
    r = n(17928),
    a = n(228366),
    s = (((i = {}).NOT_FETCHED = "NOT_FETCHED"), (i.FETCHING = "FETCHING"), (i.FETCHED = "FETCHED"), i);
let l = new Map(),
    o = new Map();
function d(e, t) {
    let n = new Map(t.map((e) => [e.application_id, e]));
    l.set(e, { identities: t, byApplication: n }), o.set(e, "FETCHED");
}
class c extends r.Ay.Store {
    getUserIdentities(e) {
        return l.get(e)?.identities ?? null;
    }
    getUserIdentityByApplication(e, t) {
        return l.get(e)?.byApplication.get(t) ?? null;
    }
    getFetchState(e) {
        return o.get(e) ?? "NOT_FETCHED";
    }
    isFetchingUser(e) {
        return "FETCHING" === this.getFetchState(e);
    }
}
let u = new c(a.h, {
    USER_APPLICATION_IDENTITY_FETCH_USER_START: function (e) {
        o.set(e.userId, "FETCHING");
    },
    USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: function (e) {
        o.set(e.userId, "FETCHED"), d(e.userId, e.identities);
    },
    USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: function (e) {
        o.set(e.userId, "FETCHED");
    },
    USER_APPLICATION_IDENTITY_REMOVE: function (e) {
        let t = l.get(e.user_id);
        if (null == t) return !1;
        d(
            e.user_id,
            t.identities.filter((t) => t.application_id !== e.application_id),
        );
    },
});
