n.d(t, { Z: () => c }), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298);
var r,
    l,
    i,
    a = n(442837),
    o = n(570140);
let s = new Map();
class u extends (r = a.ZP.Store) {
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
(i = 'TransientKeyStore'),
    (l = 'displayName') in u
        ? Object.defineProperty(u, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[l] = i);
let c = new u(o.Z, {
    CONNECTION_OPEN: function () {
        s.clear();
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            r = new Uint8Array(n);
        s.set(t, r);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
        let { userId: t } = e;
        return s.delete(t);
    }
});
