r.d(t, { Z: () => c }), r(388685), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733);
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
