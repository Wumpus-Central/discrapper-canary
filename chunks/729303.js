n.d(t, { Z: () => s }),
    n(388685),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
var r,
    i,
    l = n(442837),
    a = n(570140);
let o = new Map();
class c extends (r = l.ZP.Store) {
    getUsers() {
        return o;
    }
    isKeyVerified(e, t) {
        let n = o.get(e);
        if (null == t || null == n || n.length !== t.length) return !1;
        for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
        return !0;
    }
}
(i = "displayName") in c
    ? Object.defineProperty(c, i, {
          value: "TransientKeyStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[i] = "TransientKeyStore");
let s = new c(a.Z, {
    CONNECTION_OPEN: function () {
        o.clear();
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            r = new Uint8Array(n);
        o.set(t, r);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
        let { userId: t } = e;
        return o.delete(t);
    },
});
