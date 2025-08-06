(n.d(t, { Z: () => f }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733));
var r,
    i = n(442837),
    o = n(570140);
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
let s = new Map();
function l(e) {
    let { userId: t, key: n } = e,
        r = new Uint8Array(n);
    s.set(t, r);
}
function c(e) {
    let { userId: t } = e;
    return s.delete(t);
}
function u() {
    s.clear();
}
class d extends (r = i.ZP.Store) {
    getUsers() {
        return s;
    }
    isKeyVerified(e, t) {
        let n = s.get(e);
        if (null == t || null == n || n.length !== t.length) return !1;
        for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
        return !0;
    }
}
a(d, 'displayName', 'TransientKeyStore');
let f = new d(o.Z, {
    CONNECTION_OPEN: u,
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: l,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: c
});
