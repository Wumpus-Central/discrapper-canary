n.d(t, { Z: () => d }), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298), n(47120);
var r,
    l = n(442837),
    i = n(253135),
    o = n(570140),
    a = n(709054);
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
class u extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        var t;
        c = null != (t = null == e ? void 0 : e.users) ? t : {};
    }
    getState() {
        return { users: c };
    }
    getKeyTrustedAt(e, t) {
        var n;
        let r = (0, i.MK)(t);
        return null == (n = c[e]) ? void 0 : n[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return a.default.keys(c);
    }
    getUserVerifiedKeys(e) {
        return c[e];
    }
}
s(u, 'displayName', 'VerifiedKeyStore'), s(u, 'persistKey', 'VerifiedKeyStore');
let d = new u(o.Z, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
        let { userId: t, key: n } = e,
            r = (function (e) {
                var t;
                let n = null != (t = c[e]) ? t : {};
                return (c[e] = n), n;
            })(t),
            l = new Uint8Array(n);
        r[(0, i.MK)(l)] = Date.now();
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
        let { userId: t, serializedKey: n } = e,
            r = c[t];
        if (null == r) return !1;
        let l = delete r[n],
            i = !1;
        return 0 === Object.keys(r).length && (delete c[t], (i = !0)), l || i;
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
        let { userId: t } = e;
        return null != c[t] && delete c[t];
    }
});
