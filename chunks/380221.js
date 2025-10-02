n.d(t, { Z: () => f }), n(388685);
var r = n(442837),
    i = n(570140);
let a = new Map(),
    o = new Set();
function s(e) {
    o.add(e.userId);
}
function l(e) {
    o.delete(e.userId), a.set(e.userId, e.identities);
}
function c(e) {
    o.delete(e.userId);
}
function u(e) {
    let t = a.get(e.user_id);
    if (null == t) return !1;
    a.set(
        e.user_id,
        t.filter((t) => t.application_id !== e.application_id),
    );
}
class d extends r.ZP.Store {
    getUserIdentities(e) {
        var t;
        return null != (t = a.get(e)) ? t : null;
    }
    isFetchingUser(e) {
        return o.has(e);
    }
}
let f = new d(i.Z, {
    USER_APPLICATION_IDENTITY_FETCH_USER_START: s,
    USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: l,
    USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: c,
    USER_APPLICATION_IDENTITY_REMOVE: u,
});
