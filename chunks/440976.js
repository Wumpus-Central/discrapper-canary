n.d(t, { A: () => c }),
    n(896048),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
var l,
    r,
    i = n(311907),
    a = n(73153);
let s = new Map();
class o extends (l = i.Ay.Store) {
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
(r = "displayName") in o
    ? Object.defineProperty(o, r, {
          value: "TransientKeyStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[r] = "TransientKeyStore");
let c = new o(a.h, {
    CONNECTION_OPEN: function () {
        s.clear();
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            l = new Uint8Array(n);
        s.set(t, l);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
        let { userId: t } = e;
        return s.delete(t);
    },
});
