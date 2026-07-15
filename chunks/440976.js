r.d(t, { A: () => l }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var n = r(17928),
    E = r(228366);
let i = new Map();
class u extends n.Ay.Store {
    static displayName = "TransientKeyStore";
    getUsers() {
        return i;
    }
    isKeyVerified(e, t) {
        let r = i.get(e);
        if (null == t || null == r || r.length !== t.length) return !1;
        for (let e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
        return !0;
    }
}
let l = new u(E.h, {
    CONNECTION_OPEN: function () {
        i.clear();
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
        let { userId: t, key: r } = e,
            n = new Uint8Array(r);
        i.set(t, n);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
        let { userId: t } = e;
        return i.delete(t);
    },
});
