n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    a = n(280450);
let s = {};
class l extends i.Ay.PersistedStore {
    static displayName = "DerivedQosDataStore";
    static persistKey = "DerivedQosDataStore";
    initialize(e) {
        this.waitFor(a.default), (s = e ?? {});
    }
    getState() {
        return s;
    }
    getForCurrentUser() {
        return s[a.default.getId()]?.data;
    }
    getForUser(e) {
        return s[e]?.data;
    }
}
let o = new l(r.h, {
    CONNECTION_OPEN: function (e) {
        return null == e.qosToken
            ? (e.user.id, null != s[e.user.id] && (delete s[e.user.id], !0))
            : (e.user.id,
              e.qosToken,
              s[e.user.id]?.data !== e.qosToken && void (s[e.user.id] = { data: e.qosToken, updatedAt: Date.now() }));
    },
    LOGOUT: function (e) {
        if (e.isSwitchingAccount || null == e.userId) return !1;
        delete s[e.userId], e.userId;
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        delete s[e.userId], e.userId;
    },
});
