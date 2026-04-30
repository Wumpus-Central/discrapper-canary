"use strict";
n.d(t, { A: () => o }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(17928),
    r = n(228366);
let s = new Map();
class a extends i.Ay.Store {
    static displayName = "TransientKeyStore";
    getUsers() {
        return s;
    }
    isKeyVerified(e, t) {
        let n = s.get(e);
        if (null == t || null == n || n.length !== t.length) return !1;
        for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
        return !0;
    }
}
let o = new a(r.h, {
    CONNECTION_OPEN: function () {
        s.clear();
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            i = new Uint8Array(n);
        s.set(t, i);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
        let { userId: t } = e;
        return s.delete(t);
    },
});
