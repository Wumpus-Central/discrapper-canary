n.d(t, { Z: () => m }),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(388685);
var r,
    i = n(442837),
    a = n(974167),
    o = n(570140),
    s = n(709054);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = {};
function u(e) {
    var t;
    let n = null != (t = c[e]) ? t : {};
    return (c[e] = n), n;
}
function d(e) {
    let { userId: t, key: n } = e,
        r = u(t),
        i = new Uint8Array(n);
    r[(0, a.MK)(i)] = Date.now();
}
function f(e) {
    let { userId: t, serializedKey: n } = e,
        r = c[t];
    if (null == r) return !1;
    let i = delete r[n],
        a = !1;
    return 0 === Object.keys(r).length && (delete c[t], (a = !0)), i || a;
}
function p(e) {
    let { userId: t } = e;
    return null != c[t] && delete c[t];
}
class _ extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        c = null != (t = null == e ? void 0 : e.users) ? t : {};
    }
    getState() {
        return { users: c };
    }
    getKeyTrustedAt(e, t) {
        var n;
        let r = (0, a.MK)(t);
        return null == (n = c[e]) ? void 0 : n[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return s.default.keys(c);
    }
    getUserVerifiedKeys(e) {
        return c[e];
    }
}
l(_, "displayName", "VerifiedKeyStore"), l(_, "persistKey", "VerifiedKeyStore");
let m = new _(o.Z, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: d,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: f,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: p,
});
