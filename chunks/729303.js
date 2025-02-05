n.d(t, { Z: () => c }), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var l,
    i,
    r,
    a = n(442837),
    s = n(570140);
let o = new Map();
class u extends (l = a.ZP.Store) {
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
(r = 'TransientKeyStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = r);
let c = new u(s.Z, {
    CONNECTION_OPEN: function () {
        o.clear();
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            l = new Uint8Array(n);
        o.set(t, l);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
        let { userId: t } = e;
        return o.delete(t);
    }
});
