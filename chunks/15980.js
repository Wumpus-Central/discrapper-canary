n.d(t, { Z: () => h }), n(388685);
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
    u = !0;
}
function _() {
    u = !1;
}
class p extends (r = i.ZP.Store) {
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
s(p, "displayName", "WebAuthnStore");
let h = new p(a.Z, {
    LOGOUT: d,
    MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
        (c = e.credentials), (l = !0);
    },
    AUTHENTICATOR_CREATE(e) {
        let { credential: t } = e;
        t.type === o.Pi.WEBAUTHN && void 0 === c.find((e) => e.id === t.id) && (c = [...c, t]);
    },
    AUTHENTICATOR_UPDATE(e) {
        let { credential: t } = e;
        t.type === o.Pi.WEBAUTHN && (c = c.map((e) => (e.id === t.id ? t : e)));
    },
    AUTHENTICATOR_DELETE(e) {
        let { credential: t } = e;
        t.type === o.Pi.WEBAUTHN && (c = c.filter((e) => e.id !== t.id));
    },
    WEBAUTHN_TRIGGER_REGISTER: f,
    WEBAUTHN_CLEAR_REGISTER_TRIGGER: _,
});
