n.d(t, { A: () => r }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(311907),
    l = n(73153);
let a = new Map();
class s extends i.Ay.Store {
    static displayName = "TransientKeyStore";
    getUsers() {
        return a;
    }
    isKeyVerified(e, t) {
        let n = a.get(e);
        if (null == t || null == n || n.length !== t.length) return !1;
        for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
        return !0;
    }
}
let r = new s(l.h, {
    CONNECTION_OPEN: function () {
        a.clear();
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            i = new Uint8Array(n);
        a.set(t, i);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
        let { userId: t } = e;
        return a.delete(t);
    },
});
