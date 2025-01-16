n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var i,
    l,
    a,
    r,
    s = n(442837),
    o = n(570140);
let c = new Map();
class u extends (i = s.ZP.Store) {
    getUsers() {
        return c;
    }
    isKeyVerified(e, t) {
        let n = c.get(e);
        if (null == t || null == n || n.length !== t.length) return !1;
        for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
        return !0;
    }
}
(r = 'TransientKeyStore'),
    (a = 'displayName') in (l = u)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (t.Z = new u(o.Z, {
        CONNECTION_OPEN: function () {
            c.clear();
        },
        SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
                i = new Uint8Array(n);
            c.set(t, i);
        },
        SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
            let { userId: t } = e;
            return c.delete(t);
        }
    }));
