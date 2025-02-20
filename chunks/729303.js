r.d(t, { Z: () => c }), r(47120), r(518263), r(970173), r(520712), r(268111), r(941497), r(32026), r(480839), r(744285), r(492257), r(873817), r(610885), r(126298);
var n,
    l,
    i,
    u = r(442837),
    s = r(570140);
let a = new Map();
class o extends (n = u.ZP.Store) {
    getUsers() {
        return a;
    }
    isKeyVerified(e, t) {
        let r = a.get(e);
        if (null == t || null == r || r.length !== t.length) return !1;
        for (let e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
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
        let { userId: t, key: r } = e,
            n = new Uint8Array(r);
        a.set(t, n);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
        let { userId: t } = e;
        return a.delete(t);
    }
});
