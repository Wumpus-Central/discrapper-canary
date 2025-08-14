n.d(t, { Z: () => u }), n(388685);
var i,
    r,
    s = n(442837),
    a = n(570140),
    l = n(911969);
let o = !1,
    c = [];
class d extends (i = s.ZP.Store) {
    hasFetchedCredentials() {
        return o;
    }
    get hasCredentials() {
        return c.length > 0;
    }
    getCredentials() {
        return c;
    }
}
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "WebAuthnStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "WebAuthnStore");
let u = new d(a.Z, {
    LOGOUT: function () {
        (c = []), (o = !1);
    },
    MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
        (c = e.credentials), (o = !0);
    },
    AUTHENTICATOR_CREATE(e) {
        let { credential: t } = e;
        t.type === l.Pi.WEBAUTHN && void 0 === c.find((e) => e.id === t.id) && (c = [...c, t]);
    },
    AUTHENTICATOR_UPDATE(e) {
        let { credential: t } = e;
        t.type === l.Pi.WEBAUTHN && (c = c.map((e) => (e.id === t.id ? t : e)));
    },
    AUTHENTICATOR_DELETE(e) {
        let { credential: t } = e;
        t.type === l.Pi.WEBAUTHN && (c = c.filter((e) => e.id !== t.id));
    },
});
