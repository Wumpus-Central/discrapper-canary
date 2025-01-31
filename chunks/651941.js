n.d(t, { Z: () => d }), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(47120);
var r,
    i = n(442837),
    l = n(253135),
    a = n(570140),
    o = n(709054);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = {};
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        s = null !== (t = null == e ? void 0 : e.users) && void 0 !== t ? t : {};
    }
    getState() {
        return { users: s };
    }
    getKeyTrustedAt(e, t) {
        var n;
        let r = (0, l.MK)(t);
        return null === (n = s[e]) || void 0 === n ? void 0 : n[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return o.default.keys(s);
    }
    getUserVerifiedKeys(e) {
        return s[e];
    }
}
u(c, 'displayName', 'VerifiedKeyStore'), u(c, 'persistKey', 'VerifiedKeyStore');
let d = new c(a.Z, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            r = (function (e) {
                var t;
                let n = null !== (t = s[e]) && void 0 !== t ? t : {};
                return (s[e] = n), n;
            })(t),
            i = new Uint8Array(n);
        r[(0, l.MK)(i)] = Date.now();
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
        let { userId: t, serializedKey: n } = e,
            r = s[t];
        if (null == r) return !1;
        let i = delete r[n],
            l = !1;
        return 0 === Object.keys(r).length && (delete s[t], (l = !0)), i || l;
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
        let { userId: t } = e;
        return null != s[t] && delete s[t];
    }
});
