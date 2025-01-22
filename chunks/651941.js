n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(47120);
var i,
    r = n(442837),
    l = n(253135),
    a = n(570140),
    o = n(709054);
function s(e, t, n) {
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
class u extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t;
        c = null !== (t = null == e ? void 0 : e.users) && void 0 !== t ? t : {};
    }
    getState() {
        return { users: c };
    }
    getKeyTrustedAt(e, t) {
        var n;
        let i = (0, l.MK)(t);
        return null === (n = c[e]) || void 0 === n ? void 0 : n[i];
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
s(u, 'displayName', 'VerifiedKeyStore'),
    s(u, 'persistKey', 'VerifiedKeyStore'),
    (t.Z = new u(a.Z, {
        SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
                i = (function (e) {
                    var t;
                    let n = null !== (t = c[e]) && void 0 !== t ? t : {};
                    return (c[e] = n), n;
                })(t),
                r = new Uint8Array(n);
            i[(0, l.MK)(r)] = Date.now();
        },
        SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
                i = c[t];
            if (null == i) return !1;
            let r = delete i[n],
                l = !1;
            return 0 === Object.keys(i).length && (delete c[t], (l = !0)), r || l;
        },
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != c[t] && delete c[t];
        }
    }));
