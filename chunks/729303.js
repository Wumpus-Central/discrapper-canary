n.d(t, { Z: () => c }), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var r,
    l,
    i,
    u = n(442837),
    s = n(570140);
let a = new Map();
class o extends (r = u.ZP.Store) {
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
(i = 'TransientKeyStore'),
    (l = 'displayName') in o
        ? Object.defineProperty(o, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = i);
let c = new o(s.Z, {
    CONNECTION_OPEN: function () {
        a.clear();
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            r = new Uint8Array(n);
        a.set(t, r);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
        let { userId: t } = e;
        return a.delete(t);
    }
});
