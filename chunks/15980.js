n.d(t, { Z: () => m }), n(47120);
var i,
    s,
    r,
    l = n(442837),
    a = n(570140),
    o = n(911969);
let c = !1,
    d = [];
class u extends (i = l.ZP.Store) {
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
(r = 'WebAuthnStore'),
    (s = 'displayName') in u
        ? Object.defineProperty(u, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[s] = r);
let m = new u(a.Z, {
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
