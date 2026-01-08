n.d(t, { Z: () => p }), n(388685);
var r = n(442837),
    i = n(570140);
let a = new Map(),
    o = new Set();
function s(e, t) {
    let n = new Map(t.map((e) => [e.application_id, e]));
    a.set(e, {
        identities: t,
        byApplication: n,
    });
}
function l(e) {
    o.add(e.userId);
}
function c(e) {
    o.delete(e.userId), s(e.userId, e.identities);
}
function u(e) {
    o.delete(e.userId);
}
function d(e) {
    let t = a.get(e.user_id);
    if (null == t) return !1;
    s(
        e.user_id,
        t.identities.filter((t) => t.application_id !== e.application_id),
    );
}
class f extends r.ZP.Store {
    getUserIdentities(e) {
        var t, n;
        return null != (n = null == (t = a.get(e)) ? void 0 : t.identities) ? n : null;
    }
    getUserIdentityByApplication(e, t) {
        var n, r;
        return null != (r = null == (n = a.get(e)) ? void 0 : n.byApplication.get(t)) ? r : null;
    }
    isFetchingUser(e) {
        return o.has(e);
    }
}
let p = new f(i.Z, {
    USER_APPLICATION_IDENTITY_FETCH_USER_START: l,
    USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: c,
    USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: u,
    USER_APPLICATION_IDENTITY_REMOVE: d,
});
