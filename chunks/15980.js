n.d(t, { Z: () => f }), n(388685);
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
    c = [];
function u() {
    (c = []), (l = !1);
}
class d extends (r = i.ZP.Store) {
    hasFetchedCredentials() {
        return l;
    }
    get hasCredentials() {
        return c.length > 0;
    }
    getCredentials() {
        return c;
    }
}
s(d, "displayName", "WebAuthnStore");
let f = new d(a.Z, {
    LOGOUT: u,
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
});
