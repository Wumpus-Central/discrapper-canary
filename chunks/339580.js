n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(311907),
    i = n(73153);
let a = new Map(),
    s = new Set();

function o(e, t) {
    let n = new Map(t.map((e) => [e.application_id, e]));
    a.set(e, {
        identities: t,
        byApplication: n,
    });
}

function l(e) {
    s.add(e.userId);
}

function c(e) {
    s.delete(e.userId), o(e.userId, e.identities);
}

function u(e) {
    s.delete(e.userId);
}

function d(e) {
    let t = a.get(e.user_id);
    if (null == t) return !1;
    o(
        e.user_id,
        t.identities.filter((t) => t.application_id !== e.application_id),
    );
}
class f extends r.Ay.Store {
    getUserIdentities(e) {
        var t, n;
        return null != (t = null == (n = a.get(e)) ? void 0 : n.identities) ? t : null;
    }
    getUserIdentityByApplication(e, t) {
        var n, r;
        return null != (n = null == (r = a.get(e)) ? void 0 : r.byApplication.get(t)) ? n : null;
    }
    isFetchingUser(e) {
        return s.has(e);
    }
}
let p = new f(i.h, {
    USER_APPLICATION_IDENTITY_FETCH_USER_START: l,
    USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: c,
    USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: u,
    USER_APPLICATION_IDENTITY_REMOVE: d,
});
