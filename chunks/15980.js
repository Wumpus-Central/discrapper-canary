n.d(t, { Z: () => b }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(911969);
function s(e, t, n) {
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
let l = !1,
    c = [],
    u = !1;
function d() {
    (c = []), (l = !1), (u = !1);
}
function f() {
    if (u) return !1;
    u = !0;
}
function _() {
    if (!u) return !1;
    u = !1;
}
function p(e) {
    let { credentials: t } = e,
        n = !1;
    return c !== t && ((c = t), (n = !0)), l || ((l = !0), (n = !0)), n;
}
function h(e) {
    let { credential: t } = e;
    if (t.type !== o.Pi.WEBAUTHN || void 0 !== c.find((e) => e.id === t.id)) return !1;
    c = [...c, t];
}
function m(e) {
    let { credential: t } = e;
    if (t.type !== o.Pi.WEBAUTHN) return !1;
    c = c.map((e) => (e.id === t.id ? t : e));
}
function g(e) {
    let { credential: t } = e;
    if (t.type !== o.Pi.WEBAUTHN) return !1;
    c = c.filter((e) => e.id !== t.id);
}
class E extends (r = i.ZP.Store) {
    hasFetchedCredentials() {
        return l;
    }
    get hasCredentials() {
        return c.length > 0;
    }
    getCredentials() {
        return c;
    }
    hasPendingRegisterTrigger() {
        return u;
    }
}
s(E, "displayName", "WebAuthnStore");
let b = new E(a.Z, {
    LOGOUT: d,
    MFA_WEBAUTHN_CREDENTIALS_LOADED: p,
    AUTHENTICATOR_CREATE: h,
    AUTHENTICATOR_UPDATE: m,
    AUTHENTICATOR_DELETE: g,
    WEBAUTHN_TRIGGER_REGISTER: f,
    WEBAUTHN_CLEAR_REGISTER_TRIGGER: _,
});
