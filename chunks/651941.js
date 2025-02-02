n.d(t, { Z: () => d }), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(47120);
var r,
    l = n(442837),
    i = n(253135),
    u = n(570140),
    s = n(709054);
function a(e, t, n) {
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
let o = {};
class c extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        var t;
        o = null !== (t = null == e ? void 0 : e.users) && void 0 !== t ? t : {};
    }
    getState() {
        return { users: o };
    }
    getKeyTrustedAt(e, t) {
        var n;
        let r = (0, i.MK)(t);
        return null === (n = o[e]) || void 0 === n ? void 0 : n[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return s.default.keys(o);
    }
    getUserVerifiedKeys(e) {
        return o[e];
    }
}
a(c, 'displayName', 'VerifiedKeyStore'), a(c, 'persistKey', 'VerifiedKeyStore');
let d = new c(u.Z, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            r = (function (e) {
                var t;
                let n = null !== (t = o[e]) && void 0 !== t ? t : {};
                return (o[e] = n), n;
            })(t),
            l = new Uint8Array(n);
        r[(0, i.MK)(l)] = Date.now();
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
        let { userId: t, serializedKey: n } = e,
            r = o[t];
        if (null == r) return !1;
        let l = delete r[n],
            i = !1;
        return 0 === Object.keys(r).length && (delete o[t], (i = !0)), l || i;
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
        let { userId: t } = e;
        return null != o[t] && delete o[t];
    }
});
