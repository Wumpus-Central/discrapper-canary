(n.d(t, { Z: () => c }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733));
var r,
    l,
    i,
    a = n(442837),
    o = n(570140);
let u = new Map();
class s extends (r = a.ZP.Store) {
    getUsers() {
        return u;
    }
    isKeyVerified(e, t) {
        let n = u.get(e);
        if (null == t || null == n || n.length !== t.length) return !1;
        for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
        return !0;
    }
}
((i = 'TransientKeyStore'),
    (l = 'displayName') in s
        ? Object.defineProperty(s, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[l] = i));
let c = new s(o.Z, {
    CONNECTION_OPEN: function () {
        u.clear();
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            r = new Uint8Array(n);
        u.set(t, r);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
        let { userId: t } = e;
        return u.delete(t);
    }
});
