n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(47120);
var r,
    i = n(442837),
    u = n(253135),
    l = n(570140),
    o = n(709054);
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
let c = {};
class s extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        c = null !== (t = null == e ? void 0 : e.users) && void 0 !== t ? t : {};
    }
    getState() {
        return { users: c };
    }
    getKeyTrustedAt(e, t) {
        var n;
        let r = (0, u.MK)(t);
        return null === (n = c[e]) || void 0 === n ? void 0 : n[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return o.default.keys(c);
    }
    getUserVerifiedKeys(e) {
        return c[e];
    }
}
a(s, 'displayName', 'VerifiedKeyStore'),
    a(s, 'persistKey', 'VerifiedKeyStore'),
    (t.Z = new s(l.Z, {
        SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
                r = (function (e) {
                    var t;
                    let n = null !== (t = c[e]) && void 0 !== t ? t : {};
                    return (c[e] = n), n;
                })(t),
                i = new Uint8Array(n);
            r[(0, u.MK)(i)] = Date.now();
        },
        SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
                r = c[t];
            if (null == r) return !1;
            let i = delete r[n],
                u = !1;
            return 0 === Object.keys(r).length && (delete c[t], (u = !0)), i || u;
        },
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != c[t] && delete c[t];
        }
    }));
