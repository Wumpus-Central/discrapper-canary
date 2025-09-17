n.d(t, { Z: () => c }), n(388685);
var r = n(442837),
    i = n(570140);
let o = new Map(),
    a = new Set();
class l extends r.ZP.Store {
    getUserIdentities(e) {
        var t;
        return null != (t = o.get(e)) ? t : null;
    }
    isFetchingUser(e) {
        return a.has(e);
    }
}
let c = new l(i.Z, {
    USER_APPLICATION_IDENTITY_FETCH_USER_START: function (e) {
        a.add(e.userId);
    },
    USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: function (e) {
        a.delete(e.userId), o.set(e.userId, e.identities);
    },
    USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: function (e) {
        a.delete(e.userId);
    },
});
