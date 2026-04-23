"use strict";
n.d(t, { A: () => u, e: () => a });
var i,
    r = n(17928),
    s = n(228366),
    a = (((i = {}).NOT_FETCHED = "NOT_FETCHED"), (i.FETCHING = "FETCHING"), (i.FETCHED = "FETCHED"), i);
let o = new Map(),
    l = new Map();
function d(e, t) {
    let n = new Map(t.map((e) => [e.application_id, e]));
    o.set(e, { identities: t, byApplication: n }), l.set(e, "FETCHED");
}
class _ extends r.Ay.Store {
    getUserIdentities(e) {
        return o.get(e)?.identities ?? null;
    }
    getUserIdentityByApplication(e, t) {
        return o.get(e)?.byApplication.get(t) ?? null;
    }
    getFetchState(e) {
        return l.get(e) ?? "NOT_FETCHED";
    }
    isFetchingUser(e) {
        return "FETCHING" === this.getFetchState(e);
    }
}
let u = new _(s.h, {
    USER_APPLICATION_IDENTITY_FETCH_USER_START: function (e) {
        l.set(e.userId, "FETCHING");
    },
    USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: function (e) {
        l.set(e.userId, "FETCHED"), d(e.userId, e.identities);
    },
    USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: function (e) {
        l.set(e.userId, "FETCHED");
    },
    USER_APPLICATION_IDENTITY_REMOVE: function (e) {
        let t = o.get(e.user_id);
        if (null == t) return !1;
        d(
            e.user_id,
            t.identities.filter((t) => t.application_id !== e.application_id),
        );
    },
});
