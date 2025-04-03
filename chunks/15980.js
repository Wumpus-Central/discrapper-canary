n.d(t, { Z: () => m }), n(47120);
var r,
    i,
    s,
    a = n(442837),
    l = n(570140),
    o = n(911969);
let c = !1,
    d = [];
class u extends (r = a.ZP.Store) {
    hasFetchedCredentials() {
        return c;
    }
    get hasCredentials() {
        return d.length > 0;
    }
    getCredentials() {
        return d;
    }
}
(s = 'WebAuthnStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = s);
let m = new u(l.Z, {
    LOGOUT: function () {
        (d = []), (c = !1);
    },
    MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
        (d = e.credentials), (c = !0);
    },
    AUTHENTICATOR_CREATE(e) {
        let { credential: t } = e;
        t.type === o.Pi.WEBAUTHN && void 0 === d.find((e) => e.id === t.id) && (d = [...d, t]);
    },
    AUTHENTICATOR_UPDATE(e) {
        let { credential: t } = e;
        t.type === o.Pi.WEBAUTHN && (d = d.map((e) => (e.id === t.id ? t : e)));
    },
    AUTHENTICATOR_DELETE(e) {
        let { credential: t } = e;
        t.type === o.Pi.WEBAUTHN && (d = d.filter((e) => e.id !== t.id));
    }
});
